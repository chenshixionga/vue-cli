<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航 ：
      <router-link :to="{name:'Hi' ,params:{id:1234,password:'test1234'}}">欢迎Hi</router-link>
      <router-link to="/hi/hi1">欢迎Hi1</router-link>
      <router-link to="/hi/hi2">欢迎Hi2</router-link>
      <router-link to="/multiple">多个路由</router-link>
      <router-link to="/news/1234/道德模范">url传参</router-link>
      <router-link to="/good/3333/重定向">重定向</router-link>
      <router-link :to="{name:'Redirect' ,params:{id:66666,password:'重定向2'}}">重定向2</router-link>
    </p>
    <p>
      <router-link to="/count">状态vuex</router-link>
    </p>
    <router-view></router-view>
    <router-view name="left" style="float: left"></router-view>
    <router-view name="right" style="float: left"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
