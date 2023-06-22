import { products } from "../../utils/generete-projects";
import { CardProject } from "../CardProject";

export function Projects() {
  return (
    <div className="w-full h-[full] flex flex-col items-center justify-start bg-teste bg-center bg-cover bg-no-repeat">
      <div className="w-full max-w-[1440px] px-8 md:px-[5.625rem]">
        <h1 className="mt-[6rem] text-4xl md:text-5xl text-white font-bold">Projetos</h1>

        {products.map((product) => {
          return (
            <CardProject
              key={product.id}
              title={product.title}
              icon={product.icon}
              img={product.banner}
              content={product.content}
              linkGithub={product.link}
            />
          );
        })}
      </div>
    </div>
  );
}
