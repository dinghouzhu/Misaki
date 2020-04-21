<template>
    <div class="Misaki">

    </div>
</template>

<script>
    export default {
        name: "logo",
      methods:{
        logo(){
         let token=localStorage.getItem("token")||"";
         if (token){
           this.$router.push('/mulu')
         } else {
           this.timer=setTimeout(()=>{
             this.$router.push('/mulu')
           },3000)
          }

        }
      },
       mounted(){
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

}
</style>
