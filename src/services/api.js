import axios from 'axios';

// Создание экземпляра Axios с настройками
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8080/api/', // Убедитесь, что это правильный URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функция для получения списка рейсов
export const getFlights = async () => {
  try {
    const response = await apiClient.get('flights/');
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};