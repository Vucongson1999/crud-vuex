import Vue from "vue";
import Vuex from "vuex"
import studentModule from './studentModule/index'
import { createLogger } from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: { //chia nho 
     student: studentModule // 1 quan li ngan chua du lieu  
  },
  plugins: [ //su dung ham logger
    createLogger()
  ]
  })

  export default store