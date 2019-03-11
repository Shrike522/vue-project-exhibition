<template>
    <div class="first-box">
        <div class="first-content">
            <p class="first-title">一个基于vue-cli快速搭建的小项目</p>
            <el-button @click="getIn">点击进入</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "firstPage",
        methods: {
            getIn () {
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>
    .first-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .first-content {
        max-width: 300px;
        width: 50%;
    }
    .first-title {
        font-size: 16px;
        margin-bottom: 20px;
    }
</style>
