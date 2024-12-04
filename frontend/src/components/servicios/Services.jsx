import React, { useState, useEffect } from 'react';
import { fetchServices } from '../../services/servicesService'; // Importación corregida

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    getServices();
  }, []);

  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-900 py-12 h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
              <img src={service.image_url} alt={service.service_name} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.service_name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
