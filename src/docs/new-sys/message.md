## 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基本用法

从顶部出现，3 秒后自动消失。用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo 调用 `$.lyj_message[type](option)` 方法即可弹出消息提示

```html
<button id="btn1" type="button" class="btn btn-white fl mr20">成功</button>
<button id="btn2" type="button" class="btn btn-white fl mr20">警告</button>
<button id="btn3" type="button" class="btn btn-white fl mr20">消息</button>
<button id="btn4" type="button" class="btn btn-white fl mr20">错误</button>

<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#btn1').click(function() {
        $.lyj_message.success('恭喜你，这是一条成功消息')
      })
      $('#btn2').click(function() {
        $.lyj_message.warning('警告哦，这是一条警告消息')
      })
      $('#btn3').click(function() {
        $.lyj_message.info('这是一条消息提示')
      })
      $('#btn4').click(function() {
        $.lyj_message.error('错了哦，这是一条错误消息')
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#btn1').click(function() {
    $.lyj_message.success('恭喜你，这是一条成功消息')
  })
  $('#btn2').click(function() {
    $.lyj_message.warning('警告哦，这是一条警告消息')
  })
  $('#btn3').click(function() {
    $.lyj_message.info('这是一条消息提示')
  })
  $('#btn4').click(function() {
    $.lyj_message.error('错了哦，这是一条错误消息')
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### 使用 HTML 片段

支持传入 HTML 片段

:::demo `msg`可传入 HTML

```html
<button id="btn5" type="button" class="btn btn-white fl mr20">
  使用HTML片段
</button>

<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#btn5').click(function() {
        $.lyj_message.success(
          '恭喜你，这是一条<b style="color: red">成功消息</b>'
        )
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#btn5').click(function() {
    $.lyj_message.success(
      '恭喜你，这是一条&lt;b style="color: red"&gt;成功消息&lt;/b&gt;'
    )
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### 可关闭

可以添加关闭按钮。

:::demo `showClose`属性可设置是否展示关闭按钮

```html
<button id="btn6" type="button" class="btn btn-white fl mr20">成功</button>
<button id="btn7" type="button" class="btn btn-white fl mr20">警告</button>
<button id="btn8" type="button" class="btn btn-white fl mr20">消息</button>
<button id="btn9" type="button" class="btn btn-white fl mr20">错误</button>

<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#btn6').click(function() {
        $.lyj_message.message({
          type: 'success',
          msg: '恭喜你，这是一条成功消息',
          showClose: true
        })
      })
      $('#btn7').click(function() {
        $.lyj_message.message({
          type: 'warning',
          msg: '警告哦，这是一条警告消息',
          showClose: true
        })
      })
      $('#btn8').click(function() {
        $.lyj_message.message({
          type: 'info',
          msg: '这是一条消息提示',
          showClose: true
        })
      })
      $('#btn9').click(function() {
        $.lyj_message.message({
          type: 'error',
          msg: '错了哦，这是一条错误消息',
          showClose: true
        })
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#btn6').click(function() {
    $.lyj_message.message({
      type: 'success',
      msg: '恭喜你，这是一条成功消息',
      showClose: true
    })
  })
  $('#btn7').click(function() {
    $.lyj_message.message({
      type: 'warning',
      msg: '警告哦，这是一条警告消息',
      showClose: true
    })
  })
  $('#btn8').click(function() {
    $.lyj_message.message({
      type: 'info',
      msg: '这是一条消息提示',
      showClose: true
    })
  })
  $('#btn9').click(function() {
    $.lyj_message.message({
      type: 'error',
      msg: '错了哦，这是一条错误消息',
      showClose: true
    })
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### 不自动关闭

不自动关闭的消息提示

:::demo `duration`属性值为 0 时，提示不会自动关闭

```html
<button id="btn10" type="button" class="btn btn-white fl mr20">成功</button>

<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      $('#btn10').click(function() {
        $.lyj_message.message({
          type: 'info',
          msg: '这是一条不会自动关闭的消息',
          showClose: true,
          duration: 0
        })
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#btn10').click(function() {
    $.lyj_message.message({
      type: 'info',
      msg: '这是一条不会自动关闭的消息',
      showClose: true,
      duration: 0
    })
  })
  //DEMO_JS_SHOW_END
</script>
```

:::
