<template>
    <div class="Misaki">
      <div class="turn" @click="turn">
        <span class="num">{{num}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "logo",
      data(){
          return{
                 num:5
          }
      },
      methods:{
          turn(){
            if (this.timer) clearInterval(this.timer);
            this.$router.push('/mulu');
          },
         logo(){
           var _this=this;
           this.timer=setInterval(()=>{
             _this.num  -=1;
             if (this.num <= 0){
               clearInterval(this.timer);
               this.$router.push('/mulu');
             }
           },1000);

        }
      },
      watch:{
        num(newVal,oldVal){
          if (newVal){
            this.num=newVal;
          }
        }
      },
       created(){
        this.logo()
      },
      beforeDestroy(){
          if (this.timer) clearInterval(this.timer)
      }
    }
</script>

<style scoped>
.Misaki{
  width: 100%;
  height: 100%;
  background: url("../assets/img/timg.jpg") center center no-repeat;
  background-size: 95% 90%;
  position: relative;
}
  .turn{
    width: 30px;
    height: 30px;
    background-color: aqua;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    top: 6%;
    right: 5%;
    color: white;
  }
  .num{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
