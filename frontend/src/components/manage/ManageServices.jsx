import React, { useState, useEffect } from 'react';
import { fetchServices, addService, updateService, deleteService } from '../../services/servicesService'; // Importaciones corregidas

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({ image_url: '', service_name: '', description: '' });

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

  const handleEdit = (service) => {
    setEditingService(service.id);
    setFormData({ image_url: service.image_url, service_name: service.service_name, description: service.description });
  };

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      setServices(services.filter(service => service.id !== id));
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingService) {
        const updatedService = await updateService(editingService, formData);
        setServices(services.map(service => (service.id === updatedService.id ? updatedService : service)));
      } else {
        const newService = await addService(formData);
        setServices([...services, newService]);
      }
      setEditingService(null);
      setFormData({ image_url: '', service_name: '', description: '' });
    } catch (error) {
      console.error('Error al guardar el servicio:', error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Gestionar Servicios</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="image_url">
            URL de la Imagen
          </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="service_name">
            Nombre del Servicio
          </label>
          <input
            type="text"
            id="service_name"
            name="service_name"
            value={formData.service_name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {editingService ? 'Actualizar' : 'Añadir'}
        </button>
      </form>
      <ul>
        {services.map(service => (
          <li key={service.id} className="mb-4 bg-gray-200 dark:bg-gray-700 p-4 rounded shadow">
            <img src={service.image_url} alt={service.service_name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-bold text-black dark:text-white">{service.service_name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            <button onClick={() => handleEdit(service)} className="mr-2 bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
              Editar
            </button>
            <button onClick={() => handleDelete(service.id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageServices;
