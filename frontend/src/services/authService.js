import axios from 'axios';

const loginAdmin = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3000/api/admin/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Credenciales inválidas. Inténtalo de nuevo.');
  }
};

export default loginAdmin;
