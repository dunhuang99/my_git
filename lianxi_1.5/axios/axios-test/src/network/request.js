import axios from 'axios'

// 第一种
// export function request(config, success, failuer) {
//     const instance1 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 10000
//     })
//     instance1(config)
//         .then(res => {
//             success(res)
//         })
//         .catch(err => {
//             failuer(err)
//         })
// }

// 第二种
// export function request(config) {
//     const instance1 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 10000
//     })
//     return new Promise((reslove, reject) => {
//         instance1(config)
//             .then(res => {
//                 reslove(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

//第三种
export function request(config) {
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 10000
    })

    //axios拦截器
    instance1.interceptors.request.use(config => {
        console.log('发送请求拦截成功');
        return config
    }, err => {
        console.log('发送请求拦截失败');
    })

    instance1.interceptors.response.use(res => {
        console.log('收到响应拦截成功');
        return res.data
    }, err => {
        console.log('收到响应拦截失败');
    })

    return instance1(config)
}