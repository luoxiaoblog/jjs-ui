<template>
  <div class="side-nav">
    <el-menu default-active="2" @open="handleOpen" @close="handleClose">
      <el-submenu v-for="(item, i) in data" :key="i" :index="item.name">
        <template slot="title">
          <i :class="item.icon" class="menu-icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(item, j) in item.children"
          :key="j"
          :index="i + '-' + j"
        >
          <router-link
            class=""
            active-class="active"
            :to="base + item.path"
            exact
            v-text="item.name"
          >
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
    base: String
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.side-nav {
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  z-index: 3000;
  padding: 0;
  min-width: 260px;
  background-color: #fff;
  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);
}

.menu-icon {
  margin-right: 10px;
}

.el-submenu .el-menu-item {
  padding: 0 !important;
}

.el-submenu .el-menu-item a {
  display: block;
  height: 100%;
  padding: 0 45px;
  color: #6e6e6e;
}
</style>
