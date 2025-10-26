import axios from "axios";

// '10.0.2.2' é para o Emulador Android.
const API_URL = 'http://10.0.2.2:3333';

const api = axios.create({ baseURL: API_URL });

export const getConsultas = async () => {
  try {
    const response = await api.get('/consultas');
    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar consultas:", error);
    throw error;
  }
};

export const createConsulta = async (consultaData) => {
  try {
    const response = await api.post('/consultas', consultaData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar consulta:", error);
    throw error;
  }
};