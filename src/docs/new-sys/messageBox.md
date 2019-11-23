## 弹框

artDialog 是一个基于 javascript 编写的对话框组件，它拥有精致的界面与友好的接口。

:::warning
后台通用提示框都用这个，不要再用alert了哟！
:::

使用此弹窗需要引入文件：

```html
<link rel="stylesheet" href="https://front.leyoujia.com/plugins/dialog/ui-dialog.css"/>
<script src="https://front.leyoujia.com/plugins/dialog/dialog-min.js"></script>
```

### 自动关闭提示框

:::demo

```html
<button id="btn1" type="button" class="fl mr10 btn btn-primary">自动关闭提示</button>
<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#btn1').on('click', function() {
      noBtnAutoModalDialog('1.5s 自动关闭提示框', 1500, function() {
        alert('关闭时的回调')
      });
    })
  }
} //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#btn1').on('click', function() {
  noBtnAutoModalDialog('1.5s 自动关闭提示框', 1500, function() {
    alert('关闭时的回调')
  });
})//DEMO_JS_SHOW_END
</script>
```

:::


### 含一个按钮的自动关闭提示框

:::demo

```html
<button id="btn2" type="button" class="fl mr10 btn btn-primary">含一个按钮的自动关闭提示框</button>
<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#btn2').on('click', function() {
      OneBtnAutoModalDialog('3s 自动关闭提示框', 300, '确定', function() {
        console.log('关闭时的回调')
      }, 3000);
    })
  }
} //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#btn2').on('click', function() {
  OneBtnAutoModalDialog('3s 自动关闭提示框', 300, '确定', function() {
    console.log('关闭时的回调')
  }, 3000);
})//DEMO_JS_SHOW_END
</script>
```

:::

### 多个按钮的提示框

:::demo

```html
<button id="btn3" type="button" class="fl mr10 btn btn-primary">多个按钮的提示框</button>
<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#btn3').on('click', function() {
      var btnObj=[{
        value: "确定",
        autofocus: true,//是否高亮
        callback: function(){
          alert('您点击了确定')
        }
      },{
        value: "关闭",
        autofocus: false,
        callback: function(){
          alert('您点击了关闭')
        }
      }];
      btnsDialog('多个按钮的提示框', 360, btnObj);
    })
  }
} //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#btn3').on('click', function() {
  var btnObj=[{
    value: "确定",
    autofocus: true,//是否高亮
    callback: function(){
      alert('您点击了确定')
    }
  },{
    value: "关闭",
    autofocus: false,
    callback: function(){
      alert('您点击了关闭')
    }
  }];
  btnsDialog('多个按钮的提示框', 360, btnObj);
})//DEMO_JS_SHOW_END
</script>
```

:::


:::tip

更多使用方法请[点击这里](http://aui.github.io/artDialog/doc/index.html)
:::
