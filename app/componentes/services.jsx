import React, { useState, useEffect } from "react";
import Image from "next/image";

const WorkData = [
  {
    title: "Front-end",
    description:
      "Criação de landing page, e-commerce e websites responsivos, interativos e modernos",
    languages: "React, Next.js, HTML, CSS, Tailwind, JavaScript",
    images: [
      "/assets/html.png",
      "/assets/javascript.png",
      "/assets/react.png",
      "/assets/css.png",
    ],
  },
  {
    title: "IoT & Sistemas em Tempo Real",
    description:
      "Integração com Arduino via MQTT, visualização em tempo real, controle remoto e alertas automáticos.",
    languages: "Python, JavaScript, Flask, Flask-SocketIO, MQTT",
    images: ["/assets/python.png", "/assets/javascript.png", "/assets/arduino.png"],
  },
  {
    title: "Back-end e Banco de Dados",
    description:
      "Modelagem de dados, implementação de CRUD, integração de APIs e permissões de usuários.",
    languages: "PHP, Java, Python, SQL, Flask, MySQL, APIs",
    images: [
      "/assets/mysql.png",
      "/assets/php.png",
      "/assets/python.png",
      "/assets/sql.png",
      "/assets/java.png",
      "/assets/api.png",
    ],
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WorkData[0].images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="skills" className="w-full px-[15%] bg-gradient-to-b from-white via-pink to-white py-40  ">
      <h3 className="text-center text-xl">O que eu posso te oferecer</h3>
      <h3 className="text-center text-3xl mb-16 text-pink-800 ">Skills e Serviços</h3>

      <div className="grid grid-cols-auto gap-20 mb-10">
        {WorkData.map(({ title, description, languages, images }, index) => (
          <div
            key={index}
            className="border border-pink-800 bg-pink-100 rounded-full px-10 py-12 flex flex-col items-center hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"

          >
            <h3 className="text-lg my-4 text-gray-900 drop-shadow-[0px_0px_1px_gray] text-center">{title}</h3>
            <p className="text-md text-gray-700 leading-5 text-center">{description}</p>
            <p className="text-md text-gray-600 italic my-2 text-center">{languages}</p>

            
            <div className="relative flex drop-shadow-[0px_0px_4px_white] justify-center items-center w-full h-24 mt-6">
              {images.map((img, idx) => {
                const total = images.length;
                const offset = (idx - currentIndex + total) % total;
                const angle = (offset / total) * 360;
                const radius = 60; 
                const rad = (angle * Math.PI) / 180;
                const x = Math.sin(rad) * radius;
                const y = Math.cos(rad) * radius * 0.2; 

                const isVisible = offset === 0 || offset === 1 || offset === total - 1;
                const scale = offset === 0 ? 1 : 0.7; 
                const opacity = isVisible ? 1 : 0;

                return (
                  <div
                    key={idx}
                    className="absolute transition-all duration-700"
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: offset === 0 ? 20 : 10,
                    }}
                  >
                    <Image
                      src={img}
                      alt={title}
                      width={50} 
                      height={36} 
                      objectFit="contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
