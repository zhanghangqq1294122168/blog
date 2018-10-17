<template>
    <el-container class="ui-container">
        <el-header class="ui-header">
            <el-menu :default-active="activeIndex" class="ui-menu" mode="horizontal" :router="true" @select="">
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2">技术专栏</el-menu-item>
            <el-menu-item index="3">技术书单</el-menu-item>
            <el-menu-item index="4">关于我</el-menu-item>
            <el-menu-item index="5">其他</el-menu-item>
            </el-menu>
        </el-header>
        <el-main class="ui-main" v-if="date=='a'">

        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                isCollapse: true,
                date:"a",

            };
        },
        methods: {
            test:function () {
                
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