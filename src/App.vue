<template>
  <div id="app">
    <!-- <hello></hello> -->
    <div class="nav">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <ul>
        <li>
          <router-link to="/home">全国</router-link>
        </li>
        <li>
          <router-link to="/beijing">北京</router-link>
        </li>
        <li>
          <router-link to="/shanghai">上海</router-link>
        </li>
        <li>
          <router-link to="/tianjin">天津</router-link>
        </li>
        <li>
          <router-link to="/chongqing">重庆</router-link>
        </li>
        <li>
          <router-link to="/liaoning">辽宁</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  components: {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.nav {
  position: fixed;
  width: 128px;
  left: 32px;
}
.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav ul li {
  width: 128px;
  height: 32px;
  line-height: 32px;
  border: 1px solid #c8c8c8;
  background-color: #e8e8e8;
  text-align: center;
}
.nav ul li a {
  text-decoration: none;
}

.main {
  height: 400px;
  margin-left: 180px;
  margin-right: 25px;
}
</style>
