<template>
  <div class="E-shop">
    <div class="bg"></div>
    <div class="text">Global Edutainment Tech (‘iGET’) has the Vision to be Asia’s Number One Edutainment Tech company. We are armed with strong technology platforms, scalable business models and excellent know-how in Singapore and the region to grow, support, innovate and digitalise the businesses of the Group.<br/><br/> Inclusive of technology, iGET has also grown a spectrum of businesses in the education and entertainment arenas. We provide various products and services from 3 years old, youth to adulthood. The entire GDP of Asia is US31.58 trillion dollars. This economy of Asia comprises more than 4.5 billion population which constitute 60% of the world population spreading 49 nations. iGET has already built its presence in Singapore, China, South Korea, Thailand, Malaysia, Hong Kong, all these territories being ranked top 12 in Asia’s economy.<br/><br/> Our Management team is comprised of successful leaders…</div>
    <img src="../../../public/img/logo.png">
    <el-button>More</el-button>
    <div class="icon-warp">
      <i class="el-icon-back"></i>
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'E-shop'
}
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../public/img/6.png);
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
  top: 293px;
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
