<template>
 <div class="Content">
   <div class="lineswitch" v-for="item in MenuList" :key="item.id">
     <span>{{item.name}}是否允许访问:{{item.value}}</span>
     <mt-switch v-model="item.value" @change="turn(item.id,item.value)"></mt-switch>
   </div>

 </div>
</template>

<script>
  import {getJur,updateJur} from "../api";
  export default {
      //此页面专为权限管理  设置方面
        name: "Jurisdiction",
       data(){
          return{
            MenuList:[

            ],
          }
      },
      methods:{
          turn(id,value){
            let Id=id;
            let Value =value;
            console.log(typeof Value,Value);
            updateJur(Id,Value)
              .then(res=>{
                console.log(res);
              })
              .catch(err=>{
                console.log(err);
              })
          },


        getMenuList(){
            getJur()
              .then(res=>{

                var _this=this;
                res.data.data.res.map(function (item,index) {
                  _this.MenuList.push(
                    {
                      id:item.id,
                      name:item.name,
                      value:Boolean(item.value)
                  });
                })
              })
              .catch(err=>{
                console.log(err);
              })
        }
      },
    created(){
        this.MenuList =[];
        this.getMenuList()
    },
    deactivated(){
      this.MenuList =[];
      this.getMenuList()
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
  width: 95%;
  height: 50px;
  border-top: 2px dashed #f4f4f4;
  position: relative;
  line-height: 50px;
  margin: 0 auto;

}
  .lineswitch:nth-child(1){
    border: none;
  }
</style>
