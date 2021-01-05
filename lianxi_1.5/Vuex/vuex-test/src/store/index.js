import Vue from 'vue'
import Vuex from 'vuex'

import metutaions from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 100,
        info: {
            name: '空白',
            age: 20
        },
        students: [
            { name: '111', age: 10 },
            { name: '111', age: 13 },
            { name: '222', age: 20 },
            { name: '333', age: 30 },
            { name: '444', age: 40 },
            { name: '444', age: 44 },
            { name: '555', age: 50 },
        ]
    },
    metutaions,
    actions,
    getters
})

export default store