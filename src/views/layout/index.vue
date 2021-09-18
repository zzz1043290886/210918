<template>
  <div>
      <header-nav />
      <router-view/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
export default {
  name: 'Layout',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
.el-container {
  background-image: url(../../../public/img/1.png);
  background-repeat: no-repeat;
  height: 100vh;
  min-width: 980px;
}
.el-header {
  background-color: rgba(255,255,255,0);
  color: #FFFFFF;
  text-align: center;
  line-height: 0px;
  padding: 0 40px;
}
.el-main {
  background-color: rgba(255,255,255,0);
  color: #FFFFFF;
  text-align: center;
  line-height: 160px;
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  position: absolute !important;
  top: -2000px !important;
}
.el-submenu__title {
  box-sizing: border-box;
  padding: 0 10px;
  margin: 0 40px 0 0;
}
.el-menu-item {
  box-sizing: border-box;
  padding: 0 10px;
}
</style>
