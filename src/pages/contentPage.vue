<template>
    <el-container class="content-box">
        <el-aside class="content-aside">
            <ul class="aside-ul">
                <li
                        :class="{'aside-ul-li':'aside-ul-li','item-active':navItem.id===contentItem.id ? 'item-active':''}"
                        :key="navItem.id" v-for="navItem in navItems"
                        @click="changeRouteParams(navItem.id)">
                    {{navItem.text}}
                </li>
            </ul>
        </el-aside>
        <el-main class="content-main">
            <transition name="slide-bottom" mode="out-in">
                <div class="child-view text-box">
                    <p class="text-title">
                        {{contentItem.title}}
                    </p>
                    <p class="text-content">
                        {{contentItem.content}}
                    </p>
                </div>
            </transition>
        </el-main>
    </el-container>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "contentPage",
        computed: {
            ...mapGetters(['navItems', 'contentItem'])
        },
        created () {
            const { id } = this.$route.query
            this.changeContentId(id)
        },
        beforeRouteUpdate () {
            const { id } = this.$route.query
            this.changeContentId(id)
        },
        methods: {
            changeRouteParams (id) {
                this.changeContentId(id)
            },
            changeContentId (id) {
                this.$store.commit('changeContentId', id)
            }
        }
    }
</script>

<style scoped>

    .content-box {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0;
    }

    .content-aside {
        max-width: 20vw;
        box-sizing: border-box;
        border-right: 1px solid #eee;
        box-shadow: 0 1px 10px 0 rgba(0,0,0,.2);
    }

    .aside-ul {
        width: 20vw;
    }

    .aside-ul-li {
        width: 100%;
        height: 10vh;
        line-height: 10vh;
        border-bottom: 1px solid #e1e1e1;
        box-sizing: border-box;
        transition: all .3s;
    }

    .item-active {
        border-right: 5px solid #F56C6C;
    }

    .content-main {}

    .text-box {
        height: 100%;
    }

    .text-title {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: left;
    }

    .text-content {
        font-size: 16px;
        text-align: left;
        text-indent: 2em;
    }

    .child-view {
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-bottom-enter {
        opacity: 0;
        -webkit-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    .slide-bottom-leave-active {
        opacity: 0;
        -webkit-transform: translate(0, -30px);
        transform: translate(0, -30px);
    }
</style>
