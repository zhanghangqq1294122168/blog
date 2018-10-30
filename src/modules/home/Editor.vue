<template>
    <div class="editor">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.title" size="small"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-input v-model="form.classify" size="small"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input v-model="form.content"
                          type="textarea"
                          :autosize="{ minRows: 2, maxRows: 4}"
                          placeholder="请输入内容">
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    title: '',
                    classify: '',
                    content: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form.title);
                console.log(this.form.classify);
                console.log(this.form.content);
            }
        }
    }
</script>

<style scoped>
    .editor {
        padding: 7%;
        width: 70%;
        float: contour;
    }
</style>