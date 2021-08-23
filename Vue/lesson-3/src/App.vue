<template>
  <div id="app">
    <router-link to="/foo">go to Foo</router-link>
    <router-link to="/bar">go to Bar</router-link>
    <router-link to="/posts">go to Posts</router-link>
    <router-link to="/posts/1">go to Post</router-link>


    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
