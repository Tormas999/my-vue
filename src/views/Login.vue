<template>
    <div>
        <h2>登录</h2>
        <p>用户名：<input type="text" v-model="name"></p>
        <p>密 码：<input type="text" v-model="pwd"></p>
        <button @click="toLogin">登录</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'',
                pwd:''
            }
        },
        methods:{
            toLogin(){
                localStorage.setItem('username',this.name)
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>