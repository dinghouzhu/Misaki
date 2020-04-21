<template>
 <div>
   <div class="lineswitch" v-for="i in 6" :key="i">
     <span>选项:{{i}}</span>
     <mt-switch v-model="value"></mt-switch>
   </div>
 </div>
</template>

<script>
    export default {
        name: "Jurisdiction",
      data(){
          return{
            value:false
          }
      }
    }
</script>

<style scoped>
  .mint-switch{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
.lineswitch{
  width: 100%;
  height: 50px;
  border-top: 2px dashed #f4f4f4;
  position: relative;
  line-height: 50px;
  margin-left: 10px;
}
  .lineswitch:nth-child(1){
    border: none;
  }
</style>
