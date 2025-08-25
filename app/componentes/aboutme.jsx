import Image from 'next/image'
import React from 'react'
import { infoList } from '@/public/assets/assets.js';


const AboutMe = () => {
    return (
        <div id='about' className='  relative  bg-gradient-to-b from-white via-pink to-pink-50  w-full  px-[20%] py-20 scroll-mt-20'> 
            <h2 className='relative text-center text-5xl  drop-shadow-[0px_0px_6px_white] text-pink-900  mb-10'>
                Sobre Mim
            </h2>
            
            <div className=' relative  flex w-full flex-col lg:flex-row items-center gap-20 mt-16'>
                <div className=' rounded-3xl '>
                    <Image 
                        src="/assets/profile-img.jpg" 
                        alt="user" 
                        width={400} 
                        height={300}  
                        className=" rounded-3xl"
                    />
                </div>

                <div className='flex-1 text-center lg:text-left'>
                    <p className='mb-10 text-lg '>
                        Olá! Meu nome é Emily e sou estudante de Ciência da Computação, no momento estou em busca de iniciar minha carreira no mercade da tecnologia.
                        Tenho conhecimentos em diversas linguagens de programação e estou sempre buscando me desafiar e aprender mais. Como iniciante na programação, já desenvolvi alguns projetos pessoais
                        e participei de projetos acadêmicos, adquirindo habilidades práticas e teóricas. Também sou fluente em inglês e espanhol, o que me permite trabalhar em minha comunicação e colaboração em equipes internacioniais.
                    </p>
                    
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, title, description }, index) => (
                            <li key={index}>
                                <Image
                                src={icon}
                                alt="eu"
                                width={50}
                                height={50}
                                className="mb-4"></Image>
                                <h3 className='font-semibold'>{title}</h3>
                                <p>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <a 
                        href='/Currículo - Emily Fontana.pdf' 
                        download 
                        className='mt-10 mb-20 inline-flex items-center px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition'
                    > 
                        Baixar Currículo 
                        <Image 
                            src="/assets/download-icon.png" 
                            width={16} 
                            height={16} 
                            alt="download" 
                            className='inline w-4 ml-2' 
                        />
                    </a>
                    
                </div>
            </div>
            
            
        </div>
        
    )
}

export default AboutMe;





