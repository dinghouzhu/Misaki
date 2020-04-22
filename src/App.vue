<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',



}
</script>

<style>
  /*取消默认行为*/
html,body,#app{
  touch-action: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

}

</style>
