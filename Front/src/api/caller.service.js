import Axios from 'axios';
import { createStore } from "vuex";
import store from "@/store";
import router from '@/router';

const apiService = Axios.create({
  baseURL: 'localhost:8083/api',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token')
  }
});
//User
export const getConnexion = (userData) => {
  const requestBody = {
    username: userData.username,
    password: userData.password
  };

  return apiService.post('/users', requestBody)
    .then(response => response.data);
};

//Channels
export const getChannels = () => {
  return apiService.get('/channels')
    .then(response => response.data);
};

export default Axios