import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Enviando...");
    
    try {
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setStatus('Erro de conexão. Verifique sua conexão e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="contato"
      className="relative w-full px-[5%] sm:px-[10%] lg:px-[20%] py-20 lg:py-40 scroll-mt-20 bg-gradient-to-b from-pink-50 via-pink-100 to-pink-100" 
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Coluna esquerda - informações */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-4 ">Entre em contato</h3>
          <p className="mb-6 text-gray-600 max-w-md">
            Se meu trabalho te interessou preencha o formulário ou entre em contato pelas redes sociais.
            Não vejo a hora de colocarmos o seu projeto em prática!
          </p>

          {/* Redes sociais */}
          <div className="flex gap-6 justify-center lg:justify-start">
            <a href="https://github.com/emilyfontana" target="_blank" rel="noreferrer">
              <Image
                src="/assets/github.png"
                width={40}
                height={40}
                alt="Github"
                className="hover:scale-110 transition"
              />
            </a>
            <a href="https://www.linkedin.com/in/emilyfontana19342174/" target="_blank" rel="noreferrer">
              <Image
                src="/assets/linkedin.png"
                width={40}
                height={40}
                alt="LinkedIn"
                className="hover:scale-110 transition"
              />
            </a>
            <a href="https://www.instagram.com/emilyyfontana/?igsh=ZGc5YzNuNDVwaXJr&utm_source=qr#" target="_blank" rel="noreferrer">
              <Image
                src="/assets/instagram.png"
                width={40}
                height={40}
                alt="Instagram"
                className="hover:scale-110 transition"
              />
            </a>
          </div>
        </div>

        {/* Coluna direita - formulário */}
        <div className="flex-1 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-70"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-70"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-70"
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition font-semibold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : 'Enviar Mensagem'}
            </button>
            {status && (
              <p className={`text-center mt-2 ${
                status.includes('sucesso') ? 'text-green-600' : 
                status.includes('Erro') ? 'text-red-600' : 'text-gray-600'
              }`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;