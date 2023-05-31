import axios from 'axios';
import { createStore } from "vuex";
import store from "../store/index.js";
import router from '../router/index.js';

//axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || 'http://localhost:8083/api';

const axiosIntance = axios.create({
  baseURL: 'http://localhost:8083/api',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token')
  }
});

//request interceptor
axiosIntance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-access-token'] = `${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

//redirect to login page if token expired
axiosIntance.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
  
        originalRequest._retry = true;
        return router.push('/signin')
    }
  }
})

// axiosIntance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['x-access-token'] = `${token}`;
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

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
  const response = await axiosIntance.post('/auth/signin',requestBody);
  return response;
}

//Channels
export async function getChannels(username) {
  const response= await axiosIntance.get('channels/user/' + username)
  return response.data;
}

export async function createChannel(name, users, loggedUserId) {
  const requestBody = {
    name: name,
    users: users,
    loggedUserId: loggedUserId
  }

  const response= await axiosIntance.post('/channels/createChannel', requestBody)
  return response.data;
}

//Messages
export async function getMessages(id) {
  const response= await axiosIntance.get('/channels/'+id+'/messages')
  return response.data;
}

export async function sendMessage(id,text,userId) {
  const requestBody = {
    text: text,
    userId: userId
  }
  const response= await axiosIntance.post('/channels/'+id+'/sendMessage',requestBody)
  return response.data;
}

export async function getUsers(userId) {
  const response= await axiosIntance.get('/users/all/'+ userId)
  return response.data;
}

export default axiosIntance;