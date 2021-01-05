export default {
    powerCount(state) {
        return state.count * state.count
    },
    getMore20Stu(state) {
        return state.students.filter(ele => {
            return ele.age > 20
        })
    },
    getMore20StuLen(state, getters) {
        return getters.getMore20Stu.length
    },
    getMoreAgeStu(state) {
        // return function(age) {
        //     return state.students.filter(ele => {
        //         return ele.age > age
        //     })
        // }
        return age => {
            return state.students.filter(ele => ele.age > age)
        }
    }
}