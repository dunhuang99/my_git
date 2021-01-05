import {
    INCREMENT,
    DECREMENT,
} from './mutations-type'

export default {
    [INCREMENT](state) {
        state.count++
    },
    [DECREMENT](state) {
        state.count--
    },
    addCount(state, payload) {
        console.log(payload);
        state.count += payload.count
    },
    addStudent(state, payload) {
        console.log(payload);
        state.students.push(payload.stu)
    },
    addKey(state) {
        // state.info['height'] = 30
        Vue.set(state.info, 'height', '30')
    },
    subKey(state) {
        Vue.delete(state.info, 'age')
    }
}