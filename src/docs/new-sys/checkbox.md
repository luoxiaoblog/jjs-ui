## 多选框 Checkbox

一组备选项中进行多选

使用此组件需引入以下文件：

```
<link rel="stylesheet" href="checkbox.css" />
<script src="checkbox.js"></script>
```

### 基础用法

单独使用可以表示两种状态之间的切换

:::demo 只需用 jQuery 选中 div 并调用`.lyj_checkboxGroup(options)`方法即可使用该组件

```html
<div id="checkboxGroup1"></div>

<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      let options = {
        name: 'name1',
        checkboxGroup: [
          {
            label: '备选项',
            value: '1'
          }
        ]
      }
      $('#checkboxGroup1').lyj_checkboxGroup(options)
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var options = {
    name: 'name1',
    checkboxGroup: [
      {
        label: '备选项',
        value: '1'
      }
    ]
  }
  $('#checkboxGroup1').lyj_checkboxGroup(options)
  //DEMO_JS_SHOW_END
</script>
```

:::

### 禁用状态

多选框不可用状态。

:::demo 参数对象中`disabled`属性控制组件是否禁用

```html
<div id="checkboxGroup2"></div>

<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      let options = {
        name: 'name2',
        disabled: true,
        checkboxGroup: [
          {
            label: '备选项',
            value: '1'
          }
        ]
      }
      $('#checkboxGroup2').lyj_checkboxGroup(options)
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var options = {
    name: 'name2',
    disabled: true,
    checkboxGroup: [
      {
        label: '备选项',
        value: '1'
      }
    ]
  }
  $('#checkboxGroup2').lyj_checkboxGroup(options)
  //DEMO_JS_SHOW_END
</script>
```

:::

### 多选框组

:::demo 参数对象中`checkboxGroup`属性设置多选框选项，`label`对应选项文字，`value`对应选项值

```html
<div id="checkboxGroup3"></div>

<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      let options = {
        name: 'name3',
        value: 'e',
        checkboxGroup: [
          {
            label: '复选框 A',
            value: 'a'
          },
          {
            label: '复选框 B',
            value: 'b'
          },
          {
            label: '复选框 C',
            value: 'c'
          },
          {
            label: '禁用',
            value: 'd',
            disabled: true
          },
          {
            label: '禁用且选中',
            value: 'e',
            disabled: true
          }
        ]
      }
      $('#checkboxGroup3').lyj_checkboxGroup(options)
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var options = {
    name: 'name3',
    value: ['e'],
    checkboxGroup: [
      {
        label: '复选框 A',
        value: 'a'
      },
      {
        label: '复选框 B',
        value: 'b'
      },
      {
        label: '复选框 C',
        value: 'c'
      },
      {
        label: '禁用',
        value: 'd',
        disabled: true
      },
      {
        label: '禁用且选中',
        value: 'e',
        disabled: true
      }
    ]
  }
  $('#checkboxGroup3').lyj_checkboxGroup(options)
  //DEMO_JS_SHOW_END
</script>
```

:::
