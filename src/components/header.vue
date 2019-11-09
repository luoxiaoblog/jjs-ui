<template>
  <header class="header">
    <div class="menu-toggle">
      <span
        class="menu-toggle__icon iconfont "
        :class="[isCollapse ? 'iconmenuOpen' : 'iconmenuClose']"
        @click="onCollapseChange"
      >
      </span>
    </div>
    <a class="logo">logo</a>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list__item"><a href="/template">模板</a></li>
        <li class="nav-list__item"><a href="#">导航</a></li>
        <li class="nav-list__item"><a href="#">导航</a></li>
        <li class="nav-list__item"><a href="#">导航</a></li>
      </ul>
    </nav>
    <div class="site-search">
      <el-input placeholder="搜索"></el-input>
    </div>
  </header>
</template>
<script>
import bus from '../bus'

export default {
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    onCollapseChange() {
      this.isCollapse = !this.isCollapse
      bus.$emit('ON_COLLAPSE_CHANGE', this.isCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
$header-height: 64px;

.header {
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: $header-height;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  background: #1976d2;
  color: #fff;
}

.menu-toggle {
  width: $header-height;
  height: $header-height;
  line-height: $header-height;
  text-align: center;
}

.menu-toggle__icon {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.logo {
  width: 100px;
  height: $header-height;
  line-height: $header-height;
  box-sizing: border-box;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background: transparent;
}

.nav-list {
  display: flex;
  padding: 15px 0;
  margin: 0;
}

.nav-list__item a {
  display: inline-block;
  padding: 8px 16px;
  color: #fff;
}

.nav-list__item a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.site-search {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  min-width: 150px;
  padding: 0 20px;

  .el-input {
    width: 180px;
  }
}
</style>
