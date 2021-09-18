<template>
  <div class="who-we-are">
    <div class="bg"></div>
    <div class="text">2005 Southern TV Station Golden Southern Madden Cartoon Award<br/><br/>• In 2007, the imported drama “Fajihong” won the “Jiangsu Audience’s Favorite Imported Drama” by Jiangsu City United Television Media Co., Ltd.; the imported drama “Little Treasure Legend” won the 2007 Fujian Radio Film and Television Group “Introduction Rating Award”<br/> • In 2008, won the TV series ratings contribution award of Fujian Radio Film and Television Group; Hong Kong TVB TV series excellent partner<br/> • In 2010, the introduced drama “Fire Ambition 3” won the ratings tribute of the Overseas Star Theater of the Film and Television Channel of Jiangsu Radio and Television General Station<br/> • In 2012, the TV series “Happiness Only with You” won the special support fund for the creation of ne art works in Guangdong Province …</div>
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
  name: 'Who-we-are',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../public/img/1.png);
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
  top: 300px;
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
