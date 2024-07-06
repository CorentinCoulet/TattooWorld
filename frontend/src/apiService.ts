// apiService.ts

import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:3000';

interface ErrorResponse {
  message: string;
}

export const apiService = {
  async fetchData(endpoint: string) {
    try {
      const response = await axios.get(`${API_URL}/${endpoint}`);
      return response.data;
    } catch (error: AxiosError<ErrorResponse>) {
      if (error.response) {
        console.error(`Erreur HTTP ${error.response.status}: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('Pas de réponse reçue du serveur');
      } else {
        console.error('Erreur lors de la configuration de la requête', error.message);
      }
      throw new Error('Erreur réseau lors de la récupération des données');
    }
  },
};
