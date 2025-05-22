import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000,
});

export const fetchLinhas = async () => {
  const response = await api.get('/linhas');
  return response.data;
};

export const createReporte = async (reporteData: any) => {
  const response = await api.post('/reportes', reporteData);
  return response.data;
};