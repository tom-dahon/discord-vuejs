import Axios from 'axios';
import { createStore } from "vuex";
import store from "@/store";
import router from '@/router';
import {accountService} from './account.service';

Axios.interceptors.request.use(request => {
    
  // Si connecté on ajoute le token dans l'entête
  if(accountService.isLogged()){
      request.headers.Authorization = 'Bearer '+ accountService.getToken()
  }

  return request
})

Axios.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)


  if(!error.response){
      // Erreur rzo
      console.log("error.response")
      // store.commit('displayNotif', {d: true, mes: error})
      return Promise.reject(error)
  // }else{
  //     if(error.response.status == 401){
  //         accountService.logout()
  //         router.push('/signin')
  //     }else{
  //         // Erreur de l'API
  //         store.commit('displayNotif', {d: true, mes: error.response.data.message})
  //         return Promise.reject(error)
  //     }
  // 
  }
  })


export default Axios