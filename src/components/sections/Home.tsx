import Banner from "../../../public/banner.png";

export function Home() {
  return (
    <section
      id="home"
      className="w-full max-w-[1440px] h-auto py-20 md:py-0 md:h-screen px-8 md:px-[5.625rem] mb-16 flex flex-col md:flex-row items-center justify-between mt-14"
    >
      <div className="flex flex-col items-start justify-center mr-4">
        <div>
          <h1 className="text-3xl whitespace-nowrap xl:text-5xl font-bold">
            Bernardo Padilha
          </h1>
          <span className="w-[15.5rem] h-[2.375] flex items-center justify-center bg-purple500 text-white rounded-md text-xl font-bold mt-2 xl:left-[220px] md:mt-0">
            front-end developer
          </span>
        </div>
        <p className="text-xl md:text-3xl font-bold mt-5 md:mt-[5.5rem]">
          Bem vindo(a) ao meu portifólio ! Nesta página você encontrará meus
          projetos pessoais minhas skils e minhas informações de contato.
        </p>
      </div>

      <img
        src={Banner}
        className="mt-10 md:mt-0 w-full aspect-square md:w-[630px] md:h-[612px]"
      />
    </section>
  );
}

// aspect-square: pega o tamanho do w que esta full e aplica o msm tamanho pro h
