<template>
  <div class="page-component">
    <side-nav :data="navsData" :base="`/component`"></side-nav>
    <div class="page-component__scroll" :style="{ 'margin-left': marginLeft }">
      <div class="el-scrollbar__wrap">
        <div class="page-container page-component">
          <router-view></router-view>
        </div>
      </div>
      <el-backtop
        target=".page-component__scroll .el-scrollbar__wrap"
      ></el-backtop>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import navsData from '../nav.config'
import bus from '../bus'

export default {
  props: {},
  computed: {
    marginLeft() {
      return this.isCollapse ? '84px' : '260px'
    }
  },
  data() {
    return {
      navsData,
      isCollapse: true
    }
  },
  created() {
    bus.$on('ON_COLLAPSE_CHANGE', val => {
      this.isCollapse = val
    })
  }
}
</script>
<style lang="scss">
.page-component__scroll {
  height: 100%;
  margin-left: 260px;
  transition: 0.3s all;

  .el-scrollbar__wrap {
    overflow-x: auto;
  }
}

.page-component {
  box-sizing: border-box;
  height: 100%;

  &.page-container {
    padding: 0;
  }

  .side-nav {
    height: 100%;
    padding-bottom: 50px;
    padding-right: 0;

    & > ul {
      padding-bottom: 50px;
    }
  }

  .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }

  .content {
    padding-top: 50px;

    > {
      h3 {
        margin: 55px 0 20px;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;

        strong {
          font-weight: normal;
        }

        td,
        th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }

        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }

        td {
          color: #606266;
        }

        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }

      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }

  .page-component-up {
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    size: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    z-index: 5;

    i {
      color: #409eff;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }

    &.hover {
      opacity: 1;
    }
  }
  .back-top-fade-enter,
  .back-top-fade-leave-active {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
