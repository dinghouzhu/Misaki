<template>
    <div>
      <div class="swipe">
        <div class="swipepic">
        <mt-swipe :auto="2500">
          <mt-swipe-item v-for="item in 3" :key="item" :style="{backgroundImage: 'url(' + imgFn2(item) + ')'}"></mt-swipe-item>
        </mt-swipe>
        </div>
      </div>


      <div class="blockDiv">
        <div class="block" @click="misaka(item,item.path)" v-for="(item,index) in MenuList" :key="item.id">
          <div class="block2"
               :style="{backgroundImage: 'url(' + imgFn(index) + ')'}"
          ></div>
         <span class="title">{{item.title}}</span>
        </div>

        <!--<div class="block"></div>-->
        <!--<div class="block"></div>-->
        <!--<div class="block"></div>-->
        <!--<div class="block"></div>-->
        <!--<div class="block"></div>-->
        <!--<div class="block"></div>-->
        <!--<div class="block"></div>-->
      </div>


      <!--<div class="search">-->
        <!--<mt-search v-model="value">-->
          <!--<mt-cell-->
            <!--v-if="result"-->
            <!--v-for="item in result"-->
            <!--:key="item.id"-->
            <!--:title="item.title"-->
            <!--:value="item.value">-->
          <!--</mt-cell>-->
        <!--</mt-search>-->
      <!--</div>-->

    </div>
</template>

<script>
  import Video from '../page/TestVideo'
  import Mulu from "./Misaki"
    export default {
        name: "HeadButton",
      components: {Mulu,
      Video},
      data(){
          return{
            MenuList:[{
              id:0,
              title:'御坂美琴',
              path:'/Misaki',
              boo:true,
            },{
              id:1,
              title:'去登陆',
              path:'/login',
              boo:true,
            },{
              id:2,
              title:'超电磁炮',
              path:'/Misaki',
              boo:false,
            },{
              id:3,
              title:'みさか みこと',
              path:'/Misaki',
              boo:false,
            },{
              id:4,
              title:'个人主页',
              path:'/mulu',
              boo:false,
            },{
              id:5,
              title:'打赏作者',
              path:'/mulu',
              boo:false,
            },{
              id:6,
              title:'测试',
              path:'/mulu',
              boo:false,
            },{
              id:7,
              title:'测试',
              path:'/mulu',
              boo:false,
            },
            ],
            selected:'',
            value:'',
            result:[]
          }
      },
      methods:{
       //动态绑定背景
        imgFn(index){
          return require('../assets/img/Misaki'+index+'.png')
        },
        imgFn2(index){
          return require('../assets/img/time'+index+'.jpg')
        },

        misaka(item,path){
          let token=localStorage.getItem('token')||"";
          // if (token) {
          //   this.$router.push(path);
          // }else {
          //   this.$router.push('/login');
          // }

          if (item.boo){
            this.$router.push(path);
          }else {
            this.$messagebox.alert("敬请期待！")
          }

        },
      }
    }
</script>

<style scoped>
  .swipe{
    width: 100%;
    height: 120px;
    position: relative;
  }
  .swipepic{
    width: 95%;
    height: 110px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .mint-swipe-item{
    width: 100%;
    height: 100px;
    background-size: 100% 100%;

  }
  .blockDiv{
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    background: url("../assets/img/time3.jpg") center center no-repeat;
    background-size: 100% 100%;
  }
  .block{
    width: calc(calc(100% / 4) - 10px);
    /*width: 70px;*/
    margin:3px;

    box-sizing: border-box;
    background-size: 100% 100%;
    text-align: center;
    color: black;
  }
  .block2{
    width: 55px;
    height:55px;
    box-sizing: border-box;
    border-radius: 50%;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .block2:active{
    border:2px  solid #499CF5;
  }
  .block:active >.title{
    color: #fb7299;
  }
.title{
  font-size: 13px;
  font-weight: 600;
}




</style>
