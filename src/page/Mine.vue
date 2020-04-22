<template>
    <div class="Mine">
      <fieldset class="Minebody">

          <legend class="head-title">
            <div class="head" v-if="nickname"></div>
          </legend>



        <div v-if="nickname">
          <span class="head-left">等级:{{level}}</span>
          <span class="head-right">{{value*1000}}/{{25800}}</span>
        </div>

        <div class="progress" v-if="nickname"> <mt-progress :value="value" :bar-height="5"></mt-progress></div>
       <div class="lineswitch iconfont icon-yonghu" v-if="!nickname" @click="turn"><span class="title"> 登录用户</span></div>
       <div class="lineswitch" v-for="item in MenuList" :key="item.id" @click="misaka(item.foo)" :class="item.class">
        <span class="title">    {{item.title}}</span>
      </div>
      <mt-button type="danger" size="large"  @click="submitForm()">退出</mt-button>
        </fieldset>

    </div>
</template>

<script>

    export default {
        name: "Mine",
        data(){
          return{
            value:14.280,
            level:5,
            nickname:null,
            MenuList:[

              {
                id:1,
                title:'投稿管理',
                class:'iconfont icon-tv',
                foo:false,
              },
              {
                id:2,
                title:'投稿管理',
                class:'iconfont icon-bili_face',
                foo:false,
              },
              {
                id:3,
                title:'投稿管理',
                class:'iconfont icon-settings',
                foo:false,
              },
              {
                id:4,
                title:'投稿管理',
                class:'iconfont icon-bilibilidonghua2',
                foo:false,
              }

            ]
          }
      },
      methods:{
        misaka(foo){
          if (this.nickname){
            console.log('1');
            this.$messagebox.alert("敬请期待！后续将更新内容!")
          }else {
            this.$messagebox.alert("请先登陆!")
          }
        },
        turn(){
          this.$router.push('/login')
        },
        submitForm(){
          localStorage.clear();
          this.$router.push('/mulu');

        },
      },
      created(){
           this.nickname=localStorage.getItem('nickname')
      },
    }
</script>

<style scoped>
.head{
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background: url("../assets/img/head.jpg");
  background-size: 100% 100%;
  border-radius: 50%;
}
.head-title{
  margin: 0 auto;
}
  .head-right{
     color: #d0cfd1;
     font-size: 12px;
     float: right;
  }
  /deep/ .mt-progress-progress {
    background: #f39800 !important;
  }
  .Minebody{
    width: 90%;
    margin: 0 auto;
    border:none;
  }
  .lineswitch{
    width: 100%;
    height: 50px;
    border-top: 2px dashed #f4f4f4;
    position: relative;
    line-height: 50px;
    margin-left: 10px;
  }
  .lineswitch:active{
    border: 1px solid white;
  }
  .title{
    margin-left: 10px;
  }
  .head-left {
    font-size: 15px;
    color: white;
    animation: Glow 3s infinite;
    animation-name: Glow;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  @keyframes Glow {
    from {
      text-shadow: 0 0 10px #fff,
      0 0 3px #fff,
      0 0 5px #fff,
      0 0 10px #f39800,
      0 0 10px #f39800,
      0 0 15px #f39800,
      0 0 15px #f39800,
      0 0 15px #f39800;
    }
    to {
      text-shadow: 0 0 5px #fff,
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 10px #f39800,
      0 0 10px #f39800,
      0 0 15px #f39800,
      0 0 15px #f39800,
      0 0 15px #f39800;
    }
  }

</style>
