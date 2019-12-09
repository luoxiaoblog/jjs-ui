## 图片预览

:::warning
新系统统一使用Viewer作为图片预览插件
:::

使用此插件需引入如下文件：

原版：
```html
<link rel="stylesheet" href="https://front.leyoujia.com/plugins/viewer/viewer.min.css"/>
<script src="https://front.leyoujia.com/plugins/viewer/viewer.js"></script>
```

版本一：
```html
<link rel="stylesheet" href="https://front.leyoujia.com/plugins/viewer/viewer_v1/viewer.min.css">
<script src="https://front.leyoujia.com/plugins/viewer/viewer_v1/viewer.js"></script>
```

紧凑版：
```html
<link rel="stylesheet" href="https://front.leyoujia.com/plugins/viewer/viewer_v2/viewer.css"/>
<script src="https://front.leyoujia.com/plugins/viewer/viewer_v2/viewer.js"></script>
```

后台通用版：
```html
<link rel="stylesheet" href="https://front.leyoujia.com/plugins/viewer/viewer_v3/viewer.min.css">
<script src="https://front.leyoujia.com/plugins/viewer/viewer_v3/viewer.js"></script>
```

### 用法

:::demo

```html
<style>
ul.test li {
  float: left;
  display: inline-block;
  margin-right: 10px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 1px solid #ddd;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

ul.test li img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>

<ul id="testViewer" class="test" data-title="图片展示">
  <li><img src="https://front.leyoujia.com/pluginsAPI/images/1.jpg" alt="图片1"></li>
  <li><img src="https://front.leyoujia.com/pluginsAPI/images/2.jpg" alt="图片2"></li>
  <li><img src="https://front.leyoujia.com/pluginsAPI/images/3.jpg" alt="图片3"></li>
  <li><img src="https://front.leyoujia.com/pluginsAPI/images/4.jpg" alt="图片4"></li>
  <li><img src="https://front.leyoujia.com/pluginsAPI/images/5.jpg" alt="图片5"></li>
  <li><img src="https://front.leyoujia.com/pluginsAPI/images/6.jpg" alt="图片6"></li>
</ul>


<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    var tarImg = $('#testViewer')[0];
    if (tarImg.querySelectorAll("img").length > 0) {
      new Viewer(tarImg, { navbar: false });
    }
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$(function() {
    var tarImg = $('#testViewer')[0];
    if (tarImg.querySelectorAll("img").length > 0) {
        new Viewer(tarImg, { navbar: false });
    }
});
//DEMO_JS_SHOW_END
</script>

```

:::
