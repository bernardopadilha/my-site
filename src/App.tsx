import { Header } from "./components/sections/Header";
import { Contact } from "./components/sections/Contact";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import "./global.css";

export function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col lex-nowrap items-center justify-start">
      <section className="w-full h-auto md:h-screen flex flex-col items-center">
        <header className="w-full ">
          <Header />
        </header>
        <Home />
      </section>

      <div className="w-full flex flex-col items-center justify-between ">
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
