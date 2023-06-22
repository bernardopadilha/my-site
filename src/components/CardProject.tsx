interface CardProjectProps {
  title: string;
  img: string;
  icon: string[];
  content: string;
  linkGithub: string;
}

export function CardProject({
  content,
  icon,
  img,
  linkGithub,
  title,
}: CardProjectProps) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between gap-12 mt-[3.875rem] mb-10 md:mb-36">
        <h1 className="text-4xl text-white font-bold">{title}</h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-[3.625rem] mt-3 md:mt-14">
          <img src={img} alt="" className="" />

          <div>
            <div className="w-full flex items-center gap-4 h-6">
              <h1 className="text-2xl font-bold text-blue600">
                Tecnologias usadas:
              </h1>

              {icon.map((icons: any) => {
                return <img src={icons} alt="" />;
              })}
            </div>

            <p className="text-lg md:text-2xl font-regular md:font-bold text-white mt-7">{content}</p>
          </div>
        </div>

        <div className=" flex items-center gap-9 ">
          <button className="w-[10rem] h-[48px] bg-transparent text-white text-center border border-solid transition-all duration-300 relative border-blue600 after:absolute after:content-[''] after:top-0 after:left-0 after:w-0 after:h-full after:bg-blue600 after:transition-all after:duration-5 00 hover:after:w-full">
            <a href={linkGithub} className="relative z-[2]">
              código
            </a>
          </button>
        </div>

        <div className="w-[120px] h-4 bg-separatorCard rounded-full"></div>
      </div>
    </div>
  );
}
