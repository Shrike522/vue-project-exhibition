<template>
    <el-container class="container-box">
        <el-header class="home-header">
            <button class="go-back-btn" @click="goBack">back &lt;&lt;</button>
        </el-header>
        <el-main class="home-box">
            <transition :name="transitionName" mode="out-in">
                <router-view class="child-view"></router-view>
            </transition>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "homeContainer",
        data () {
            return {
                transitionName: "slide-left"
            }
        },
        methods: {
            goBack () {
                this.$router.go(-1)
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>

<style scoped>
    .home-header {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        border-bottom: 1px solid #e1e1e1;
    }
    .go-back-btn {
        height: 100%;
        display: block;
        line-height: 38px;
        margin-top: 5px;
        border: none;
        font-size: 18px;
        background-color: transparent;
        color: #333;
    }
    .go-back-btn:active {
        color: #999;
    }
    .container-box {
        height: 100%;
    }
    .home-box {
        display: flex;
        padding: 0;
    }
</style>
