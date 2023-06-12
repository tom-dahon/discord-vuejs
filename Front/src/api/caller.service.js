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


export async function getConnexion(userData) {
  const requestBody = {
    username: userData.username,
    password: userData.password
  }
  const response = await axiosIntance.post('/auth/signin',requestBody);
  return response;
}

export async function register(userData) {
  const requestBody = {
    username: userData.username,
    email: userData.email,
    password: userData.password
  }
  const response = await axiosIntance.post('/auth/signup',requestBody);
  return response;
}

//Channels
export async function getChannels(username) {
  const response= await axiosIntance.get('channels/user/' + username)
  return response.data;
}

export async function getPrivateChannels() {
  const response= await axiosIntance.get('channels/privateChannels')
  return response.data;
}

export async function getGroups() {
  const response= await axiosIntance.get('channels/groups')
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

export async function sendMessage(id,text,userId,imageMessage) {
  const requestBody = {
    text: text,
    userId: userId,
    imageMessage: imageMessage
  }
  const response= await axiosIntance.post('/channels/'+id+'/sendMessage',requestBody)
  return response.data;
}

//Users

export async function getUsers(userId) {
  const response= await axiosIntance.get('/users/all/'+ userId)
  return response.data;
}

export async function getUser(userId) {
  const response= await axiosIntance.get('/users/'+ userId)
  return response.data;
}

export async function deleteUser(userId) {
  const response= await axiosIntance.get('/users/delete/'+ userId)
  return response.data;
}

export async function setProfilePicture(userId, profilePicturePath) {
  const requestBody = {
    userId: userId,
    profile_picture_path: profilePicturePath
  }
  const response= await axiosIntance.post('/users/profile_picture',requestBody)
  return response.data;
}

export async function updateUsername(userId, username) {
  const requestBody = {
    userId: userId,
    username: username
  }
  const response = await axiosIntance.post('/users/updateUsername',requestBody)
  console.log(response.data)
  return response.data;
}

export async function getUserRole(roleId) {
  const response = await axiosIntance.get('/users/role/'+roleId)
  return response.data
}

export default axiosIntance;