import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Enlaces de Navegación */}
          <div className="space-x-4 text-center md:text-left">
            <a href="/" className="text-gray-400 hover:text-gray-300 transition">Inicio</a>
            <a href="#about" className="text-gray-400 hover:text-gray-300 transition">Acerca de Nosotros</a>
            <a href="#services" className="text-gray-400 hover:text-gray-300 transition">Servicios</a>
            <a href="#contact" className="text-gray-400 hover:text-gray-300 transition">Contáctanos</a>
          </div>

          {/* Redes Sociales */}
          <div className="space-x-4">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-gray-300 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-gray-300 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-gray-300 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-gray-300 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="mt-4 text-center text-gray-400">
          © 2024 MiEmpresa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
