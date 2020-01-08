<template>
  <div class="template-page-wrapper">
    <div class="template-page">
      <h1>新系统模板</h1>
      <el-row :gutter="30" style="margin-top: 30px;">
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <img
              class="el-card-image"
              src="@/assets/images/newSysListPage.png"
              alt=""
            />
            <div class="text-content">
              <a
                class="tpl-name"
                href="./template/list-simple/index.html"
                target="_blank"
              >
                简单列表页
              </a>
              <a
                class="iconfont icondownload"
                download
                href="./template/list-simple.zip"
                title="下载模板"
              ></a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <div class="iconfont iconjingqingqidai"></div>
            <div class="text-content">
              <a href="./template/list-simple.html" target="_blank">
                模板
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <div class="iconfont iconjingqingqidai"></div>
            <div class="text-content">
              <a href="./template/list-simple.html" target="_blank">
                模板
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <div class="iconfont iconjingqingqidai"></div>
            <div class="text-content">
              <a href="./template/list-simple.html" target="_blank">
                模板
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <div class="iconfont iconjingqingqidai"></div>
            <div class="text-content">
              <a href="./template/list-simple.html" target="_blank">
                模板
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <div class="iconfont iconjingqingqidai"></div>
            <div class="text-content">
              <a href="./template/list-simple.html" target="_blank">
                模板
              </a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'template',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.template-page {
  max-width: 1180px;
  padding-top: 20px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }

  .iconjingqingqidai {
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 100px;
    color: #666;
  }
}
.el-card {
  position: relative;
  top: 0;
  margin-bottom: 30px;

  // &:hover {
  //   top: -10px;
  // }
}
.el-card-image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 200px;
}

.text-content {
  position: relative;
  padding: 10px 0;
  margin: 0 -20px;
  text-align: center;
  font-size: 14px;
  line-height: 28px;

  .iconfont.icondownload {
    position: absolute;
    right: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #666;
  }

  .iconfont.icondownload:hover {
    color: #000;
  }
}
</style>
