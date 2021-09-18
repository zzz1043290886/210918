<template>
  <div class="header-nav">
    <el-menu
      :default-active="defaultactive"
      background-color="rgba(0,0,0, 0)"
      :text-color="textcolor"
      class="el-menu-demo"
      mode="horizontal"
      unique-opened
      menu-trigger="hover"
      :active-text-color="textcolor"
      router
      @select="handleSelect"
      >
        <el-submenu index="1" background-color="rgba(255,255,255,0.6)" popper-class="submenu">
          <template slot="title">Who we are</template>
          <div class="el-menu-item1" :style="bgcolor">
            <el-menu-item index="/">Introduction</el-menu-item>
            <el-menu-item>Our Vision</el-menu-item>
            <el-menu-item>Our Mission</el-menu-item>
            <el-menu-item>Our Core Values</el-menu-item>
            <el-menu-item>Our Human Resources</el-menu-item>
            <el-menu-item>Awards</el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="2" popper-class="submenu">
          <template slot="title">What we do</template>
          <div class="el-menu-item2" :style="bgcolor">
            <el-menu-item index="/What-we-do">Introduction</el-menu-item>
            <el-menu-item>Our Vision</el-menu-item>
            <el-menu-item>Our Mission</el-menu-item>
            <el-menu-item>Our Core Values</el-menu-item>
            <el-menu-item>Our Human Resources</el-menu-item>
            <el-menu-item>Awards</el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">Investor Relations</template>
          <div class="el-menu-item3" :style="bgcolor">
            <el-menu-item index="/Investor-Relations">Introduction</el-menu-item>
            <el-menu-item>Our Vision</el-menu-item>
            <el-menu-item>Our Mission</el-menu-item>
            <el-menu-item>Our Core Values</el-menu-item>
            <el-menu-item>Our Human Resources</el-menu-item>
            <el-menu-item>Awards</el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">i-GET TV</template>
          <div class="el-menu-item4" :style="bgcolor">
            <el-menu-item index="/i-GET-TV">Introduction</el-menu-item>
            <el-menu-item>Our Vision</el-menu-item>
            <el-menu-item>Our Mission</el-menu-item>
            <el-menu-item>Our Core Values</el-menu-item>
            <el-menu-item>Our Human Resources</el-menu-item>
            <el-menu-item>Awards</el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">E-shop</template>
          <div class="el-menu-item5" :style="bgcolor">
          <el-menu-item index="/E-shop">Introduction</el-menu-item>
          <el-menu-item>Our Vision</el-menu-item>
          <el-menu-item>Our Mission</el-menu-item>
          <el-menu-item>Our Core Values</el-menu-item>
          <el-menu-item>Our Human Resources</el-menu-item>
          <el-menu-item>Awards</el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">Media</template>
          <div class="el-menu-item6" :style="bgcolor">
            <el-menu-item index="/Media">Introduction</el-menu-item>
            <el-menu-item>Our Vision</el-menu-item>
            <el-menu-item>Our Mission</el-menu-item>
            <el-menu-item>Our Core Values</el-menu-item>
            <el-menu-item>Our Human Resources</el-menu-item>
            <el-menu-item>Awards</el-menu-item>
          </div>
        </el-submenu>
        <el-menu-item index="/Contact-us">Contact us</el-menu-item>
        <!-- <el-submenu index="7">
          <template slot="title">Contact us</template>
          <div class="el-menu-item7" :style="bgcolor">
            <el-menu-item index="/Contact-us">Introduction</el-menu-item>
            <el-menu-item>Our Vision</el-menu-item>
            <el-menu-item>Our Mission</el-menu-item>
            <el-menu-item>Our Core Values</el-menu-item>
            <el-menu-item>Our Human Resources</el-menu-item>
            <el-menu-item>Awards</el-menu-item>
          </div>
        </el-submenu> -->
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      textcolor: '#fff',
      activetextcolor: '#E24444',
      defaultactive: this.$route.path,
      bgcolor: 'background-color: #fff'
    }
  },
  methods: {
    handle () {
      console.log(this.defaultactive)
      if (this.defaultactive === '/Contact-us') {
        this.textcolor = '#333'
        this.activetextcolor = '#E24444'
        this.bgcolor = 'background-color: #fff'
      } else {
        this.textcolor = '#fff'
        this.activetextcolor = '#E24444'
        this.bgcolor = 'background-color: #333'
      }
    },
    handleSelect (key, keyPath) {
      console.log(key)
      if (key === '/Contact-us') {
        this.textcolor = '#333'
        this.activetextcolor = '#E24444'
        this.bgcolor = 'background-color: #fff'
      } else {
        this.textcolor = '#fff'
        this.activetextcolor = '#E24444'
        this.bgcolor = 'background-color: #333'
      }
    }
  },
  created () {
    this.handle()
  }
}
</script>
<style lang="scss">
.el-menu--horizontal > .el-menu-item.is-active {
  border: 0;
}
.el-submenu.is-active .el-submenu__title {
  border: 0 !important;
}
.el-menu--horizontal > .el-menu-item {
  border: 0;
}
.el-submenu__title:hover {
  background-color: rgba(0,0,0,0) !important;
}
.el-menu-item:hover {
  border-bottom: 1px solid #E24444 !important;
  color: #E24444 !important;
  background-color: rgba(0,0,0,0) !important;
}
.el-submenu__title{
  font-size: 16px;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  margin-right: 38px;
  margin-top: 22px;
  font-size: 14px;
}
.el-menu--popup-bottom-start {
  margin: 0;
}
.el-menu--popup {
  min-width: 1020px !important;
  padding: 0;
  box-shadow: none;
}
.el-menu--popup .is-active {
  border: 0;
}
.el-menu-item1 {
  position: absolute;
  top: 0;
  left: 0px;
  opacity: 0.8;
  padding-left: 71px;
  width: 1020px;
  height: 80px;
  box-sizing: border-box;
}
.el-menu-item2 {
  position: absolute;
  top: 0;
  left: -151px;
  opacity: 0.8;
  padding-left: 71px;
  width: 1020px;
  height: 80px;
  box-sizing: border-box;
}
.el-menu-item3 {
  position: absolute;
  top: 0;
  left: -304px;
  opacity: 0.8;
  padding-left: 71px;
  width: 1020px;
  height: 80px;
  box-sizing: border-box;
}
.el-menu-item4 {
  position: absolute;
  top: 0;
  left: -501px;
  opacity: 0.8;
  padding-left: 71px;
  width: 1020px;
  height: 80px;
  box-sizing: border-box;
}
.el-menu-item5 {
  position: absolute;
  top: 0;
  left: -549px;
  opacity: 0.8;
  padding-left: 71px;
  width: 1020px;
  height: 80px;
  box-sizing: border-box;
}
.el-menu-item6 {
  position: absolute;
  top: 0;
  left: -549px;
  opacity: 0.8;
  padding-left: 71px;
  width: 1020px;
  height: 80px;
  box-sizing: border-box;
}
.el-menu-item7 {
  position: absolute;
  top: 0;
  left: -549px;
  opacity: 0.8;
  padding-left: 71px;
  width: 1020px;
  height: 80px;
  box-sizing: border-box;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 1px #B0B0B0;
  padding-bottom: 4px;
}
</style>
<style lang="scss" scoped>
.el-menu-demo {
  width: 1020.5px;
  margin: 0 553px 0 346px;
  margin-top: 28px;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  float: left;
}
</style>
