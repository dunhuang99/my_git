<template lang="">
    <div class="tabbar-item" @click="clickIcon">
        <div>
            <slot v-if="!isActive" name="item-icon"></slot>
            <slot v-else name="item-icon-active"></slot>
        </div>
        <!-- <div :class="{active: isActive}">
            <slot name="item-text"></slot>
        </div> -->
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) > -1 ? true : false
            },
            activeStyle() {
                console.log(this.activeColor);
                return this.isActive ? {
                    color: this.activeColor
                } : {}
            }
        },
        methods: {
            clickIcon() {
                this.$router.push(this.path)
            }
        }
    }
</script>
<style lang="">
    .tabbar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    
    .tabbar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    
    .active {
        color: red
    }
</style>