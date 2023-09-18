// src/components/Header.tsx
import { LIMITE_CARACTERES } from "../constants";

interface HeaderProps {
  novaNota: string;
  numCaracteres: number;
  onNovaNotaChange: (text: string) => void;
  onAdcNota: () => void;
}

const Header: React.FC<HeaderProps> = ({
  novaNota,
  numCaracteres,
  onNovaNotaChange,
  onAdcNota,
}) => {
  return (
    <div className="container px-5 pt-24 mx-auto flex flex-wrap">
      <div className="flex flex-col text-center w-full mb-10 md:mb-20">
        <h2 className="text-xs text-indigo-400 tracking-widest font-medium uppercase mb-4">
          Salve suas ideias com notas online
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white">
          GuardaNotas ✍️
        </h1>
      </div>

      <div className="flex w-full lg:flex-row flex-col mx-auto  items-end sm:space-x-4 sm:space-y-0 space-y-4">
        <div className="relative md:mb-4 flex-grow w-full">
          <input
            type="text"
            name="nota"
            placeholder="Escreva uma nova nota..."
            value={novaNota}
            onChange={(e) => onNovaNotaChange(e.target.value)}
            className="w-full bg-zinc-700 bg-opacity-40 rounded border border-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-zinc-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="flex lg:pb-4">
          <p className="text-zinc-500  py-2 pr-3 text-lg">
            {numCaracteres}/{LIMITE_CARACTERES}
          </p>
          <button
            onClick={onAdcNota}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-base font-bold transition duration-300 ease-in-out"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
