import React from "react";
import Image from 'next/image';
import { serviceData } from '@/public/assets/assets.js';

const Header = () => {
  return (
    <header className="relative w-full flex flex-col overflow-hidden" id="top" style={{ minHeight: '100vh' }}>
     
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/assets/header-bg-color.png"
          alt="Header Image"
          fill
          priority
          className="object-cover"
          style={{ 
            transform: 'translateZ(0)',
            filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))'
          }} 
        />
        
        <div 
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"
          style={{ 
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>
      </div>

      <div className="relative z-10 w-11/12 sm:w-10/12 mx-auto flex flex-col items-center justify-center flex-grow gap-6 px-4 text-center pt-64">
        
        
        <div className="mx-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-4 font-serif text-pink-800 drop-shadow-[0px_0px_2px_white]">
            Seu projeto conectado com o mundo digital
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-black">
            Transforme as suas ideias em realidade com inovação, eficiência e qualidade.
          </p>
        </div>

        <div id="projects" className="w-full mt-14">
          <h3 className="bg-white font-semibold text-pink-800 drop-shadow-[0px_0px_2px_pink] text-lg sm:text-xl font-Outfit text-center rounded-full px-6 py-2 inline-block">
            Últimos Projetos
          </h3>
            
          <div className="mt-10 mb-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceData.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white drop-shadow-[0px_0px_2px_pink] p-6 sm:p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <Image
                  src={project.icon}
                  alt={project.title}
                  width={350}   
                  height={150}  
                  className="mb-4 rounded-md object-contain"
                />
                <h4 className="font-semibold mb-2 text-base sm:text-lg">{project.title}</h4>
                <p className="text-sm sm:text-base">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      
      <div 
        className="absolute bottom-0 left-0 w-full h-8 bg-white"
        style={{ 
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
          transform: 'translateY(50%)'
        }}
      ></div>
    </header>
  );
};

export default Header;