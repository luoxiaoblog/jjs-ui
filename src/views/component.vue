<template>
  <div class="page-container page-component">
    <side-nav :data="navsData" :base="`/component`"></side-nav>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import navsData from '../nav.config'

export default {
  props: {},
  data() {
    return {
      navsData
    }
  }
}
</script>
<style lang="scss">
.page-component__scroll {
  height: calc(100% - 80px);
  margin-top: 80px;

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

  .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top 0.3s;

    .el-scrollbar__wrap {
      height: 100%;
    }

    &.is-extended {
      padding-top: 0;
    }
  }

  .side-nav {
    height: 100%;
    padding-top: 50px;
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

@media (min-width: 1140px) {
  .page-component__content {
    transition: padding-right 0.3s ease;
    &.theme-config {
      padding-right: 26%;
    }
  }
  .page-container.page-component {
    transition: all 0.3s ease;
    &.theme-config {
      width: 98%;
      .page-component__nav {
        animation-delay: 1s;
        padding-left: 2%;
      }
    }
  }
}

@media (min-width: 1600px) {
  .page-component__content {
    &.theme-config {
      padding-right: 25%;
    }
  }
  .page-container.page-component {
    &.theme-config {
      width: 1600px;
    }
  }
}

@media (max-width: 768px) {
  .page-component {
    .page-component__nav {
      width: 100%;
      position: static;
      margin-top: 0;
    }
    .side-nav {
      padding-top: 0;
      padding-left: 50px;
    }
    .page-component__content {
      padding-left: 10px;
      padding-right: 10px;
    }
    .content {
      padding-top: 0;
    }
    .content > table {
      overflow: auto;
      display: block;
    }
    .page-component-up {
      display: none;
    }
  }
}
</style>
