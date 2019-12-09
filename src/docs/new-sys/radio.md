## 单选框

在一组备选项中进行单选

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

使用此组件需引入以下文件：

```html
<link rel="stylesheet" href="radio.css" />
<script src="radio.js"></script>
```

### 基础用法

:::demo 使用单选框组件只需通过 jQuery 选中 div 并调用`.lyj_radiogroup(options)`方法

```html
<div id="radiogroup1"></div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    let options = {
      name: 'sex',
      radioGroup: [
        {
          label: '男',
          value: '1'
        },
        {
          label: '女',
          value: '2'
        }
      ]
    }
    $('#radiogroup1').lyj_radiogroup(options)
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
var options = {
  name: 'sex',
  radioGroup: [
    {
      label: '男',
      value: '1'
    },
    {
      label: '女',
      value: '2'
    }
  ]
}
$('#radiogroup1').lyj_radiogroup(options)
//DEMO_JS_SHOW_END
</script>
```

:::

### 默认值

带默认值的单选组

:::demo 设置默认值只需添加`value`属性，其值与 `radioGroup` 中某一项的 `value` 相等时，该项默认选中

```html
<div id="radiogroup2"></div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    let options = {
      name: 'type',
      value: '1',
      radioGroup: [
        {
          label: '按区域查找',
          value: '1'
        },
        {
          label: '按地铁查找',
          value: '2'
        }
      ]
    }
    $('#radiogroup2').lyj_radiogroup(options)
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
var options = {
  name: 'type',
  value: '1',
  radioGroup: [
    {
      label: '按区域查找',
      value: '1'
    },
    {
      label: '按地铁查找',
      value: '2'
    }
  ]
}
$('#radiogroup2').lyj_radiogroup(options)
//DEMO_JS_SHOW_END
</script>
```

:::

### 多个选项

多个选项的单选组

:::demo 通过`radioGroup`定义选项，其中每一项的`value`对应 input 的`value`, `label`则是选项文本

```html
<div id="radiogroup3"></div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    let options = {
      name: 'type',
      radioGroup: [
        {
          label: '备选项',
          value: '1'
        },
        {
          label: '备选项',
          value: '2'
        },
        {
          label: '备选项',
          value: '3'
        }
      ]
    }
    $('#radiogroup3').lyj_radiogroup(options)
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
var options = {
  name: 'type',
  radioGroup: [
    {
      label: '备选项',
      value: '1'
    },
    {
      label: '备选项',
      value: '2'
    },
    {
      label: '备选项',
      value: '3'
    }
  ]
}
$('#radiogroup3').lyj_radiogroup(options)
//DEMO_JS_SHOW_END
</script>
```

:::

### change 事件的回调

:::demo 给`changeHandler`传一个 function,当触发 change 事件时会调用传入的 function，参数是选中的值

```html
<div id="radiogroup4"></div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    let options = {
      name: 'type',
      radioGroup: [
        {
          label: '备选项',
          value: '1'
        },
        {
          label: '备选项',
          value: '2'
        },
        {
          label: '备选项',
          value: '3'
        }
      ],
      changeHandler: val => {
        alert(val)
      }
    }
    $('#radiogroup4').lyj_radiogroup(options)
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
var options = {
  name: 'type',
  radioGroup: [
    {
      label: '备选项',
      value: '1'
    },
    {
      label: '备选项',
      value: '2'
    },
    {
      label: '备选项',
      value: '3'
    }
  ],
  changeHandler: function(val) {
    alert(val)
  }
}
$('#radiogroup4').lyj_radiogroup(options)
//DEMO_JS_SHOW_END
</script>
```

:::

:::

### 禁用状态

单选框不可用的状态。

:::demo 通过`disabled`属性可设置组件是否可用

```html
<div id="radiogroup5"></div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    let options = {
      name: 'type',
      disabled: true,
      radioGroup: [
        {
          label: '备选项',
          value: '1'
        },
        {
          label: '备选项',
          value: '2'
        },
        {
          label: '备选项',
          value: '3'
        }
      ]
    }
    $('#radiogroup5').lyj_radiogroup(options)
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
var options = {
  name: 'type',
  disabled: true,
  radioGroup: [
    {
      label: '备选项',
      value: '1'
    },
    {
      label: '备选项',
      value: '2'
    },
    {
      label: '备选项',
      value: '3'
    }
  ]
}
$('#radiogroup5').lyj_radiogroup(options)
//DEMO_JS_SHOW_END
</script>
```

:::

### 动态操作

通过 javascript 动态操作单选框

:::demo 调用`.data('radiogroup')`可获取组件对象，组件对象提供了一些方法和属性可进行动态操作

```html
<div id="radiogroup6"></div>

<div class="mt10 clearfix btn-wrapper">
  <button id="btn1" type="button" class="btn btn-primary fl mr10">禁用</button>
  <button id="btn2" type="button" class="btn btn-primary fl mr10">启用</button>
  <button id="btn3" type="button" class="btn btn-primary fl mr10">
    选中第三项
  </button>
  <button id="btn4" type="button" class="btn btn-primary fl mr10">
    选中第一项
  </button>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    let options = {
      name: 'type',
      radioGroup: [
        {
          label: '备选项',
          value: '1'
        },
        {
          label: '备选项',
          value: '2'
        },
        {
          label: '备选项',
          value: '3'
        }
      ]
    }
    $('#radiogroup6').lyj_radiogroup(options)
    $('.btn-wrapper').on('click', '.btn.btn-primary', function() {
      var radiogroup = $('#radiogroup6').data('radiogroup')
      var id = $(this).attr('id')
      if (id == 'btn1') {
        radiogroup.disabled = true
      } else if (id == 'btn2') {
        radiogroup.disabled = false
      } else if (id == 'btn3') {
        radiogroup.value = '3'
      } else if (id == 'btn4') {
        radiogroup.value = '1'
      }
    })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
let options = {
  name: 'type',
  disabled: true,
  radioGroup: [
    {
      label: '备选项',
      value: '1'
    },
    {
      label: '备选项',
      value: '2'
    },
    {
      label: '备选项',
      value: '3'
    }
  ]
}
$('#radiogroup6').lyj_radiogroup(options)

$('.btn-wrapper').on('click', '.btn.btn-primary', function() {
  // 获取组件对象
  var radiogroup = $('#radiogroup6').data('radiogroup')
  var id = $(this).attr('id')
  if (id == 'btn1') {
    radiogroup.disabled = true
  } else if (id == 'btn2') {
    radiogroup.disabled = false
  } else if (id == 'btn3') {
    radiogroup.value = '3'
  } else if (id == 'btn4') {
    radiogroup.value = '1'
  }
})
//DEMO_JS_SHOW_END
</script>
```

:::

### Options

配置对象的所有属性

| 名称          | 类型             | 默认值 | 描述                                                                                                           |
| :------------ | ---------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| name          | string           | 无     | `name`属性值会作为`<input type="radio">`的`name`值                                                             |
| value         | string 或 number | 无     | 单选框组的默认值                                                                                               |
| radioGroup    | array            | 无     | 单选框组 DOM 根据此配置生成，数组中每一项的`label`作为选项文本， `value`作为 `<input type="radio">`的`value`值 |
| disabled      | boolean          | false  | 是否禁用                                                                                                       |
| changeHandler | Function         | 无     | `change`事件的回调                                                                                             |

示例：

```javascript
$('#myRadioGroup').lyj_radiogroup({
  name: 'aa',
  value: '1',
  disabled: false,
  radioGroup: [
    {
      label: '选项',
      value: '1'
    },
    {
      label: '选项',
      value: '2'
    }
  ],
  changeHandler: function(val) {}
})
```

### Prop

组件对象的属性

| 名称     | 类型             | 描述             |
| :------- | ---------------- | ---------------- |
| disabled | boolean          | 是否禁用         |
| value    | string 或 number | 单选框组的默认值 |

示例：

```javascript
$('#myRadioGroup').lyj_radiogroup({
  name: 'aa',
  value: '1',
  radioGroup: [
    {
      label: '选项',
      value: '1'
    },
    {
      label: '选项',
      value: '2'
    }
  ]
})

// 获取组件对象，通过对象属性操作组件
$('#myRadioGroup').data('radiogroup').value = 2
```
