## 图片上传

uploadifive 是一款支持多文件上传的插件。

使用此插件需要引入以下文件：

```html
<script src="https://front.leyoujia.com/plugins/uploadifive/lyj_plug_upload.js"></script>
```

### 用法
说明几点：1.obj里面的参数根据自己的需求参照参数详情列表里面自主选择。需要的就填写，不需要的可以不用写。 2.事件也是一样，需要什么就传什么。 3.除了上传七牛云需要传递url，projName,type用于计算token之外。其他的上传都不需要传此值

:::demo （需要再测试环境才能运用，不然token会报错）

```html
<div>
	第一个：<input name="file" id="upload"/> <input type="button" id="uploadBtn" value="点击上传" /><br/>
	<img src="" width="40px" height="40px" id="myImage" style="display: none"/>
	第二个：<input name="file" id="upload2"/><br/>
	第三个：<input name="file" class="testUpload" /><br/>
	第四个：<input name="file" class="testUpload" queueID="testUpload1" /><br/>
	<div id="testUpload0"></div>
	<div id="testUpload1"></div>
</div>
<script>
//DEMO_JS_RUN_START
LyjPlugUpload.upload({
    selector:["#upload",".testUpload"],
    serviceName : 'abc',
    auto : false,
    onUploadComplete : function(file,data,uploadInfo,uploadObj,bindAttr){
        $('#myImage').attr('src',uploadInfo.qiniuDomain+data.key);
        $('#myImage').show();
        console.log(data,uploadInfo,uploadObj,bindAttr);
    },
    onError : function(errorCode,errorInfo,errorObj){
        console.log(errorCode);
        console.log(errorInfo);
    }
    //position : LyjPlugUpload.POSITION_LOCAL
});
export default {
  	mounted() {
  		var that = this;
		$('#upload2').lyjUpload({
		    auto : true,
		    serviceName : 'abc',
		    fileType : 'image/*',
		    buttonText : '添加附件2',
		    onUploadComplete : function(file,data,uploadInfo,uploadObj){
		        console.log(uploadInfo,data,uploadObj);
		    },
		    onError : function(errorCode,errorInfo,errorObj){
		        console.log(errorCode);
		        console.log(errorInfo);
		    }
		});
		$("#uploadBtn").click(function(){
  			that.sdUpload("upload")
  		})
	},
	methods: {
		sdUpload(){
			//LyjPlugUpload.manualUpload('upload');
    		$('.testUpload').manualUpload();
		}
	}
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
//初始化上传组件,手动上传
LyjPlugUpload.upload({
    selector:["#upload",".testUpload"],
    serviceName : 'abc',
    auto : false,
    onUploadComplete : function(file,data,uploadInfo,uploadObj,bindAttr){
        $('#myImage').attr('src',uploadInfo.qiniuDomain+data.key);
        $('#myImage').show();
        console.log(data,uploadInfo,uploadObj,bindAttr);
    },
    onError : function(errorCode,errorInfo,errorObj){
        console.log(errorCode);
        console.log(errorInfo);
    }
    //position : LyjPlugUpload.POSITION_LOCAL
});
//手动触发上传
function sdUpload(){
    //LyjPlugUpload.manualUpload('upload');
    $('.testUpload').manualUpload();
};

//jq绑定
$('#upload2').lyjUpload({
    auto : true,
    serviceName : 'abc',
    fileType : 'image/*',
    buttonText : '添加附件2',
    onUploadComplete : function(file,data,uploadInfo,uploadObj){
        console.log(uploadInfo,data,uploadObj);
    },
    onError : function(errorCode,errorInfo,errorObj){
        console.log(errorCode);
        console.log(errorInfo);
    }
});
//DEMO_JS_SHOW_END
</script>
```

:::


### 视频上传

用于上传视频到百度云bce-box-uploader

使用此插件需要引入以下文件：

:::warning
注意：js的引入顺序，并且要引入dialog弹框样式。
:::

```html
<link rel="stylesheet" type="text/css" href="https://front.leyoujia.com/plugins/dialog/ui-dialog.css">
<script src="https://front.leyoujia.com/plugins/dialog/dialog-min.js"></script>
<script src="https://jjswlkjjs.gz.bcebos.com/bce-bos-uploader.js"></script>
<script src="https://front.leyoujia.com/plugins/uploadifive/bosParams.js"></script>
```

### 用法

注意：js的引入顺序，并且要引入dialog弹框样式。

:::demo

```html
<style>
.artlice-upload input[type='file'] {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
.artlice-upload b{
	line-height: 28px;
}
</style>

<div class="fl relative">		
	<form id="video" method="post" enctype="multipart/form-data">
	    <input type="text" class="fl mr10 videoName">
	    <div class="fl artlice-upload">
	        <button type="button" class="fl btn btn-primary">选择视频</button>
	        <b style="color: #635a5a;">（注：目前仅支持mp4格式，大小200M以内的视频）</b>
	        <input type="file" name="file" id="file">
	    </div>
	    <button type="button" class="fl btn btn-primary" style="display: none" onclick="uploadFile(this);">上传视频</button>
	</form>
</div>

<script>
//DEMO_JS_RUN_START
//百度sdk参数 
var _accessKeyId = 'f634d22b558811e8a482bd7029253888';
var _secretAccessKey = '285d90c4ffc54a8bac17d911d3a73b1b';
var _sessionToken = 'MjUzZjQzNTY4OTE0NDRkNjg3N2E4YzJhZTc4YmU5ZDh8AAAAAHwBAADg7DjMNBAAngA/tIxv61QVlgK1HWWUOSfaVxIdijRCsHbdpRF8i4juyLAGv51GGVssIqmKGGKfZSvU99kg+TFGhpxPqKyePeC3Sx79EV6K33B3HzHjIPt5RzDTsA/3mphXv6awWmjom0+7DFhu+8vtlCon7zd2evO4eBwYZhezgtvbPrvMdHASaeR0s8AMQaKCu6otZ+9lxVaNP9kytelE8ntldNZqCJlGSr/NipPf85qwz4BiCavz15W0SqaWGjE7fynJJ85pzZEnOEAfmw7EN+RJx6rfRgIGhZaYyU/f5HUhSVMxXl8qWbLNnlm+oM8=';
var _bucket = 'jjswlkjssk';
var bosClient = bosParams(_accessKeyId, _secretAccessKey, _sessionToken, _bucket);
$(function(){
	$(".artlice-upload").on("change", function() {
    	var file = $(this).find("input");
	    var localVideo = file[0].files;
	    if (localVideo.length > 0) {
	        var fileName = localVideo[0].name;
	        if (file != "") {
	            $(this).prev().val(fileName); //将值在Input框显示
	            $(this).hide();
	            $(this).siblings("button").show();
	        }
	    } else {
	        noBtnAutoModalDialog("请先选择要上传的视频！");
	        return;
	    }
	    var flag = checkFile('file', ['mp4'], 200);
	    if (flag) {
	        $("#file").val("");
	        $(this).siblings("input").val(""); //在Input框显示清空
	        $(this).show();
	        $(this).siblings("button").hide();
	        return;
	    }
	});
})

export default {
  	mounted() {
  		
		/*bosParams.js*/ 
		//上传视频改变
		$(".artlice-upload").on("change", function() {
		    var file = $(this).find("input");
		    var localVideo = file[0].files;
		    if (localVideo.length > 0) {
		        var fileName = localVideo[0].name;
		        if (file != "") {
		            $(this).prev().val(fileName); //将值在Input框显示
		            $(this).hide();
		            $(this).siblings("button").show();
		        }
		    } else {
		        noBtnAutoModalDialog("请先选择要上传的视频！");
		        return;
		    }
		    var flag = checkFile('file', ['mp4'], 200);
		    if (flag) {
		        $("#file").val("");
		        $(this).siblings("input").val(""); //在Input框显示清空
		        $(this).show();
		        $(this).siblings("button").hide();
		        return;
		    }
		});
	},
	methods: {
		uploadFile(obj) {
		    var ele = $(obj);
		    var flag = checkFile("file", ['mp4'], 200);
		    if (flag) {
		        ele.siblings(".artlice-upload").show();
		        ele.hide();
		        return;
		    }
		    if (confirm("确定上传此视频？")) { //调用
		        // showLoading('视频正在上传中，请稍候。。。', '');
		        // 获取要上传的文件
		        var file = $("#file")[0].files[0]; // 保存到bos时的key，您可更改，默认以文件名作为key
		        //var key = file.name;
		        var index = file.name.lastIndexOf(".");
		        var ext = file.name.toLowerCase().substr(index + 1);
		        var timestamp = new Date().getTime();
		        // 保存的文件名
		        var key = timestamp + "." + ext;
		        var blob = file;
		        var ext = key.split(/\./g).pop();
		        var mimeType = baidubce.sdk.MimeType.guess(ext);
		        if (/^text\//.test(mimeType)) {
		            mimeType += '; charset=UTF-8';
		        }
		        var options = {
		            'Content-Type': mimeType
		        };
		        bosClient.putObjectFromBlob(_bucket, key, blob, options)
		            .then(function(res) {
		                // 上传完成，添加您的代码
		                var videoUrl = 'https://gz.bcebos.com/' + key;
		                $("#file").val("");
		                ele.siblings(".artlice-upload").show();
		                ele.hide();
		                noBtnAutoModalDialog("上传成功");
		            })
		            .catch(function(err) {
		                console.error(err); // 上传失败，添加您的代码
		                noBtnAutoModalDialog("视频上传失败，请重新上传!");
		            });

		        bosClient.on('progress', function(evt) {
		            // 监听上传进度
		            if (evt.lengthComputable) {
		                // 添加您的代码
		                var percentage = (evt.loaded / evt.total) * 100;
		                console.log('上传中，已上传了' + percentage + '%');
		            }
		        });
		    }
		}
	}
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
//百度sdk参数 
var _accessKeyId = 'f634d22b558811e8a482bd7029253888';
var _secretAccessKey = '285d90c4ffc54a8bac17d911d3a73b1b';
var _sessionToken = 'MjUzZjQzNTY4OTE0NDRkNjg3N2E4YzJhZTc4YmU5ZDh8AAAAAHwBAADg7DjMNBAAngA/tIxv61QVlgK1HWWUOSfaVxIdijRCsHbdpRF8i4juyLAGv51GGVssIqmKGGKfZSvU99kg+TFGhpxPqKyePeC3Sx79EV6K33B3HzHjIPt5RzDTsA/3mphXv6awWmjom0+7DFhu+8vtlCon7zd2evO4eBwYZhezgtvbPrvMdHASaeR0s8AMQaKCu6otZ+9lxVaNP9kytelE8ntldNZqCJlGSr/NipPf85qwz4BiCavz15W0SqaWGjE7fynJJ85pzZEnOEAfmw7EN+RJx6rfRgIGhZaYyU/f5HUhSVMxXl8qWbLNnlm+oM8=';
var _bucket = 'jjswlkjssk';
bosClient = bosParams(_accessKeyId, _secretAccessKey, _sessionToken, _bucket);
/*bosParams.js*/ 
//上传视频改变
$(".artlice-upload").on("change", function() {
    var file = $(this).find("input");
    var localVideo = file[0].files;
    if (localVideo.length > 0) {
        var fileName = localVideo[0].name;
        if (file != "") {
            $(this).prev().val(fileName); //将值在Input框显示
            $(this).hide();
            $(this).siblings("button").show();
        }
    } else {
        noBtnAutoModalDialog("请先选择要上传的视频！");
        return;
    }
    var flag = checkFile('file', ['mp4'], 200);
    if (flag) {
        $("#file").val("");
        $(this).siblings("input").val(""); //在Input框显示清空
        $(this).show();
        $(this).siblings("button").hide();
        return;
    }
});
function uploadFile(obj) {
    var ele = $(obj);
    var flag = checkFile("file", ['mp4'], 200);
    if (flag) {
        ele.siblings(".artlice-upload").show();
        ele.hide();
        return;
    }
    if (confirm("确定上传此视频？")) { //调用
        // showLoading('视频正在上传中，请稍候。。。', '');
        // 获取要上传的文件
        var file = $("#file")[0].files[0]; // 保存到bos时的key，您可更改，默认以文件名作为key
        //var key = file.name;
        var index = file.name.lastIndexOf(".");
        var ext = file.name.toLowerCase().substr(index + 1);
        var timestamp = new Date().getTime();
        // 保存的文件名
        var key = timestamp + "." + ext;
        var blob = file;
        var ext = key.split(/\./g).pop();
        var mimeType = baidubce.sdk.MimeType.guess(ext);
        if (/^text\//.test(mimeType)) {
            mimeType += '; charset=UTF-8';
        }
        var options = {
            'Content-Type': mimeType
        };
        bosClient.putObjectFromBlob(_bucket, key, blob, options)
            .then(function(res) {
                // 上传完成，添加您的代码
                var videoUrl = 'https://gz.bcebos.com/' + key;
                $("#file").val("");
                ele.siblings(".artlice-upload").show();
                ele.hide();
                noBtnAutoModalDialog("上传成功");
            })
            .catch(function(err) {
                console.error(err); // 上传失败，添加您的代码
                noBtnAutoModalDialog("视频上传失败，请重新上传!");
            });

        bosClient.on('progress', function(evt) {
            // 监听上传进度
            if (evt.lengthComputable) {
                // 添加您的代码
                var percentage = (evt.loaded / evt.total) * 100;
                console.log('上传中，已上传了' + percentage + '%');
            }
        });
    }
}
//DEMO_JS_SHOW_END
</script>
```

:::

