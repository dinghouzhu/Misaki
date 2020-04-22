<template>
 <div>

   <div class="Head">
   </div>
   <div>
     <mt-field label="用户名" placeholder="请输入用户名" v-model="Form.username"></mt-field>
     <mt-field label="密码" placeholder="请输入密码" type="password" v-model="Form.password"></mt-field>
     <!--<mt-badge size="small" color="#888">自定义颜色</mt-badge>-->
     <mt-button type="primary" size="large" @click="submitForm()">登陆</mt-button>
   </div>
 </div>
</template>

<script>

  import {login} from "../api/index";
    export default {
        name: "index",
      data(){
          return{
            Form:{
              username:'',
              password:''
            }
          }
      },

      methods:{
        submitForm(){
            let {username,password}=this.Form;
            login(username,password)
              .then(res=>{
                if (res.data.code ===200) {
                  localStorage.setItem('nickname',res.data.data.userInfo.nickname);
                  //localStorage.setItem('token',res.data.data.userInfo.token); //后续功能有用
                  this.$router.push('/mulu');
                  console.log('登陆');
                }else {
                  console.log('222');
                }
              })
              .catch(err=>{
                console.log(err);
              })
          }
      }
    }
</script>

<style scoped>
.Head{
  width: 100%;
  height: 200px;
  background: url("../assets/img/timg.gif");
  background-size: 100% 100%;
}
</style>
