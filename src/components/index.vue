<template>
  <div class="hello">
    <H></H> <!--头部-->

  <Main-Body>
  </Main-Body>

    <div class="Footer">
      <mt-tabbar v-model="selected">
        <mt-tab-item class="TabItem" v-for="item in TabList" :key="item.id" :id="item.id" @click.native="change(item.path)">
          <img slot="icon" src="../assets/img/Misaki0.png">
          {{item.title}}
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
  import H from './header';
  import MainBody from './ContentBody'

export default {
  name: 'Home',
  components:{
    H,
    MainBody,

  },
  data () {
    return {
      selected: 'Welcome to Your Vue.js App',
      TabList:[
        {
          id:1,
          title:'首页',
          path:'/mulu',
        },
        {
          id:2,
          title:'测试',
          path:'/Misaki',
        }, {
          id:3,
          title:'测试',
          path:'/Misaki',
        },
        {
          id:4,
          title:'权限设置',
          path:'/juri',
        },
      ]
    }
  },
  methods:{
    change(path){
      console.log(path);
      this.$router.push(path)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Footer{
  margin: 0;
  padding: 0;
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
