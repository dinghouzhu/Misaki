<template>
<div class="Main">
  <transition :name="transitionName">
  <keep-alive :include="$store.state.include">
    <router-view></router-view><!--跳转-->
  </keep-alive>
  </transition>
</div>
</template>

<script>
    export default {
        name: "ContentBody",
      data(){
        return{
          transitionName: '',
        }
      },
      watch: {
        $route(to, from) {
          if (to.meta.index > from.meta.index) {
            this.transitionName = 'slide-left'
          } else if (to.meta.index < from.meta.index) {
            this.transitionName = 'slide-right'
          } else {
            this.transitionName = 'slide-none'
          }
        }
      }
    }
</script>

<style scoped>
.content{
  margin: 0;
  padding: 0;
  width: 100%;
  clear: both;
}
.router-view {
  width: 100%;
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 200ms;
  position: absolute;
}
.slide-none-leave-active {
  opacity: 0;
  display: none;
}
.slide-none-enter {
  display: inline;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
