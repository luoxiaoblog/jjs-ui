## 指引

zhiyin 是一款指引插件。

使用此插件需要引入以下文件：

```html
<script src="https://front.leyoujia.com/plugins/zhiyin/zhiyin.js"></script>
```

:::demo

```html
<div class="clearfix w100" style="min-width:1008px;max-width:1180px;margin:0 auto;">
	<a href="javascript:;" class="btn btn-white zhiyinBtn">指引</a>
    <div style="margin:80px 0 200px;">
        <div class="linkBtn1" style="float:left;">
            <a href="javascript:;" class="btn btn-primary">跳转链接</a>
        </div>
        <div class="linkBtn2" style="float:right;">
            <a href="javascript:;" class="btn btn-primary">跳转链接2</a>
        </div>
    </div>
</div>

<script>
//DEMO_JS_RUN_START
var zhiyinData = [{
    src: '../../assets/images/zhiyin1.png',
    class: '.linkBtn1',
    width: 392,
    height: 28,
    isFocus: true
}, {
    src: '../../assets/images/zhiyin2.png',
    class: '.linkBtn2',
    width: 392,
    height: 28,
    isFocus: false,
    isFocus: true,
    isLast:true
}];
export default {
  	mounted() {
	    $('.zhiyinBtn').on('click', function() {
	        var options = {
	            zhiyinData: zhiyinData
	        }
	        var zhiyin = new zhiyinModal(options).open();

	    });
  	}
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$(function() {
	var zhiyinData = [{
        src: '../../assets/images/zhiyin2.png',
        class: '.linkBtn1',
        width: 392,
        height: 28,
        isFocus: true
    }, {
        src: '../../assets/images/zhiyin2.png',
        class: '.linkBtn2',
        width: 392,
        height: 28,
        isFocus: false,
        isFocus: true,
        isLast:true
    }];

    $('.zhiyinBtn').on('click', function() {
        var options = {
            zhiyinData: zhiyinData
        }
        var zhiyin = new zhiyinModal(options).open();

    });
});
//DEMO_JS_SHOW_END
</script>
```

:::
