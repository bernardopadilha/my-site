import { Envelope, GithubLogo, LinkedinLogo, Phone } from "phosphor-react";

export function Contact() {
  return (
    <div className="w-full max-w-[1440px] px-8 md:px-[5.625rem] pb-[55px] flex flex-col items-start justify-center">
      <h1 className="text-3xl md:text-4xl font-semibold mt-24 mb-9">Contato</h1>

      <div className="w-full md:px-[11.75rem]">
        <h1 className=" flex gap-2 text-blue600 mb-2 font-medium">
          <Envelope size={24} color="#0284C7" />
          <p>bernardo_limas@hotmail.com</p>
        </h1>

        <h1 className=" flex gap-2 text-blue600 mb-2 font-medium">
          <Phone size={24} color="#0284C7" />
          <p>(48) 99158-3678</p>
        </h1>

        <h1 className=" flex gap-2 text-blue600 mb-2 font-medium hover:underline">
          <LinkedinLogo size={24} color="#0284C7" />
          <a href="https://www.linkedin.com/in/bernardo-alves-padilha-8474a3232/">
            Linkedin
          </a>
        </h1>

        <h1 className=" flex gap-2 text-blue600 mb-2 font-medium hover:underline">
          <GithubLogo size={24} color="#0284C7" />
          <a href="https://github.com/BernardoPadilha">GitHub</a>
        </h1>
      </div>

      <p className="font-bold text-text opacity-40 mt-24 mx-auto">
        Feito por Bernardo Alves Padilha
      </p>
    </div>
  );
}
