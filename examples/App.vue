<template>
  <div id="app">
    <!-- <demo-one style="width:550px;margin:10px auto;"></demo-one> -->
    <!-- <hello-world></hello-world> -->
      <transition>
        <router-view :key="$route.query.code" />
      </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "App",
  // components:{HelloWorld},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
