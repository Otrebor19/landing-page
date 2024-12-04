import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp incluyendo el código del país
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </a>
  );
};

export default FloatingWhatsAppButton;
