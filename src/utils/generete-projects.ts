import project_1 from "../../public/project_1.png";
import project_2 from "../../public/project_2.png";
import project_3 from "../../public/project_3.png";
import project_4 from "../../public/project_4.png";
import project_5 from "../../public/project_5.png";

import reactIcon from "../../public/react.png";
import jsIcon from "../../public/js.png";
import tsIcon from "../../public/ts.png";
import tailwindIcon from "../../public/tailwind.png";
import htmlIcon from "../../public/html.png";
import cssIcon from "../../public/css.png";

export const products = [
  {
    id: 1,
    title: "stopwatch",
    banner: project_1,
    icon: [reactIcon, tsIcon, tailwindIcon],
    content:
      "stopwatch é um site de cronometro que serve para auxiliar nas atividades desempenhada em um dia a dia qualquer, este projeto faz parte do curso da rocketseat e graças a ele tive meu primeito contato com as paginações do React e com o hook UseContext que nos permite compartilhar de forma dinâmica funções e estados com toda a aplicação.",
    link: "https://github.com/BernardoPadilha/stopwatch",
  },

  {
    id: 2,
    title: "GitHub Blog",
    banner: project_2,
    icon: [reactIcon, tsIcon, tailwindIcon],

    content:
      "Este projeto foi um desafio proposto pelo curso da Rocketseat, onde consta em puxar informações da api do GitHub,trazendo dados pessoais como nome, foto de perfil e também dados dos meus repositórios. Dessa forma pude me aprofundar em funções assíncronas, aprendi a usar o axios para definir um endpoint facilitando muito na aplicação.",
    link: "https://github.com/BernardoPadilha/GitHub-blog",
  },

  {
    id: 3,
    title: "Coffee Delivery",
    banner: project_3,
    icon: [reactIcon, tsIcon, tailwindIcon],

    content:
      "Este projeto foi um desafio da Rocketseat onde consistia em montar um e-commerce de cafés. Foi necessário criar três páginas diferentes onde uma delas ficava os produtos, outra fazia por meio do react-hook-form a validação do formulário de endereço e a escolha da forma de pagamento, e a última a confirmação do pedido. Aqui foi uma virada de chave no meu aprendizado, consegui extrair muita coisa importante deste desafio.",
    link: "https://github.com/BernardoPadilha/Coffee-delivery",
  },

  {
    id: 4,
    title: "DT Money",
    banner: project_4,
    icon: [reactIcon, tsIcon],

    content:
      "Este projeto foi um dos módulos de aula da Rocketseat que se baseia em por meio de uma fake api o usuário pode registrar tranferências bancárias para um controle financeir. Foi aqui onde tive meu primeiro contato com api, com o fech API , o axios e os métodos de requisição.",
    link: "https://github.com/BernardoPadilha/DT-Money",
  },

  {
    id: 5,
    title: "To-do List",
    banner: project_5,
    icon: [reactIcon, jsIcon, tailwindIcon],

    content:
      "Este foi o primeiro desafio do curso da Rocketseat, que se dava em escrever uma tarefa a ser concluida, e que o usuário pudesse marcar e desmarca-la e excluíla definitivamente. Por ser um dos primeiros desafios eu acabei passando bastante dificuldades com as funções, mas acabou que não desisti e consegui terminar ele.",
    link: "https://github.com/BernardoPadilha/to-do-list",
  },
];
