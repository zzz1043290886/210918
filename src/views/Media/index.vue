<template>
  <div class="media">
    <div class="bg"></div>
    <div class="text">To provide a diverse range of quality education products and services in Singapore, Asia and eventually into the global market; with strong support from investors and professionals incorporating robust intellectual properties, driven by technology to accelerate growth and expansion.<br/><br/> Create an integrated educational ecosystem in Singapore and eventually in the global market.<br/><br/> Our Go-To-Market approach creates a win-win partnership to achieve our goals.<br/><br/> Our staff & partners success is our success. Our customer & objective-centric approach is a testament of our commitment to product excellence. We believe in teamwork, integrity and passion to realize our shared vision.</div>
    <img src="../../../public/img/logo.png">
    <div class="icon-warp">
      <i class="el-icon-back"></i>
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Media'
}
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../public/img/5.png);
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
  top: 360px;
  right: 51px;
  width: 505px;
  height: 400px;
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
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
