<template>
  <div class="template-page-wrapper">
    <div class="template-page">
      <h1>新系统模板</h1>
      <el-row :gutter="30">
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <img
              class="el-card-image"
              src="@/assets/images/newSysListPage.png"
              alt=""
            />
            <div class="text-content">
              <a href="/template/list-simple.html" target="_blank">
                简单列表页
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <img
              class="el-card-image"
              src="@/assets/images/newSysListPage.png"
              alt=""
            />
            <div class="text-content">
              <a href="/template/detailPage.html" target="_blank">
                详情页
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <img
              class="el-card-image"
              src="@/assets/images/newSysListPage.png"
              alt=""
            />
            <div class="text-content">
              <a href="/template/tabs.html" target="_blank">
                tabs
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <img
              class="el-card-image"
              src="@/assets/images/newSysListPage.png"
              alt=""
            />
            <div class="text-content">
              <a href="/template/listPage.html" target="_blank">
                列表页
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <img
              class="el-card-image"
              src="@/assets/images/newSysListPage.png"
              alt=""
            />
            <div class="text-content">
              <a href="/template/detailPage.html" target="_blank">
                详情页
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ 'padding-bottom': 0 }">
            <img
              class="el-card-image"
              src="@/assets/images/newSysListPage.png"
              alt=""
            />
            <div class="text-content">
              <a href="/template/detailPage.html" target="_blank">
                详情页
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
}
.el-card {
  position: relative;
  top: 0;
  margin-bottom: 30px;

  &:hover {
    top: -10px;
  }
}
.el-card-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
}

.text-content {
  text-align: center;
  font-size: 14px;
  line-height: 28px;
  margin: 0 -20px;
  cursor: pointer;

  a {
    display: block;
    height: 100%;
    padding: 10px 0;
  }
}
</style>
