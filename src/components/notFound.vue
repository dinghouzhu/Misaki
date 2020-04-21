<template>
  <div>
    <h1 class="title">我就是404页面</h1>
    <div class="notFound">

    </div>
  </div>
</template>

<script>
  export default {
    name:'NotFound',
  }
</script>

<style scoped>
  .title{
    text-align: center;
  }
  .notFound{
    width: 90%;
    height: 40%;
    background: url("../assets/img/404.png");
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
