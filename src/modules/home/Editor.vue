<template>
    <div class="editor">
        <el-form ref="form" :model="formData" label-width="100px">
            <el-form-item label="标题">
                <el-input v-model="formData.title" size="small"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-input v-model="formData.classify" size="small"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <!--<el-input v-model="formData.content"-->
                <!--type="textarea"-->
                <!--:autosize="{ minRows: 2, maxRows: 4}"-->
                <!--placeholder="请输入内容">-->
                <!--</el-input>-->
                <rich-text ref="richText"></rich-text>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="postSaveArticle">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {saveArticle} from '../../api/editor.js'
    import RichText from "./richText";

    export default {
        components: {RichText},
        data() {
            return {
                formData: {
                    title: '',
                    classify: ''
                }
                ,
                Data: {
                    title: formData.title,
                    classify: this.formData.classify,
                    content: this.$refs.richText.content
                }
            }
        },
        methods: {
            postSaveArticle() {
                saveArticle(this.formData).then(res => {
                    console.log(this.formData)
                })
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