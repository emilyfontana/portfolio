import Image from 'next/image';
import React, { useRef, useState } from "react"                  

const Navbar = () => {
    const sideMenuRef = useRef();
    const [activeLink, setActiveLink] = useState(null);

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(0)";
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    const handleClick = (link) => {
        setActiveLink(link);
        closeMenu();
    }

    const linkClasses = (link) =>
        `font-semibold text-lg transition ${
            activeLink === link ? "text-pink-900" : "text-gray-800 hover:text-pink-900"
        }`;

    return (
        <div>
            <nav className="w-full fixed lg:px-6 xl:px-[6%] py-6 flex items-center justify-between z-50">
                <a href="#top"> 
                    <Image src="/assets/logo.png" className="cursor-pointer mr-14 rounded-full" alt="Logo" 
                    width={160} height={50}  />
                </a>

                
                <ul className='hidden lg:flex items-center gap-6 lg:gap-8 rounded-full drop-shadow-[0px_0px_2px_pink] px-14 py-4 bg-white shadow-lg bg-opacity-70 text-lg'>
                    <li><a className={linkClasses("#top")} onClick={() => setActiveLink("#top")} href="#top">Home</a></li> 
                    <li><a className={linkClasses("#projects")} onClick={() => setActiveLink("#projects")} href="#projects">Projetos</a></li> 
                    <li><a className={linkClasses("#skills")} onClick={() => setActiveLink("#skills")} href="#skills">Serviços</a></li>   
                    <li><a className={linkClasses("#about")} onClick={() => setActiveLink("#about")} href="#about">Sobre Mim</a></li>
                    <li><a className={linkClasses("#contato")} onClick={() => setActiveLink("#contato")} href="#contato">Contato</a></li>
                </ul>

                <div className='flex items-center gap-6'>
                    
                    <a href="#contato" className='hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full ml-4 text-lg'>
                        Contato <Image src="/assets/arrow-icon.png" alt="Seta" width={12} height={14} />
                    </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src="/assets/menu-black.png" alt="Menu_black" width={28} height={14}/>
                    </button>
                </div>

                
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-8 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 text-lg'>
                    <div className='absolute right-5 top-5' onClick={closeMenu}>
                        <Image src="/assets/close-black.png" alt="Fechar" className='w-6 cursor-pointer' width={28} height={28}/>
                    </div>

                    <li><a className={linkClasses("#top")} onClick={() => handleClick("#top")} href="#top">Home</a></li> 
                    <li><a className={linkClasses("#projects")} onClick={() => handleClick("#projects")} href="#projects">Projetos</a></li> 
                    <li><a className={linkClasses("#skills")} onClick={() => handleClick("#skills")} href="#skills">Serviços</a></li>   
                    <li><a className={linkClasses("#about")} onClick={() => handleClick("#about")} href="#about">Sobre Mim</a></li>
                    <li><a className={linkClasses("#contato")} onClick={() => handleClick("#contato")} href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
