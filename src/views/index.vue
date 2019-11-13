<style lang="scss" scoped>
.banner {
  text-align: center;
  background-image: linear-gradient(#1976d2, #8f93bf);
}
.banner-desc {
  padding-top: 20px;

  h1 {
    font-size: 26px;
    // padding: 0 0 30px;
    line-height: 48px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    color: #888;
    margin: 10px 0 5px;
  }
}

.search-wrapper {
  padding-bottom: 60px;

  .el-autocomplete {
    width: 360px;
  }
}

.sponsors {
  display: flex;
  justify-content: center;
}
.sponsor {
  margin: 0 20px 50px;
  display: inline-flex;
  width: 300px;
  height: 100px;
  justify-content: center;

  img {
    margin-right: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin: 0;
    line-height: 1.8;
    color: #999;
    font-size: 14px;
  }
}
.cards {
  margin: 80px auto 110px;
  width: 1180px;

  .container {
    padding: 0;
    margin: 0 -11px;
    width: auto;
    &::before,
    &::after {
      display: table;
      content: '';
    }
    &::after {
      clear: both;
    }
  }

  li {
    width: 33.33333%;
    padding: 0 19px;
    box-sizing: border-box;
    float: left;
    list-style: none;
  }

  img {
    width: 160px;
    height: 120px;
  }
}
.card {
  height: 430px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #eaeefb;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  bottom: 0;

  img {
    margin: 66px auto 60px;
  }
  h3 {
    margin: 0;
    font-size: 18px;
    color: #1f2f3d;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    color: #99a9bf;
    padding: 0 25px;
    line-height: 20px;
  }
  a {
    height: 53px;
    line-height: 52px;
    font-size: 14px;
    color: #409eff;
    text-align: center;
    border: 0;
    border-top: 1px solid #eaeefb;
    padding: 0;
    cursor: pointer;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    transition: all 0.3s;
    text-decoration: none;
    display: block;

    &:hover {
      color: #fff;
      background: #409eff;
    }
  }
  &:hover {
    bottom: 6px;
    box-shadow: 0 6px 18px 0 rgba(232, 237, 250, 0.5);
  }
}
@media (max-width: 1140px) {
  .cards {
    width: 100%;
    .container {
      width: 100%;
      margin: 0;
    }
  }
  .banner .container {
    width: 100%;
    box-sizing: border-box;
  }
  .banner img {
    right: 0;
  }
}

@media (max-width: 1000px) {
  .banner .container {
    img {
      display: none;
    }
  }
  .jumbotron {
    display: none;
  }
}

@media (max-width: 768px) {
  .cards {
    li {
      width: 80%;
      margin: 0 auto 20px;
      float: none;
    }
    .card {
      height: auto;
      padding-bottom: 54px;
    }
  }
  .banner-stars {
    display: none;
  }
  .banner-desc {
    #line2 {
      display: none;
    }
    h2 {
      font-size: 32px;
    }
    p {
      width: auto;
    }
  }
}
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-desc">
        <h1>网站快速成型工具</h1>
      </div>
      <div class="search-wrapper">
        <el-autocomplete
          prefix-icon="el-icon-search"
          class="inline-input"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
    </div>

    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="@/assets/images/component.png" alt="" />
            <h3>组件</h3>
            <p>
              使用组件 Demo
              快速体验交互细节；使用封装好的代码帮助工程师快速开发。
            </p>
            <router-link
              active-class="active"
              to="/component/new-sys/color"
              exact
              >查看详情
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="@/assets/images/theme.svg" alt="" />
            <h3>模板</h3>
            <p>
              展示新系统常用页面模板，提供下载功能，快速生成符合规范的页面框架。
            </p>
            <router-link active-class="active" to="/template" exact
              >查看详情
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="@/assets/images/component.png" alt="" />
            <h3>分享</h3>
            <p>
              分享开发心得
            </p>
            <router-link
              active-class="active"
              to="/zh-CN/component/layout"
              exact
              >查看详情
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleSelect() {}
  },
  mounted() {}
}
</script>
