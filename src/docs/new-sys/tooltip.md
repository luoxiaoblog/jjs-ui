## 文字提示

常用于展示鼠标 hover 时的提示信息。

引入 jquery 和 bootstrap 即可使用此插件，

### 基础用法

提供 4 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果

:::demo 调用`.tooltip(options)`方法即可使用此插件，`data-placement`指定展示方向

```html
<div style="padding: 20px 80px;" class="clearfix">
  <button
    type="button"
    class="fl mr20 btn btn-white"
    data-toggle="tooltip"
    data-placement="left"
    title="Tooltip on left"
  >
    Tooltip on left
  </button>
  <button
    type="button"
    class="fl mr20 btn btn-white"
    data-toggle="tooltip"
    data-placement="top"
    title="Tooltip on top"
  >
    Tooltip on top
  </button>
  <button
    type="button"
    class="fl mr20 btn btn-white"
    data-toggle="tooltip"
    data-placement="bottom"
    title="Tooltip on bottom"
  >
    Tooltip on bottom
  </button>
  <button
    type="button"
    class="fl mr20 btn btn-white"
    data-toggle="tooltip"
    data-placement="right"
    title="Tooltip on right"
  >
    Tooltip on right
  </button>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('[data-toggle="tooltip"]').tooltip()
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})
//DEMO_JS_SHOW_END
</script>
```

:::

:::tip  
 更多使用方式请参考<a href="https://v3.bootcss.com/javascript/#tooltips" target="_blank">Tooltips</a>
:::
