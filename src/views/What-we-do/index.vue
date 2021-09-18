<template>
  <div class="what-we-do">
    <div class="bg"></div>
    <div class="text">Children First<br/> – Children’s interests always come first.<br/><br/> Recruit Attitude, Train Competencies<br/> – Hire professionals with right attitude and provide them robust training programs to upkeep the necessary skills and knowledge.<br/><br/> Creativity and Technology Driven<br/> – Innovative products and services to differentiate SEA from competitors.<br/><br/> Investors and Customers at Heart<br/> – Constantly creating and maximizing value for investors and customers.<br/><br/> Accountability and Results<br/> – A dedicated and highly dependable team.</div>
    <img src="../../../public/img/logo.png">
    <div class="icon-warp">
      <i class="el-icon-back"></i>
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'What-we-do'
}
</script>

<style lang="scss" scoped>

.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../public/img/2.png);
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
  top: 339px;
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
