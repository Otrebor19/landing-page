import axios from 'axios';

const fetchFeatures = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/features');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las características:', error);
    throw error;
  }
};

const addFeature = async (feature) => {
  try {
    const response = await axios.post('http://localhost:3000/api/features', feature);
    return response.data;
  } catch (error) {
    console.error('Error al añadir la característica:', error);
    throw error;
  }
};

const updateFeature = async (id, feature) => {
  try {
    const response = await axios.put(`http://localhost:3000/api/features/${id}`, feature);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la característica:', error);
    throw error;
  }
};

const deleteFeature = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/features/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la característica:', error);
    throw error;
  }
};

export { fetchFeatures, addFeature, updateFeature, deleteFeature };
