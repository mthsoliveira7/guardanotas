import { useEffect, useState } from "react";
import { useStore } from "./store";
import Header from "./componentes/Header";
import ListaDeNotas from "./componentes/ListaDeNotas";
import Footer from "./componentes/Footer";

function App() {
  const { notas, adcNota } = useStore();
  const [novaNota, setNovaNota] = useState<string>("");
  const [numCaracteres, setNumCaracteres] = useState<number>(0);

  useEffect(() => {
    const notasSalvas = JSON.parse(localStorage.getItem("notas") || "[]");
    if (notasSalvas) {
      useStore.setState({ notas: notasSalvas });
    }
  }, []);

  const handleAdcNota = () => {
    if (novaNota.trim() !== "") {
      adcNota(novaNota);
      setNovaNota("");
      setNumCaracteres(0);
    }
  };

  const handleNovaNotaChange = (text: string) => {
    setNovaNota(text);
    setNumCaracteres(text.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        novaNota={novaNota}
        numCaracteres={numCaracteres}
        onNovaNotaChange={handleNovaNotaChange}
        onAdcNota={handleAdcNota}
      />
      <ListaDeNotas notas={notas} />
      <Footer />
    </div>
  );
}

export default App;
