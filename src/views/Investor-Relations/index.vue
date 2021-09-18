<template>
  <div class="investor-relations">
    <div class="bg"></div>
    <div class="text">Asia’s Number One Edutainment Platform.</div>
    <img src="../../../public/img/logo.png">
    <div class="icon-warp">
      <i class="el-icon-back"></i>
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Investor-Relations'
}
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../public/img/3.png);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
  min-width: 1200px;
  min-height: 969px;
  z-index: -1;
}
.text {
  position: absolute;
  top: 524px;
  right: 51px;
  width: 505px;
  height: 400px;
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #FFFFFF;
  opacity: 1;
}
img {
  position: absolute;
  display: block;
  top: 32px;
  right: 269px;
}
.el-button {
  position: absolute;
  top: 703px;
  right: 476px;
  width: 80px;
  height: 40px;
  border-radius: 0;
  font-size: 14px;
  color: #fff;
  border: 0;
  background-color: #333333;
}
.icon-warp {
  position: absolute;
  top: 796px;
  right: 53px;
  width: 503px;
  font-size: 26px;
  color: #999999;
}
.el-icon-right {
  float: right;
  cursor: pointer;
}
.el-icon-back {
  cursor: pointer;
}
</style>
