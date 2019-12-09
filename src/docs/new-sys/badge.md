## 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法

展示新消息数量。

:::demo 在需要标记的元素外包一层 div，调用`.lyj_badge(options)`即可使用该组件，`value`属性设置消息数量

```html
<div id="badge1" class="fl mr30">
  <button type="button" class="btn btn-white">评论</button>
</div>
<div id="badge2" class="fl mr30">
  <button type="button" class="btn btn-white">回复</button>
</div>
<div id="badge3" class="fl mr30">
  <button type="button" class="btn btn-white">评论</button>
</div>
<div id="badge4" class="fl mr30">
  <button type="button" class="btn btn-white">回复</button>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#badge1').lyj_badge({ value: 11 })
    $('#badge2').lyj_badge({ value: 2 })
    $('#badge3').lyj_badge({ value: 1, type: BadgeType.Primary })
    $('#badge4').lyj_badge({ value: 2, type: BadgeType.Warning })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#badge1').lyj_badge({ value: 11 })
$('#badge2').lyj_badge({ value: 2 })
$('#badge3').lyj_badge({ value: 1, type: BadgeType.Primary })
$('#badge4').lyj_badge({ value: 2, type: BadgeType.Warning })
//DEMO_JS_SHOW_END
</script>
```

:::

### 最大值

可自定义最大值

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```html
<div id="badge5" class="fl mr30">
  <button type="button" class="btn btn-white">评论</button>
</div>
<div id="badge6" class="fl mr30">
  <button type="button" class="btn btn-white">回复</button>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#badge5').lyj_badge({ value: 200, max: 99 })
    $('#badge6').lyj_badge({ value: 100, max: 10 })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#badge5').lyj_badge({ value: 200, max: 99 })
$('#badge6').lyj_badge({ value: 100, max: 10 })
//DEMO_JS_SHOW_END
</script>
```

:::

### 自定义文本

可以显示数字以外的文本内容。

:::demo `value`属性设置成需要展示的文本内容

```html
<div id="badge7" class="fl mr30">
  <button type="button" class="btn btn-white">评论</button>
</div>
<div id="badge8" class="fl mr30">
  <button type="button" class="btn btn-white">回复</button>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#badge7').lyj_badge({ value: 'new' })
    $('#badge8').lyj_badge({ value: 'hot' })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#badge7').lyj_badge({ value: 'new' })
$('#badge8').lyj_badge({ value: 'hot' })
//DEMO_JS_SHOW_END
</script>
```

:::

### 小红点

以红点的形式标注需要关注的内容。

:::demo 设置`isDot`属性，它接受一个 `Boolean`

```html
<div id="badge9" class="fl mr30 line-28">
  评论
</div>
<div id="badge10" class="fl mr30">
  <button type="button" class="btn btn-white">回复</button>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#badge9').lyj_badge({ isDot: true })
    $('#badge10').lyj_badge({ isDot: true })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#badge9').lyj_badge({ isDot: true })
$('#badge10').lyj_badge({ isDot: true })
//DEMO_JS_SHOW_END
</script>
```

:::


### Options

配置对象的所有属性

| 名称   | 类型           | 可选值         | 默认值 | 描述                                                         |
| :----- | -------------- | -------------- | ------ | ------------------------------------------------------------ |
| value  | string, number | --             | --     | 显示值                                                       |
| max    | number         | --             | --     | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 |
| isDot  | boolean        | --             | false  | 小圆点                                                       |
| hidden | boolean        | --             | false  | 隐藏 badge                                                   |
| type   | number         | BadgeType 枚举 | --     | 类型                                                         |
