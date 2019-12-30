## 公司、人员、部门自动补全

autoComplugins是一个简单的自动完成功能插件。

使用此插件需要引入以下文件：

```html
<script src="https://front.leyoujia.com/plugins/autoComplugins/autoComplugins.js"></script>
```

### 用法 

:::demo 因为需要登录才能请求成功，这里就不展示具体效果啦。

```html
<div>
	<input class="fl mr5 testCom" type="text" placeholder="请输入公司">
	<input class="fl mr5 testOnlyEmp" type="text" placeholder="请输入人员,仅人员">
	<input class="fl mr5 deptName" type="text" placeholder="请输入部门" disabled="disabled">
	<input class="fl mr5 testEmp" type="text" placeholder="请输入人员">
	<input class="fl mr5 testDept" type="text" placeholder="请输入部门">
</div>
<script>
//DEMO_JS_RUN_START
export default {
  	mounted() {}
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$(function() {
    var options = {
        class: 'aa', //可自定义列表宽，最大高度 zindex, 
        forbidInput: false, //是否可以输入 默认可以输入
        urlPrev: '', //请求接口的前缀 可传定义好的常量
        type: plugEnum.COM, //公司
        onlyAjaxOnce:true,
        localSearchKey:'shortName',
        powerUrl: '', //权限url
        async: true, //请求方式 同步还是异步 默认true异步
        beforeClick: function(obj) { console.log($(obj));
            console.log('beforeClick...'); }, //点击响应前事件
        click: function(obj) { console.log($(obj));
            console.log('click...'); }, //点击事件
        afterClick: function(obj) { console.log($(obj));
            console.log('afterClick...'); }, //点击后事件
    };
    var options1 = {
        class: 'bb', //可自定义列表宽，最大高度 zindex, 
        minlength: 1, //至少输入几个字符开始匹配
        urlPrev: '', //请求接口的前缀 可传定义好的常量
        type: plugEnum.ONLYEMP, //人员
        isLeave: true, //接收是否需要一起查询离职人员信息，默认为false 不查询
        async: true, //请求方式 同步还是异步 默认true异步
        beforeClick: function(obj) { console.log('beforeClick1...'); }, //点击响应前事件
        click: function(obj) { console.log($(obj));
            console.log('click1...'); }, //点击事件
        afterClick: function(obj) { console.log('afterClick1...'); }, //点击后事件
    };
    var options2 = {
        class: 'cc', //可自定义列表宽，最大高度 zindex,
        urlPrev: '', //请求接口的前缀 可传定义好的常量
        type: plugEnum.EMP, //人员+部门
        isLeave: false, //接收是否需要一起查询离职人员信息，默认为false 不查询
        beforeClick: function(obj) { console.log('beforeClick2...'); }, //点击响应前事件
        click: function(obj) { console.log('click2...'); }, //点击事件
        afterClick: function(obj) { console.log('afterClick2...'); }, //点击后事件
    };
    var options3 = {
        urlPrev: '', //请求接口的前缀 可传定义好的常量
        type: plugEnum.DEPT1, //部门
        async: true, //请求方式 同步还是异步 默认true异步
        beforeClick: function(obj) { console.log('beforeClick3...'); }, //点击响应前事件
        click: function(obj) { console.log('click3...'); }, //点击事件
        afterClick: function(obj) { console.log('afterClick3...'); }, //点击后事件
    };
    $('.testCom').autoComplugins(options);
    $('.testOnlyEmp').autoComplugins(options1);
    $('.testEmp').autoComplugins(options2);
    $('.testDept').autoComplugins(options3);
});
//DEMO_JS_SHOW_END
</script>
```

:::