<template>
 <div class="header">

   <!--<mt-header :title="nickname ? nickname:'某不科学的御坂美琴'">-->
     <mt-header title="某不科学的御坂美琴">
     <router-link to="/mulu" slot="left">
       <mt-button icon="back" >返回</mt-button>
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
            nickname:null,
          }
      },
      created(){
          this.nickname=localStorage.getItem('nickname')||''
      }
    }
</script>

<style scoped>
  .mint-header{
    width: 100%;
  background:#fb7299 ;
  }

</style>
