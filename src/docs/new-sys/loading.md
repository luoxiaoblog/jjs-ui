## 加载

这是一款使用方便的 loading 插件

需要引入的文件：

```html
<script src="https://front.leyoujia.com/plugins/loading/loadingLayer.js"></script>
```

### 纯图案

展示菊花图案，黑色半透明背景

:::demo `.showLoadingLayer(opts)`方法显示Loading，`.hideLoadingLayer()`方法隐藏Loading，参数对象中`type`属性值为0时展示默认图案

```html
<div class="clearfix">
  <button type="button" class="fl mr10 btn btn-primary show-loading1">显示</button>
  <button type="button" class="fl mr10 btn btn-primary hide-loading1">隐藏</button>
</div>
<div class="loading-wrapper loading-wrapper1 mt10">纯图案</div>

<script>
//DEMO_JS_RUN_START
  export default {
    mounted() {
      $('.show-loading1').click(function () {
        var opts = {
          type: 0,
          obj: '.loading-wrapper1'
        }
        showLoadingLayer(opts);
      });
      $('.hide-loading1').click(function() {
        hideLoadingLayer();
      });
    }
  }//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('.show-loading1').click(function () {
    var opts = {
      type: 1,
      obj: '.loading-wrapper1'
    }
    showLoadingLayer(opts);
  });
  $('.hide-loading1').click(function() {
    hideLoadingLayer();
  });//DEMO_JS_SHOW_END
</script>

```
:::

### 纯文字

展示白色文字，黑色半透明背景

:::demo 参数对象中`type`属性值为1时展示默认文字

```html
<div class="clearfix">
  <button type="button" class="fl mr10 btn btn-primary show-loading2">显示</button>
  <button type="button" class="fl mr10 btn btn-primary hide-loading2">隐藏</button>
</div>
<div class="loading-wrapper loading-wrapper2 mt10">纯文字</div>

<script>
//DEMO_JS_RUN_START
  export default {
    mounted() {
      $('.show-loading2').click(function () {
        var opts = {
          type: 1,
          obj: '.loading-wrapper2'
        }
        showLoadingLayer(opts);
      });
      $('.hide-loading2').click(function() {
        hideLoadingLayer();
      });
    }
  }//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('.show-loading1').click(function () {
    var opts = {
      type: 1,
      obj: '.loading-wrapper2'
    }
    showLoadingLayer(opts);
  });
  $('.hide-loading2').click(function() {
    hideLoadingLayer();
  });//DEMO_JS_SHOW_END
</script>
```
:::

### 图片加文字

展示图标和白色文字，黑色半透明背景

:::demo 参数对象中`type`属性值为2时展示默认文字

```html
<div class="clearfix">
  <button type="button" class="fl mr10 btn btn-primary show-loading3">显示</button>
  <button type="button" class="fl mr10 btn btn-primary hide-loading3">隐藏</button>
</div>
<div class="loading-wrapper loading-wrapper3 mt10">图片加文字</div>

<script>
//DEMO_JS_RUN_START
  export default {
    mounted() {
      $('.show-loading3').click(function () {
        var opts = {
          type: 2,
          obj: '.loading-wrapper3'
        }
        showLoadingLayer(opts);
      });
      $('.hide-loading3').click(function() {
        hideLoadingLayer();
      });
    }
  }//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('.show-loading3').click(function () {
    var opts = {
      type: 2,
      obj: '.loading-wrapper3'
    }
    showLoadingLayer(opts);
  });
  $('.hide-loading3').click(function() {
    hideLoadingLayer();
  });//DEMO_JS_SHOW_END
</script>
```
:::

### 进度条

展示进度条，黑色半透明背景

:::demo 参数对象中`type`属性值为3时展示进度条

```html
<div class="clearfix">
  <button type="button" class="fl mr10 btn btn-primary show-loading4">显示</button>
  <button type="button" class="fl mr10 btn btn-primary hide-loading4">隐藏</button>
</div>
<div class="loading-wrapper loading-wrapper4 mt10">进度条</div>

<script>
//DEMO_JS_RUN_START
  export default {
    mounted() {
      $('.show-loading4').click(function () {
        var opts = {
          type: 3,
          obj: '.loading-wrapper4'
        }
        showLoadingLayer(opts);
      });
      $('.hide-loading4').click(function() {
        hideLoadingLayer();
      });
    }
  }//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('.show-loading4').click(function () {
    var opts = {
      type: 3,
      obj: '.loading-wrapper4'
    }
    showLoadingLayer(opts);
  });
  $('.hide-loading4').click(function() {
    hideLoadingLayer();
  });//DEMO_JS_SHOW_END
</script>
```
:::

### 白色背景

展示图片加文字，白色半透明背景

:::demo 参数对象中`class`属性值为reverse时展示白色背景，可通过此参数设置额外样式

```html
<div class="clearfix">
  <button type="button" class="fl mr10 btn btn-primary show-loading5">显示</button>
  <button type="button" class="fl mr10 btn btn-primary hide-loading5">隐藏</button>
</div>
<div class="loading-wrapper loading-wrapper5 mt10" style="line-height: 28px;">白色半透明背景</div>

<script>
//DEMO_JS_RUN_START
  export default {
    mounted() {
      $('.show-loading5').click(function () {
        var opts = {
          type: 2,
          obj: '.loading-wrapper5',
          class: 'reverse'
        }
        showLoadingLayer(opts);
      });
      $('.hide-loading5').click(function() {
        hideLoadingLayer();
      });
    }
  }//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('.show-loading5').click(function () {
    var opts = {
      type: 2,
      obj: '.loading-wrapper5',
      class: 'reverse'
    }
    showLoadingLayer(opts);
  });
  $('.hide-loading5').click(function() {
    hideLoadingLayer();
  });//DEMO_JS_SHOW_END
</script>
```
:::

### 参数


| 名称                             | 类型                     |默认值                     | 说明                     |
| :----------------------------- | ------------------------ |------------------------ |------------------------ |
| type        | Number | 0 | loading显示类别：纯图标0 纯文字1 文字加图片2 显示进度3|
| obj                  | String	         | body | 要显示loading层的对象 |
| content                   | String     | '' | 文字提示内容 |
| class | String | '' | 给loading层额外加的样式，可以设置层级、背景(reverse为白底) |
