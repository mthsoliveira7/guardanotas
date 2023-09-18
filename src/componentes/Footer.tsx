const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto mt-auto lg:w-2/3 p-5 text-justify lg:text-left text-sm text-zinc-500 ">
      <a
        href="https://www.figma.com/community/file/1285285784771074425/Guardanotas---Aplicativo-CRUD"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        Projetado
      </a>{" "}
      no Figma e{" "}
      <a
        href="https://github.com/mthsoliveira7/guardanotas"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        codado
      </a>{" "}
      no VS Code por{" "}
      <a
        href="https://www.linkedin.com/in/mthsoliveira7/"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        Matheus Oliveira
      </a>
      . Construído com{" "}
      <a
        href="https://vitejs.dev/"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        Vite
      </a>
      . As linguagens utilizadas incluem{" "}
      <a
        href="https://react.dev/"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        React
      </a>{" "}
      e{" "}
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        TypeScript
      </a>
      . Usei{" "}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        Tailwind
      </a>{" "}
      para os estilos CSS e{" "}
      <a
        href="https://docs.pmnd.rs/zustand/getting-started/introduction"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        Zustand
      </a>{" "}
      como gerenciador de estado. Foi utilizada a fonte{" "}
      <a
        href="https://rsms.me/inter/"
        target="_blank"
        className="font-bold text-zinc-400 hover:text-indigo-400"
      >
        Inter
      </a>{" "}
      em todo o site.
    </footer>
  );
};

export default Footer;
