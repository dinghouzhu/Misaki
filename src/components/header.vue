<template>
 <div>

   <mt-header :title="nickname ? nickname:'某不科学的御坂美琴'">
     <router-link to="" slot="left">
       <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
     </router-link>
     <router-link to="/juri" slot="right">
       <mt-button icon="more"></mt-button>
     </router-link>
   </mt-header>

 </div>
</template>

<script>
    export default {
        name: "headerBody",
      data(){
          return{
            nickname:'',
          }
      },
      mounted(){
          this.nickname=localStorage.getItem('nickname')||''
      }
    }
</script>

<style scoped>
  .mint-header{
  background:#fb7299 ;
  }
</style>
