<template>
    <div>
        <div class="nav">
            <router-link to="/">列表页面</router-link>  
            <router-link to="/order">我的订单</router-link>  
            <router-link to="/personal">个人中心</router-link>  
            <div class="nav-r">
                <!-- {{name}},'欢迎回家' -->
                {{username}}欢迎回家
                <button @click="exit">退出</button>

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:''
            }
        },
        mounted(){
            this.getName()
        },
        computed:{
            username(){
                return localStorage.getItem('username')
            }
        },
        methods:{
            getName(){
                let name = localStorage.getItem('username')
                this.name=name!='undefined'?name:''
            },
            exit(){
                localStorage.removeItem('username')
                this.$router.push('/login')
            }
        }
    
    }
</script>

<style lang="less" scoped>
*{
    list-style-type: none;
    text-decoration:none
}
.nav{
   height: 50px;
   line-height: 50px;
   background-color: rgb(231, 198, 222);
   a{
       margin: 10px;
       &.ractive{
           color: rgb(155, 83, 12);
       }
       &.aa{
           color: rgba(184, 30, 10, 0.133);
       }
   }
   .nav-r{
       float:right
   }
}
</style>