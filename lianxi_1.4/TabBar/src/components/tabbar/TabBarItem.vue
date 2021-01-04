<template lang="">
  <div class="tabbar-item" @click="clickIcon">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
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
        name: 'TabBarItem',
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
                return this.isActive ? {
                    color: this.activeColor
                } : {}
            }
        },
        data() {
            return {
                // isActive: false,
            }
        },
        methods: {
            clickIcon() {
                try {
                    this.$router.push(this.path)
                } catch (err) {
                    console.log('111');
                }
            }
        }
    }
</script>
<style>
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
        color: red;
    }
</style>