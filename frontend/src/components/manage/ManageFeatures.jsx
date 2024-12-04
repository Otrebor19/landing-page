import React, { useState, useEffect } from 'react';
import { fetchFeatures, addFeature, updateFeature, deleteFeature } from '../../services/featuresService'; // Importaciones corregidas

const ManageFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [editingFeature, setEditingFeature] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', icon: '' });

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

  const handleEdit = (feature) => {
    setEditingFeature(feature.id);
    setFormData({ title: feature.title, description: feature.description, icon: feature.icon });
  };

  const handleDelete = async (id) => {
    try {
      await deleteFeature(id);
      setFeatures(features.filter(feature => feature.id !== id));
    } catch (error) {
      console.error('Error al eliminar la característica:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingFeature) {
        const updatedFeature = await updateFeature(editingFeature, formData);
        setFeatures(features.map(feature => (feature.id === updatedFeature.id ? updatedFeature : feature)));
      } else {
        const newFeature = await addFeature(formData);
        setFeatures([...features, newFeature]);
      }
      setEditingFeature(null);
      setFormData({ title: '', description: '', icon: '' });
    } catch (error) {
      console.error('Error al guardar la característica:', error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Gestionar Características</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
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
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="icon">
            Icono
          </label>
          <input
            type="text"
            id="icon"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {editingFeature ? 'Actualizar' : 'Añadir'}
        </button>
      </form>
      <ul>
        {features.map(feature => (
          <li key={feature.id} className="mb-4 bg-gray-200 dark:bg-gray-700 p-4 rounded shadow">
            <h3 className="text-lg font-bold text-black dark:text-white">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            <button onClick={() => handleEdit(feature)} className="mr-2 bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
              Editar
            </button>
            <button onClick={() => handleDelete(feature.id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageFeatures;
