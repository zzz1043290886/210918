<template>
  <div class="Contact-us">
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: 'Contact-us',
  data () {
    return {
      textcolor: '#fff',
      activetextcolor: '#E24444',
      defaultactive: this.$route.path
    }
  }
}
</script>
<style lang="scss">
.el-menu {
  border-bottom: 0;
}
</style>
<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../public/img/7.png);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
  min-width: 1200px;
  min-height: 969px;
  z-index: -1;
}
.el-menu-demo {
  color: #000 !important;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  margin-right: 60px;
  margin-top: 27px;
}
</style>
