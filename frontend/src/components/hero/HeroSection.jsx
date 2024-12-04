import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1719257543250-73071fde0462?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Bienvenido a Nuestra Plataforma</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
          Ofrecemos soluciones innovadoras para tus necesidades.
        </p>
        <a href="#features" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Saber Más
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
