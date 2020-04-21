<template>
<div>
  <keep-alive :include="$store.state.include">
    <router-view></router-view><!--跳转-->
  </keep-alive>
</div>
</template>

<script>
    export default {
        name: "ContentBody"
    }
</script>

<style scoped>
.content{
  margin: 0;
  padding: 0;
  width: 100%;



}
</style>
