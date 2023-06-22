import { List } from "phosphor-react";
import logo from "../../public/logo.png"

export function Header() {

  return (
    <div className="w-full h-[120px] flex items-center justify-center border-solid border-b border-separatorHeader">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="w-full flex items-center justify-between">
          <div className="md:hidden"></div>
          <div>
            <img className="h-[60px]" src={logo} alt="" />
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center justify-center gap-20">
              <li className="font-semibold text-2xl text-text hover:text-purple500">
                <a href="">Home</a>
              </li>
              <li className="font-semibold text-2xl text-text hover:text-purple500">
                <a href="">Projetos</a>
              </li>
              <li className="font-semibold text-2xl text-text hover:text-purple500">
                <a href="">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="hidden "></div>
          <div>
            <button type="button" className="md:collapse"><List size={34}/></button>
            {/* <nav className='absolute right-3'>
              <ul className='flex flex-col items-start justify-start gap-2'>
                <li className='w-[256px] h-9 border-b border-solid border-purple500 text-text font-medium text-lg flex items-center justify-center'><a href="">Home</a></li>
                <li className='w-[256px] h-9 border-b border-solid border-purple500 text-text font-medium text-lg flex items-center justify-center'><a href="">Projetos</a></li>
                <li className='w-[256px] h-9 border-b border-solid border-purple500 text-text font-medium text-lg flex items-center justify-center'><a href="">Contatos</a></li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </div>
  );
}
