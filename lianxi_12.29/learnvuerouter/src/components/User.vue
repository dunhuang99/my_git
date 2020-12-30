<template lang="">
    <div>
        <h1>我是用户</h1>
        <p>我是用户相关信息</p>
        {{ userId }}
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
<style lang="">

</style>