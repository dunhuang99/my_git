<template>
  <div id="app">
    <h1>{{ $store.state.info }}</h1>
    <h1> {{ $store.state.count }}</h1>
    <button @click="clickAdd">+</button>
    <button @click="clickSub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <button @click="addKey">添加一个对象里没有初始定义的key值</button>
    <button @click="subKey">删除一个对象里的key值</button>

    <h1>{{ $store.getters.powerCount }}</h1>
    <h1>{{ $store.getters.getMore20Stu }}</h1>
    <h1>{{ $store.getters.getMore20StuLen }}</h1>
    <h1>{{ $store.getters.getMoreAgeStu(35) }}</h1>

    <hello-vue></hello-vue>
  </div>
</template>

<script>
    import HelloVue from './components/HelloVue.vue'
    
    import {
        INCREMENT,
        DECREMENT,
    } from './store/mutations-type'

    export default {
        name: 'App',
        components: {
            HelloVue
        },
        methods: {
            clickAdd() {
                this.$store.commit(INCREMENT)
            },
            clickSub() {
                this.$store.commit(DECREMENT)
            },
            addCount(count) {
                // this.$store.commit('addCount', count)
                this.$store.commit({
                    type: 'addCount',
                    count
                })
            },
            addStudent() {
                let stu = {
                    name: '哈哈哈',
                    age: 40
                }
                // this.$store.commit('addStudent', stu)
                this.$store.commit({
                    type: 'addStudent',
                    stu
                })
            },
            addKey() {
                this.$store.commit('addKey')
            },
            subKey() {
                this.$store.commit('subKey')
            },
        },
    }
</script>

<style>

</style>