<template>
    <div class="blockDivMain">
      <div class="blockDiv">
        <div class="block" v-for="i in 16" :key="i"  @click="play">
          <img :src="http" alt=""  class="blockimg">
          <span class="title">某科学的超电磁炮</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Neirong",
      data(){
          return{
            http:'http://hbimg.b0.upaiyun.com/5ba9ae095cf879da075282f7fcfd1a9e61bb3de2183d21-B1inwB_fw658'
          }
      },
      methods:{
        play(){
          this.$messagebox.alert("敬请期待！")
        }
      }
    }
</script>

<style scoped>
  @media screen and (min-height: 760px) {
    .blockDivMain{
      width: 100%;
      height: 680px !important;
      overflow-y: scroll;
    }
  }


  @media screen and (max-height: 600px) {
    .blockDivMain{
      width: 100%;
      height: 450px !important;
      overflow-y: scroll;
    }
  }
  .blockDivMain{
    width: 100%;
    height: 560px;
    overflow-y: scroll;
  }

  .blockDiv{
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    background-size: 100% 100%;
  }
  .block{
    width: calc(calc(100% / 2) - 10px);
    /*width: 70px;*/
    margin:5px;
    box-sizing: border-box;
    background-size: 100% 100%;
    text-align: center;
    color: black;
  }
  .blockimg{
    width: 100%;
    height: 80%;
  }
  .title{
    font-size: 13px;
  }
</style>
