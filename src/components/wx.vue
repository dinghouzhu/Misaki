<template>
    <div class="body">
      <div class="wx"></div>
    </div>
</template>

<script>
    export default {
        name: "pay"
    }
</script>

<style scoped>

  .wx{
    width: 300px;
    height: 300px;
    background: url("../assets/img/pay.png");
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
