## 步骤条

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤

### 基础用法

简单的步骤条。

:::demo 使用 jquery 选中一个 div 并调用`.lyj_steps(options)`方法即可生成步骤条。`stepList`属性用于配置步骤节点。调用`.data('steps')`方法可以得到组件对象。 `active`默认值为 0，即默认第一个节点处于进行中状态，给组件对象的`active`属性赋值可改变组件状态。

```html
<div id="steps1"></div>
<button id="btn1" type="button" class="btn btn-primary mt20">下一步</button>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#steps1').lyj_steps({
        stepList: [
          {
            title: '步骤一',
            description: '这是一段很长很长很长的描述性文字'
          },
          {
            title: '步骤二',
            description: '这是一段很长很长很长的描述性文字'
          },
          {
            title: '步骤三',
            description: '这是一段很长很长很长的描述性文字'
          }
        ]
      })

      $('#btn1').click(() => {
        let steps = $('#steps1').data('steps')
        let active = steps.active
        if (active++ > 2) active = 0
        steps.active = active
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#steps1').lyj_steps({
    stepList: [
      {
        title: '步骤一',
        description: '这是一段很长很长很长的描述性文字'
      },
      {
        title: '步骤二',
        description: '这是一段很长很长很长的描述性文字'
      },
      {
        title: '步骤三',
        description: '这是一段很长很长很长的描述性文字'
      }
    ]
  })

  $('#btn1').click(function() {
    var steps = $('#steps1').data('steps')
    var active = steps.active
    if (active++ > 2) active = 0
    steps.active = active
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### Step 的间距

定制 Step 的间距

:::demo `space`确定每个 step 的间距，不填写将自适应间距。支持百分比。

```html
<div id="steps2"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#steps2').lyj_steps({
        space: 200,
        stepList: [
          {
            title: '步骤一'
          },
          {
            title: '步骤二'
          },
          {
            title: '步骤三'
          }
        ]
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#steps2').lyj_steps({
    space: '20%',
    stepList: [
      {
        title: '步骤一'
      },
      {
        title: '步骤二'
      },
      {
        title: '步骤三'
      }
    ]
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

:::

### 竖式步骤条

竖直方向的步骤条。

:::demo 设置`direction`属性为 vertical 即可, 设置`alignCenter`属性为 false 可使 `title` 和 `description` 文字左对齐

```html
<div style="height: 300px;">
  <div id="steps3"></div>
</div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#steps3').lyj_steps({
        direction: 'vertical',
        alignCenter: false,
        stepList: [
          {
            title: '步骤一'
          },
          {
            title: '步骤二'
          },
          {
            title: '步骤三'
          }
        ]
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#steps3').lyj_steps({
    direction: 'vertical',
    alignCenter: false,
    stepList: [
      {
        title: '步骤一'
      },
      {
        title: '步骤二'
      },
      {
        title: '步骤三'
      }
    ]
  })
  //DEMO_JS_SHOW_END
</script>
```

:::
