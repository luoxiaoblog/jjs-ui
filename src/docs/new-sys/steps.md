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
