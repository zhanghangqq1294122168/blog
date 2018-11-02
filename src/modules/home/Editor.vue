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
                <mavon-editor v-model="formData.content"/>
                <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
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

    export default {
        data() {
            return {
                formData: {
                    title: '',
                    classify: '',
                    content: ''
                }
            }
        },
        methods: {
            postSaveArticle() {
                saveArticle(this.formData).then(res => {
                    console.log(this.formData)
                })
            },
            // 绑定@imgAdd event
            $imgAdd(pos, $file) {
                // 第一步.将图片上传到服务器.
                var formdata = new FormData();
                formdata.append('image', $file);
                axios({
                    url: 'server url',
                    method: 'post',
                    data: formdata,
                    headers: {'Content-Type': 'multipart/form-data'},
                }).then((url) => {
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    // $vm.$img2Url 详情见本页末尾
                    $vm.$img2Url(pos, url);
                })
            }
        }
    }
</script>

<style scoped>

</style>