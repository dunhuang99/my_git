import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

// axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios({
//     // url: '/home/multidata',
//     url: '/category',
//     params: {
//         type: 'sell',
//         page: 5
//     }
// }).then(res => {
//     console.log(res);
// })

// const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 10000
// })
// instance1({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// })

import { request } from './network/request'

//第一种
// request({
//     url: '/home/multidata',
// }, (res) => {
//     console.log(res);
// }, (err) => {
//     console.log(err);
// })

//第二种
// request({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

//第三种
request({
    url: '/home/multidata'
}).then(res => {
    console.log('request res ', res);
}).catch(err => {
    console.log('request err  ', err);
})