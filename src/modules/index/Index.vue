<template>
    <el-container class="ui-container">
        <el-header class="ui-header">
            <el-menu :default-active="this.$router.path" router class="ui-menu" mode="horizontal"
                     @select="handleSelect">
                <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    {{ item.navItem }}
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main class="ui-main">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                navList: [
                    {name: '/Index', navItem: '主页'},
                    {name: '/Article', navItem: '技术专栏'},
                    {name: '/Book', navItem: '技术书单'},
                    {name: '/Me', navItem: '关于我'},
                    {name: '/Other', navItem: '其他'}
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .ui-main {
        /*background-color: #E9EEF3;*/
        background-color: pink;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .ui-container {
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .ui-menu {
        float: right;
    }

    .ui-header {
        padding-left: 0;
        padding-right: 0;
        background-color: #fff;
    }

</style>