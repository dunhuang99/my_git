<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link :to="/about/ + userId">关于</router-link>

    <router-link :to="{path:'/profile', query: { name: 'why', age: '18', height: 180 }}">档案</router-link>
    <router-view></router-view>

    <button @click="clickButtonProfile">档案按钮</button>
  </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                userId: 'lisi'
            }
        },
        methods: {
            clickButtonProfile() {
                console.log('111111111');
                this.$router.push({
                    path: '/profile',
                    query: {
                        name: 'whywhy',
                        age: 20,
                        height: 230
                    }
                })
            }
        }
    };
</script>

<style></style>