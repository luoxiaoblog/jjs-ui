## 富文本框 WangEditor

wangEditor —— 轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器。

引入文件：

```html
<script src="//unpkg.com/wangeditor/release/wangEditor.min.js"></script>
```

### 基本使用

:::demo

```html
<div class="clearfix mb20">
  <button type="button" id="btn1" class="btn btn-white fl mr10">
    禁止编辑
  </button>
  <button type="button" id="btn2" class="btn btn-white fl mr10">
    允许编辑
  </button>
</div>
<div id="div1"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      var E = window.wangEditor
      var editor = new E('#div1')
      editor.create()

      $('#btn1').click(function() {
        // 禁用编辑功能
        editor.$textElem.attr('contenteditable', false)
      })

      $('#btn2').click(function() {
        // 开启编辑功能
        editor.$textElem.attr('contenteditable', true)
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var E = window.wangEditor
  var editor = new E('#div1')
  editor.create()

  $('#btn1').click(function() {
    // 禁用编辑功能
    editor.$textElem.attr('contenteditable', false)
  })

  $('#btn2').click(function() {
    // 开启编辑功能
    editor.$textElem.attr('contenteditable', true)
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### 内容处理

:::demo

```html
<div class="clearfix mb20">
  <button type="button" id="btn3" class="btn btn-white fl mr10">
    设置内容
  </button>
  <button type="button" id="btn4" class="btn btn-white fl mr10">
    追加内容
  </button>
  <button type="button" id="btn5" class="btn btn-white fl mr10">
    清空内容
  </button>
  <button type="button" id="btn6" class="btn btn-white fl mr10">
    读取文本
  </button>
  <button type="button" id="btn7" class="btn btn-white fl mr10">
    读取HTML
  </button>
</div>
<div id="div2"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      var E = window.wangEditor
      var editor = new E('#div2')
      editor.create()

      $('#btn3').click(function() {
        editor.txt.html('<p>用 JS 设置的内容</p>')
      })

      $('#btn4').click(function() {
        editor.txt.append('<p>追加的内容</p>')
      })

      $('#btn5').click(function() {
        editor.txt.clear()
      })

      $('#btn6').click(function() {
        alert(editor.txt.text())
      })

      $('#btn7').click(function() {
        alert(editor.txt.html())
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var E = window.wangEditor
  var editor = new E('#div2')
  editor.create()

  $('#btn3').click(function() {
    editor.txt.html('<p>用 JS 设置的内容</p>')
  })

  $('#btn4').click(function() {
    editor.txt.append('<p>追加的内容</p>')
  })

  $('#btn5').click(function() {
    editor.txt.clear()
  })

  $('#btn6').click(function() {
    alert(editor.txt.text())
  })

  $('#btn7').click(function() {
    alert(editor.txt.html())
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### 配置 onchange 函数

配置 onchange 函数之后，用户操作（鼠标点击、键盘打字等）导致的内容变化之后，会自动触发 onchange 函数执行。

但是，用户自己使用 JS 修改了 div3 的 innerHTML，不会自动触发 onchange 函数，此时你可以通过执行 `editor.change()`来手动触发 onchange 函数的执行。

:::demo

```html
<p>手动触发 onchange 函数执行</p>
<button id="btn8" type="button" class="btn btn-white mb20">change</button>
<div id="div3">
  <p>欢迎使用 wangEditor 富文本编辑器</p>
</div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      var E = window.wangEditor
      var editor = new E('#div3')
      editor.customConfig.onchange = function(html) {
        // html 即变化之后的内容
        alert(html)
      }
      editor.create()

      $('#btn8').on('click', function() {
        editor.txt.append('<p>追加的内容</p>')
        // 如果未配置 editor.customConfig.onchange，则 editor.change 为 undefined
        editor.change && editor.change()
      })
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var E = window.wangEditor
  var editor = new E('#div3')
  editor.customConfig.onchange = function(html) {
    // html 即变化之后的内容
    alert(html)
  }
  editor.create()

  $('#btn8').on('click', function() {
    editor.txt.append('<p>追加的内容</p>')
    // 如果未配置 editor.customConfig.onchange，则 editor.change 为 undefined
    editor.change && editor.change()
  })
  //DEMO_JS_SHOW_END
</script>
```

:::

### 配置 onfocus 与 onblur

配置 onfocus 函数之后，用户点击富文本区域会触发 onfocus 函数执行。

配置 onblur 函数之后，如果当前有手动获取焦点的富文本并且鼠标点击富文本以外的区域，则会触发 onblur 函数执行。

:::demo

```html
<div id="div4"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      var E = window.wangEditor
      var editor = new E('#div4')
      editor.customConfig.onfocus = function() {
        $.lyj_message.message('onfocus')
      }
      editor.customConfig.onblur = function(html) {
        $.lyj_message.message('onblur')
      }
      editor.create()
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var E = window.wangEditor
  var editor = new E('#div4')
  editor.customConfig.onfocus = function() {
    $.lyj_message.message('onfocus')
  }
  editor.customConfig.onblur = function(html) {
    $.lyj_message.message('onblur')
  }
  editor.create()
  //DEMO_JS_SHOW_END
</script>
```

:::

### 配置编辑区域的 z-index

编辑区域的 z-index 默认为 10000，可自定义修改，代码配置如下。需改之后，编辑区域和菜单的 z-index 会同时生效。

:::demo

```html
<div id="div5"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      var E = window.wangEditor
      var editor = new E('#div5')
      editor.customConfig.zIndex = 100
      editor.create()
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var E = window.wangEditor
  var editor = new E('#div5')
  editor.customConfig.zIndex = 100
  editor.create()
  //DEMO_JS_SHOW_END
</script>
```

:::

### 配置表情

支持图片格式和 emoji ，可通过 `editor.customConfig.emotions` 配置。注意看代码示例中的注释：

:::demo

```html
<div id="div6"></div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      var E = window.wangEditor
      var editor = new E('#div6')

      editor.customConfig.emotions = [
        {
          title: '默认',
          type: 'image',
          content: [
            {
              alt: '[坏笑]',
              src:
                'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
            },
            {
              alt: '[舔屏]',
              src:
                'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
            }
          ]
        },
        {
          title: 'emoji',
          type: 'emoji',
          content: ['😀', '😃', '😄', '😁', '😆']
        }
      ]

      editor.create()
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  var E = window.wangEditor
  var editor = new E('#div6')

  // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
  editor.customConfig.emotions = [
    {
      // tab 的标题
      title: '默认',
      // type -> 'emoji' / 'image'
      type: 'image',
      // content -> 数组
      content: [
        {
          alt: '[坏笑]',
          src:
            'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
        },
        {
          alt: '[舔屏]',
          src:
            'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
        }
      ]
    },
    {
      // tab 的标题
      title: 'emoji',
      // type -> 'emoji' / 'image'
      type: 'emoji',
      // content -> 数组
      content: ['😀', '😃', '😄', '😁', '😆']
    }
  ]

  editor.create()
  //DEMO_JS_SHOW_END
</script>
```

:::

- 官网：<a href="http://www.wangEditor.com" target="_blank">www.wangEditor.com</a>
- 文档：<a href="http://www.kancloud.cn/wangfupeng/wangeditor3/332599" target="_blank">www.kancloud.cn/wangfupeng/wangeditor3/332599</a>
- 源码：<a href="github.com/wangfupeng1988/wangEditor" target="_blank">github.com/wangfupeng1988/wangEditor</a>
