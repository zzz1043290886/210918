<template>
  <div class="i-GET-TV">
    <div class="bg"></div>
    <div class="text">iGET Pte Ltd Corporate Profile_August2021_English PPT P4<br/><br/> Our company is headed by the Board of Directors, CEO, COO and various Vice Presidents. It is also supported by a Board of Advisors consisting of distinguished professionals and exemplary academics. Our Ambassadors/Trainers/Teachers are highly qualied and well trained. Only teachers with a kind heart and passion for teaching children are hired.<br/> We also have a vigorous training and people development system that continuously upgrades and updates the skills and knowledge of our employees.</div>
    <img src="../../../public/img/logo.png">
    <div class="icon-warp">
      <i class="el-icon-back"></i>
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'I-GET-TV'
}
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../public/img/4.png);
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
  top: 411px;
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
