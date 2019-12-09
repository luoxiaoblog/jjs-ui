## 对话框

新系统对话框是Bootstrap提供的模态框插件。

模态框经过了优化，更加灵活，以弹出对话框的形式出现，具有最小和最实用的功能集。

:::warning
务必将模态框的 HTML 代码放在文档的最高层级内（也就是说，尽量作为 body 标签的直接子元素），以避免其他组件影响模态框的展现和/或功能。
:::

使用此插件需要引入以下文件：

```html
<link rel="stylesheet" href="https://front.leyoujia.com/css/bootstrap.min.css">
<link rel="stylesheet" href="https://front.leyoujia.com/css/bootstrap-reset.css">
<script src="https://front.leyoujia.com/js/jquery.js"></script>
<script src="https://front.leyoujia.com/js/bootstrap.min.js"></script>
```

### 通过data属性

:::demo 不需写 JavaScript 代码也可激活模态框。通过在一个起控制器作用的元素（例如：按钮）上添加 data-toggle="modal" 属性，或者 data-target="#foo" 属性，再或者 href="#foo" 属性，用于指向被控制的模态框。

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModalPublic">弹出对话框</button>

<!-- Modal -->
<div class="modal fade" id="myModalPublic" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h5>公共弹窗</h5>
            </div>
            <div class="modal-body">
                <form class="">
                    <div class="clearfix display-box">
                        <div class="box-one text-right c333 mr5 line-28" style="min-width:42px;max-width:42px;">内容：</div>
                        <div class="box-nine pt5">
                            <div class="clearfix relative w100">
                                <textarea class="textareaEdit w100" data-max="500" placeholder="请填写内容(非必填)..."></textarea>
                                <span class="textareaTxt c666">您还可输入<em class="red">500</em>字</span>
                            </div>
                        </div>
                    </div>
                    <div class="footbtn text-center mt20">
                        <button class="btn btn-primary" data-dismiss="modal" aria-label="Close">确定</button>
                        <button class="btn btn-white" data-dismiss="modal" aria-label="Close">关闭</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
```

:::

### 通过 JavaScript 调用

:::demo 只需一行 JavaScript 代码，即可通过元素的 id `myModal` 调用模态框：

```html
<!-- Button trigger modal -->
<button id="tirggerModal" type="button" class="btn btn-primary">弹出对话框</button>

<!-- Modal -->
<div class="modal fade" id="myModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h5>公共弹窗</h5>
            </div>
            <div class="modal-body">
                <form class="">
                    <div class="clearfix display-box">
                        <div class="box-one text-right c333 mr5 line-28" style="min-width:42px;max-width:42px;">内容：</div>
                        <div class="box-nine pt5">
                            <div class="clearfix relative w100">
                                <textarea class="textareaEdit w100" data-max="500" placeholder="请填写内容(非必填)..."></textarea>
                                <span class="textareaTxt c666">您还可输入<em class="red">500</em>字</span>
                            </div>
                        </div>
                    </div>
                    <div class="footbtn text-center mt20">
                        <button class="btn btn-primary" data-dismiss="modal" aria-label="Close">确定</button>
                        <button class="btn btn-white" data-dismiss="modal" aria-label="Close">关闭</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#tirggerModal').click(function () {
      $('#myModal').modal();
    });
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#tirggerModal').click(function () {
  // 调用model方法时可传入参数对象，参考“参数”一节
  $('#myModal').modal();
});
//DEMO_JS_SHOW_END
</script>
```

:::

### 参数

可以将选项通过 data 属性或 JavaScript 代码传递。对于 data 属性，需要将参数名称放到 `data-` 之后，例如 `data-backdrop=""`。

| 名称                             | 类型                     |默认值                     |描述                     |
| :----------------------------- | ------------------------ |------------------------ |------------------------ |
| backdrop        | boolean 或 字符串 'static' | true | Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.|
| keyboard                  | boolean	         | true | 键盘上的 esc 键被按下时关闭模态框。 |
| show                   | boolean     | true | 模态框初始化之后就立即显示出来。 |

### 方法

#### .modal(options)

将页面中的某块内容作为模态框激活。接受可选参数 `object`。

```javascript
$('#myModal').modal({
  keyboard: false
})
```

#### .modal('toggle')

手动打开或关闭模态框。在模态框显示或隐藏之前返回到主调函数中（也就是，在触发 shown.bs.modal 或 hidden.bs.modal 事件之前）。

```javascript
$('#myModal').modal('toggle')
```

#### .modal('show')

手动打开模态框。在模态框显示之前返回到主调函数中 （也就是，在触发 shown.bs.modal 事件之前）。

```javascript
$('#myModal').modal('show')
```

#### .modal('hide')

手动隐藏模态框。在模态框隐藏之前返回到主调函数中 （也就是，在触发 hidden.bs.modal 事件之前）。

```javascript
$('#myModal').modal('hide')
```

#### .modal('handleUpdate')

Readjusts the modal's positioning to counter a scrollbar in case one should appear, which would make the modal jump to the left.

Only needed when the height of the modal changes while it is open.

```javascript
$('#myModal').modal('handleUpdate')
```

### 事件

Bootstrap 的模态框类提供了一些事件用于监听并执行你自己的代码。

All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

| 事件类型  | 描述         |
| :------------------| ------------------------ |
| show.bs.modal | `show` 方法调用之后立即触发该事件。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 `relatedTarget` 属性进行访问。 |
| shown.bs.modal | 此事件在模态框已经显示出来（并且同时在 CSS 过渡效果完成）之后被触发。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 `relatedTarget` 属性进行访问。 |
| hide.bs.modal | `hide` 方法调用之后立即触发该事件。 |
| hidden.bs.modal	 | 此事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发。 |

```javascript
$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
})
```
