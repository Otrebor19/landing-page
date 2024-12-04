import axios from 'axios';

const fetchServices = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/services');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    throw error;
  }
};

const addService = async (service) => {
  try {
    const response = await axios.post('http://localhost:3000/api/services', service);
    return response.data;
  } catch (error) {
    console.error('Error al añadir el servicio:', error);
    throw error;
  }
};

const updateService = async (id, service) => {
  try {
    const response = await axios.put(`http://localhost:3000/api/services/${id}`, service);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el servicio:', error);
    throw error;
  }
};

const deleteService = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/services/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    throw error;
  }
};

export { fetchServices, addService, updateService, deleteService };
