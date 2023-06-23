import { List } from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="w-full h-[120px] bg-white flex items-center justify-center border-solid border-b fixed border-separatorHeader z-50">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="w-full flex items-center justify-between">
          <div className="md:hidden"></div>
          <div>
            <img className="h-[60px]" src="/logo.svg" alt="" />
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center justify-center gap-20">
              <li className="font-semibold text-2xl text-text hover:text-purple500">
                <a href="#home">Home</a>
              </li>
              <li className="font-semibold text-2xl text-text hover:text-purple500">
                <a href="#projetos">Projetos</a>
              </li>
              <li className="font-semibold text-2xl text-text hover:text-purple500">
                <a href="#contatos">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="hidden "></div>
            <div className="md:collapse">
              <button type="button" onClick={() => setOpenMenu(!openMenu)} className=""><List size={34}/></button>
          {openMenu && (
              <nav className='absolute right-0 top-[7.5rem] w-[50vw] h-[820px] bg-body opacity-70 flex flex-col justify-center'>
                <ul className='flex flex-col items-center justify-center gap-2'>
                  <li 
                    className='w-full h-12 border-b border-t border-solid border-separatorHeader text-white font-medium text-lg flex items-center justify-center hover:text-purple500'>
                      <a href="">Home</a>
                  </li>
                  <li 
                    className='w-full h-12 border-b border-solid border-separatorHeader text-white font-medium text-lg flex items-center justify-center hover:text-purple500'>
                      <a href="">Projetos</a>
                  </li>
                  <li 
                    className='w-full h-12 border-b border-solid border-separatorHeader text-white font-medium text-lg flex items-center justify-center hover:text-purple500'>
                      <a href="">Contatos</a>
                  </li>
                </ul>
              </nav>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
