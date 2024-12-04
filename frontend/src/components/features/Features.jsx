import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBolt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { fetchFeatures } from '../../services/featuresService'; // Importación corregida

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const getFeatures = async () => {
      try {
        const data = await fetchFeatures();
        setFeatures(data);
      } catch (error) {
        console.error('Error al obtener las características:', error);
      }
    };

    getFeatures();
  }, []);

  return (
    <section id="features" className="bg-gray-100 dark:bg-gray-900 py-12 h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="flex flex-col justify-center items-center text-center bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg h-full">
              <FontAwesomeIcon icon={getIcon(feature.icon)} className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Función para obtener el ícono correspondiente
const getIcon = (iconName) => {
  switch (iconName) {
    case 'fa-shield-alt':
      return faShieldAlt;
    case 'fa-bolt':
      return faBolt;
    case 'fa-users':
      return faUsers;
    default:
      return faShieldAlt; // Valor predeterminado
  }
};

export default Features;
