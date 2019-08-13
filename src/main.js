import './css/index.css'

import Vue from 'vue'
import app from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c => c(app),
    router
})