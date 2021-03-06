<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav_left">
          <li>
            <router-link></router-link>
          </li>
          <li>Admin</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
