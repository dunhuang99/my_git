<!--  -->
<template>
    <div class=''>
        <h1>我是关于</h1>
        <p>我是关于的内容  哈哈哈</p>
        {{ userId }}
        {{ $route.params.userId }}
    </div>
</template>

<script>
    export default {
        computed: {
            userId() {
                return this.$route.params.userId
            }
        }
    }
</script>
<style>

</style>