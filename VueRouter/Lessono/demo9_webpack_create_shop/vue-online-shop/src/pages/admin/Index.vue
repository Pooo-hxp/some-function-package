<!--  -->
<template>
  <div class="title">
    <div class="admin-new">
      <div class="container">
        <div class="col-lg col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">View Products</router-link>
            </li>
            <li>
              <router-link to="/admin/new">New Products</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'home',
  data () {
    return {
        msg:'This is the Index!'
    };
  },

}

</script>
<style lang='' scoped>
</style>