import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Sua URL do backend
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Tipos baseados no seu JSON
export interface Estacao {
  id: number;
  nome: string;
}

export interface Linha {
  id: number;
  nome: string;
  cor: string;
  estacoes: Estacao[];
}

export interface ReporteInput {
  linha: { id: number };
  estacao: { id: number };
  categoria: string;
  areaAfetada: string;
  impacto: string;
  descricao?: string;
}

export const fetchLinhas = async (): Promise<Linha[]> => {
  try {
    const response = await api.get('/linhas');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar linhas:', error);
    throw error;
  }
};

export const createReporte = async (reporteData: ReporteInput) => {
  try {
    const response = await api.post('/reportes', reporteData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar reporte:', error);
    throw error;
  }
};