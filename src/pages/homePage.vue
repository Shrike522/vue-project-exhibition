<template>
    <ul class="home-ul">
        <li class="home-li" v-for="navItem of navItems" :key="navItem.id" @click="toSkip(navItem.id)">{{navItem.text}}</li>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "homePage",
        computed: {
            ...mapGetters(['navItems'])
        },
        methods: {
            toSkip (id) {
                this.$router.push({
                    path: "/home/content",
                    name: "contentPage",
                    query: { id }
                })
            }
        }
    }
</script>

<style scoped>
    .home-ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        padding: 40px 0;
    }
    .home-li {
        display: inline-block;
        width: 40%;
        height: 20vh;
        line-height: 20vh;
        margin-bottom: 3vh;
        border: 1px solid #999;
        border-radius: 5px;
        font-size: 20px;
        color: #333;
    }
</style>
