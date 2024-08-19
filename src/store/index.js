import { createStore } from 'vuex'
import axios from 'axios'
import {toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
import {useCookies} from 'vue-cookies'

axios.defaults.withCredentials= true
axios.defaults.headers = $cookies.get('token')
export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    // async getUsers({ commit }) {
    //   let res = await fetch("http://localhost:5007")
    //   let data = await res.json()
    //   console.log(data);
      
    //   commit('setUser', data)
    // },
    addUser({commit},info){
      let data = axios.post('http://localhost:5005/insert', info)
      console.log(data);
      $cookies.set('message' , data)
      if(data.message){
        toast("New user has been added",{
        })
      } 
    },
    // async registerUser({commit},{name,surname,age,fav_coding_lang, fav_car, eye_color, username, password}){
    //   let res = await fetch('http://localhost:5005/insert', {
    //     method:'POST',
    //     headers:{
    //       'Content-Type':'application/json',
    //     },
    //     body:JSON.stringify({
    //       name:name, surname:surname, age:age, fav_coding_lang:fav_coding_lang, fav_car:fav_car, eye_color:eye_color, username:username, password:password
    //     })
    //   },
    // )
    //   let data = res.json()
    //    commit('setServeResponse', data)
    //    console.log('im working')
    // } 

    async loginUser({commit}, info){
      let {data} = await axios.post('http://localhost:5007/login',info)
      console.log(data)
      if(data){
        toast('Login is sucessful',{
        })
      }
    },
    getFruits({ commit }){
      let {data} = axios.get('http://localhost:5005/fruits')
      console.log(data);
      
    }
  },
  modules: {
  }
})
