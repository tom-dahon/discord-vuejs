import axios from 'axios';
import { createStore } from "vuex";
import store from "@/store";
import router from '@/router';

axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || 'http://localhost:8083/api';

const axiosIntance = axios.create({
  baseURL: 'localhost:8083/api',
  headers: {
    'Content-Type': 'application/json'  
  }
});

axiosIntance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

//User
// export const getConnexion = (userData) => {
//   const requestBody = {
//     username: userData.username,
//     password: userData.password
//   };

//   return apiService.post('/auth/signin', requestBody)
//     .then(response => response.data);
// };

export async function getConnexion(userData) {
  const requestBody = {
    username: userData.username,
    password: userData.password
  }
  const response = await axios.post('/auth/signin',requestBody);
  return response;
}

//Channels
export async function getChannels() {
  const response= await axios.get('/channels')
  return response.data;
}

export default axiosIntance;