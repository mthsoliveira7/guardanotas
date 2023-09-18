// src/store.js
import { create } from "zustand";
import { ITENS_NOTA, LIMITE_CARACTERES } from "./constants";

interface StoreState {
  notas: ITENS_NOTA[];
  adcNota: (text: string) => void;
  editarNota: (id: number, text: string) => void;
  excluirNota: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  notas: JSON.parse(localStorage.getItem("notas") || "[]") as ITENS_NOTA[],

  adcNota: (text) => {
    const texto = text.trim();

    if (texto === "") {
      window.alert("Invalid input: Please enter a non-empty nota.");
      return;
    }

    if (texto.length > LIMITE_CARACTERES) {
      window.alert(
        `Sua nota excedeu o limite de ${LIMITE_CARACTERES} caracteres.`
      );
      return;
    }
    set((state) => {
      const novaNota = { id: Date.now(), text: texto };
      const notasAtualizadas = [...state.notas, novaNota];
      localStorage.setItem("notas", JSON.stringify(notasAtualizadas));
      return { notas: notasAtualizadas };
    });
  },

  editarNota: (id, text) => {
    const texto = text.trim();

    if (texto === "") {
      window.alert("Por favor adicione conteúdo na sua nota.");
      return;
    }

    if (texto.length > LIMITE_CARACTERES) {
      window.alert(
        `Sua nota excedeu o limite de ${LIMITE_CARACTERES} caracteres.`
      );
      return;
    }

    set((state) => {
      const notasAtualizadas = state.notas.map((nota) =>
        nota.id === id ? { ...nota, text: texto } : nota
      );
      localStorage.setItem("notas", JSON.stringify(notasAtualizadas));
      return { notas: notasAtualizadas };
    });
  },

  excluirNota: (id) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir essa nota?"
    );

    if (confirmacao) {
      set((state) => {
        const notasAtualizadas = state.notas.filter((nota) => nota.id !== id);
        localStorage.setItem("notas", JSON.stringify(notasAtualizadas));
        return { notas: notasAtualizadas };
      });
    }
  },
}));
