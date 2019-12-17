<template>
  <header class="header" :class="[isHome ? 'no-shadow' : '']">
    <div class="header-left">
      <div class="menu-toggle" v-if="isComponent">
        <span
          class="menu-toggle__icon iconfont "
          :class="[isCollapse ? 'iconmenuOpen' : 'iconmenuClose']"
          @click="onCollapseChange"
        >
        </span>
      </div>
      <router-link class="logo" to="/"></router-link>
      <span class="sys-name">前端组件平台</span>
      <router-link to="/changelog" class="sys-version">V1.0.0</router-link>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, i) in routeArr" :key="i">
          <template v-if="routeArr.length - 1 == i">
            {{ item.title }}
          </template>
          <!-- <a v-else :href="item.path">{{ item.title }}</a> -->
          <router-link v-else :to="item.path">{{ item.title }}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-list__item">
            <router-link to="/component">组件</router-link>
          </li>
          <li class="nav-list__item">
            <router-link to="/template">模板</router-link>
          </li>
          <li class="nav-list__item">
            <router-link to="/share">分享</router-link>
          </li>
        </ul>
      </nav>
      <div class="site-search" v-if="!isHome">
        <el-input placeholder="搜索"></el-input>
      </div>
    </div>
  </header>
</template>
<script>
import bus from '../bus'

export default {
  data() {
    return {
      isCollapse: false,
      routeArr: []
    }
  },
  watch: {
    $route(to, from) {
      this.refleshBreadcrumb(to, from)
      this.resetIsCollapse(to, from)
    }
  },
  computed: {
    isComponent() {
      return /^component-/.test(this.$route.name || '')
    },
    isHome() {
      return 'home' === this.$route.name
    }
  },
  methods: {
    onCollapseChange() {
      this.isCollapse = !this.isCollapse
      bus.$emit('ON_COLLAPSE_CHANGE', this.isCollapse)
    },
    refleshBreadcrumb(to, from) {
      let routes = this.$router.options.routes
      let path = to.path.split('/')
      this.routeArr.length = 0
      if (!path[path.length - 1]) path.pop()
      for (let i = 1; i < path.length; i++) {
        for (let j = 0; j < routes.length; j++) {
          let item = routes[j]
          var curPath = item.path
          if (item.path.lastIndexOf('/') > 0) {
            curPath = curPath.split('/')
            curPath = '/' + curPath[curPath.length - 1]
          }
          if (curPath === '/' + path[i]) {
            this.routeArr.push({
              title: item.meta.title,
              path: item.path
            })
            if (item.children) {
              routes = item.children
            }
            break
          }
        }
      }
      if (this.routeArr.length > 0) {
        this.routeArr.unshift({
          title: '首页',
          path: '/'
        })
      }
    },
    resetIsCollapse(to, from) {
      if (from.path.indexOf('component') === -1) {
        this.isCollapse = false
      }
    }
  }
}
</script>
<style lang="scss">
$header-height: 64px;

.header {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: $header-height;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  background: #1976d2;
  color: #fff;

  &.no-shadow {
    box-shadow: none;
  }

  .header-left,
  .header-right {
    display: flex;
    align-items: center;
    height: 100%;
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
    display: inline-block;
    width: 61px;
    height: 27px;
    margin: 0 10px 0 20px;
    background-image: url('~@/assets/images/logo.png');
    background-image: -webkit-image-set(
      url('~@/assets/images/logo.png') 1x,
      url('~@/assets/images/logo@2x.png') 2x
    );
    background-repeat: no-repeat;
    background-position: 0 center;
    background-size: 100% 100%;
  }

  .sys-name {
    margin-right: 5px;
    font-size: 14px;
  }

  .sys-version {
    font-size: 14px;
    margin-right: 20px;
    color: #fff;
    text-decoration: underline;
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
    font-size: 16px;
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

  .el-breadcrumb {
    margin-left: 40px;
    font-size: 12px;
  }

  .el-breadcrumb__inner {
    color: #fdfbfb;
  }

  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    font-weight: 700;
    text-decoration: none;
    -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #ffffff;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #fdfbfb;
  }
}
</style>
