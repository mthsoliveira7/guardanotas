// src/components/Nota.tsx
import { useState } from "react";
import { useStore } from "../store";
import { ITENS_NOTA } from "../constants";

const Nota: React.FC<ITENS_NOTA> = ({ id, text }) => {
  const { editarNota, excluirNota } = useStore();
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(text);

  const handleEditar = () => {
    setEditando(true);
  };

  const handleSalvar = () => {
    editarNota(id, textoEditado);
    setEditando(false);
  };

  return (
    <div className="h-64 bg-zinc-700 bg-opacity-40 p-6 rounded-lg relative hover:ring-1 ring-indigo-500">
      {editando ? (
        <>
          <textarea
            name="nota"
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
            className="w-full h-full bg-zinc-800 text-xl text-indigo-400 leading-6 font-semibold underline underline-offset-4 overflow-hidden focus:outline-none"
          />
          <div className="absolute bottom-0 right-0 flex p-4">
            <button
              onClick={handleSalvar}
              className="bg-indigo-500 hover:bg-indigo-600 text-white  text-[13px] font-bold py-1 px-3 mr-2  mt-10 rounded transition duration-300 ease-in-out"
            >
              Salvar
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-xl text-white leading-6 font-semibold overflow-hidden">
            {text}
          </p>
          <div className="absolute bottom-0 right-0 flex p-4">
            <button
              title="Editar anotação"
              onClick={handleEditar}
              className="bg-zinc-900 lg:opacity-70 hover:opacity-100 text-white hover:text-yellow-500  text-[13px] font-bold py-1 px-3 mr-2  mt-10 rounded transition duration-300 ease-in-out"
            >
              Editar
            </button>
            <button
              title="Excluir anotação"
              onClick={() => excluirNota(id)}
              className="bg-zinc-900 lg:opacity-70 hover:opacity-100 text-white hover:text-red-500  text-[13px] font-bold py-1 px-3 mt-10 rounded transition duration-300 ease-in-out"
            >
              Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Nota;
