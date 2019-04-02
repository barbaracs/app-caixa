<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <Tables/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Tables from './components/Tables';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Tables,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* margin-top: 60px; */
}

</style>
