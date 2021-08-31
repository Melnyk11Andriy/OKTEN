<template>
  <div id="app">
    <div class="links-wrapper">
      <router-link to="/">HOME</router-link>
      <router-link to="/foo">go to Foo</router-link>
      <router-link to="/bar">go to Bar</router-link>
      <router-link to="/posts">go to Posts</router-link>
      <router-link to="/posts/1">go to Post</router-link>
    </div>
    <div class="component-deploy">
      <router-view></router-view>
    </div>
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
}

.links-wrapper {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
}
</style>
