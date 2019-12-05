## 时间线 Timeline

可视化地呈现时间流信息。

### 基础用法

Timeline 可拆分成多个按照时间戳正序或倒序排列的 item，时间戳是其区分于其他控件的重要特征，使用时注意与 Steps 步骤条等区分。

:::demo

```html
<div id="radiogroup"></div>
<div id="timeline1" style="margin-top: 20px;"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#timeline1').lyj_timeline({
        timelimeItemOptionsList: [
          {
            timestamp: '2019-12-05',
            content: 'timeline 组件开发'
          },
          {
            timestamp: '2019-12-04',
            content: 'steps 组件开发'
          },
          {
            timestamp: '2019-12-03',
            content: 'steps 组件开发'
          },
          {
            timestamp: '2019-12-02',
            content: 'checkbox 组件开发'
          }
        ]
      })
      $('#radiogroup').lyj_radiogroup({
        value: 0,
        name: 'isReverse',
        radioGroup: [
          {
            value: 1,
            label: '倒序'
          },
          {
            value: 0,
            label: '正序'
          }
        ],
        changeHandler: function(val) {
          var timeline = $('#timeline1').data('timeline')
          timeline.reverse = val == 1
        }
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#timeline1').lyj_timeline({
    timelimeItemOptionsList: [
      {
        timestamp: '2019-12-05',
        content: 'timeline 组件开发'
      },
      {
        timestamp: '2019-12-04',
        content: 'steps 组件开发'
      },
      {
        timestamp: '2019-12-03',
        content: 'steps 组件开发'
      },
      {
        timestamp: '2019-12-02',
        content: 'checkbox 组件开发'
      }
    ]
  })
  $('#radiogroup').lyj_radiogroup({
    value: 0,
    name: 'isReverse',
    radioGroup: [
      {
        value: 1,
        label: '倒序'
      },
      {
        value: 0,
        label: '正序'
      }
    ],
    changeHandler: function(val) {
      var timeline = $('#timeline1').data('timeline')
      timeline.reverse = val == 1
    }
  })

  //DEMO_JS_SHOW_END
</script>
```

:::

### 自定义节点

可自定义节点标识的尺寸、颜色或直接使用图标

:::demo

```html
<div id="timeline2"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#timeline2').lyj_timeline({
        timelimeItemOptionsList: [
          {
            timestamp: '2019-12-05',
            content: '自定义颜色',
            color: 'blue'
          },
          {
            timestamp: '2019-12-04',
            content: 'type: primary',
            type: 'primary'
          },
          {
            timestamp: '2019-12-03',
            content: '自定义图标',
            icon: 'iconfont lyj-icon-fire'
          }
        ]
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#timeline1').lyj_timeline({
    timelimeItemOptionsList: [
      {
        timestamp: '2019-12-05',
        content: 'timeline 组件开发'
      },
      {
        timestamp: '2019-12-04',
        content: 'steps 组件开发'
      },
      {
        timestamp: '2019-12-03',
        content: 'steps 组件开发'
      },
      {
        timestamp: '2019-12-02',
        content: 'checkbox 组件开发'
      }
    ]
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### 时间戳位置

当内容在垂直方向上过高时，可将时间戳置于内容之上。

:::demo

```html
<style>
  .lyj-card {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
  }

  .lyj-card.is-always-shadow,
  .lyj-card.is-hover-shadow:focus,
  .lyj-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .lyj-card__body {
    padding: 20px;
  }
</style>
<div id="timeline3"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#timeline3').lyj_timeline({
        timelimeItemOptionsList: [
          {
            placement: 'top',
            timestamp: '2019-12-05',
            content:
              '<div class="lyj-card is-always-shadow"><div class="lyj-card__body"><h4>更新 Github 模板</h4> <p>王小虎 提交于 2019/12/05 20:46</p></div></div>'
          },
          {
            placement: 'top',
            timestamp: '2019-12-04',
            content:
              '<div class="lyj-card is-always-shadow"><div class="lyj-card__body"><h4>更新 Github 模板</h4> <p>王小虎 提交于 2019/12/04 20:46</p></div></div>'
          },
          {
            placement: 'top',
            timestamp: '2019-12-03',
            content:
              '<div class="lyj-card is-always-shadow"><div class="lyj-card__body"><h4>更新 Github 模板</h4> <p>王小虎 提交于 2019/12/03 20:46</p></div></div>'
          }
        ]
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#timeline3').lyj_timeline({
    timelimeItemOptionsList: [
      {
        placement: 'top',
        timestamp: '2019-12-05',
        content:
          '<div class="lyj-card is-always-shadow"><div class="lyj-card__body"><h4>更新 Github 模板</h4> <p>王小虎 提交于 2019/12/05 20:46</p></div></div>'
      },
      {
        placement: 'top',
        timestamp: '2019-12-04',
        content:
          '<div class="lyj-card is-always-shadow"><div class="lyj-card__body"><h4>更新 Github 模板</h4> <p>王小虎 提交于 2019/12/04 20:46</p></div></div>'
      },
      {
        placement: 'top',
        timestamp: '2019-12-03',
        content:
          '<div class="lyj-card is-always-shadow"><div class="lyj-card__body"><h4>更新 Github 模板</h4> <p>王小虎 提交于 2019/12/03 20:46</p></div></div>'
      }
    ]
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### Timeline Attributes

| 参数    | 说明                                             | 类型    | 可选值 | 默认值 |
| :------ | ------------------------------------------------ | ------- | ------ | ------ |
| reverse | 指定节点排序方向，默认为正序，即最近时间排最上方 | boolean | —      | false  |

### Timeline-item Attributes

| 参数          | 说明           | 类型    | 可选值                                      | 默认值 |
| :------------ | -------------- | ------- | ------------------------------------------- | ------ |
| timestamp     | 时间戳         | string  | --                                          | --     |
| hideTimestamp | 是否隐藏时间戳 | boolean | --                                          | false  |
| placement     | 时间戳位置     | string  | top / bottom                                | bottom |
| type          | 节点类型       | string  | primary / success / warning / danger / info | --     |
| color         | 节点颜色       | string  | hsl / hsv / hex / rgb                       | --     |
| icon          | 节点图标       | string  | --                                          | --     |
