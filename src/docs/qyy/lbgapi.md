## 乐办公 API

| 方法名                          | 描述                 |
| :----------------------------   | -------------------- |
| [request](#request)             | 接口请求             |
| [webReload](#webreload)         | 刷新                 |
| [loadBarTitle](#loadbartitle)   | 设置页面顶部标题     |
| [loadbarColor](#loadbarcolor)   | 页面顶部导航栏背景色 |
| [webAppBack](#webappback)       | 返回                 |
| [minAppHome](#minapphome)       | 返回                 |
| [loadUserInfo](#loaduserinfo)   | 获取用户信息         |
| [loadLocalCity](#loadlocalcity) | 获取城市信息         |
| [loadSubCitiesByCode](#loadsubcitiesbycode) | 获取城市区域列表  |
| [loadLocation](#loadlocation)   | 获取当前经纬度       |
| [webAppTel](#webapptel)         | 拨打电话             |
| [webAppSMG](#webappsmg)         | 发送短信             |
| [minAppShare](#minappshare)     | 分享                 |
| [webtoChat](#webtochat)         | 乐聊一对一聊天       |
| [toImSendMsg](#toimsendmsg)     | 乐聊一对一聊天(带内容参数) |
| [imWithAgent](#imwithagent)     | IM 一对一聊天咨询    |
| [imConsulting](#imconsulting)   | IM 抢单              |
| [showAlbum](#showalbum)         | 浏览相册             |
| [toMoviePlayer](#tomovieplayer) | 视频播放             |
| [toTargetVC](#totargetvc)       | 通用的跳转方法       |
| [openApp](#openapp)             | 打开支付宝           |
| [screenshot](#screenshot)       | 截屏当前页面         |
| [loadDate](#loaddate)           | 获取时间(无效方法)   |
| [loadAddress](#loadaddress)     | 获取省市区(无效方法) |
| [loadPhoto](#loadphoto)         | 拍照(无效方法)       |
| [loadFile](#loadfile)           | 浏览文件(无效方法)   |
| [webAppShare](#webappshare)     | 分享 (没有这个方法)  |
| [goToXfDetail](#gotoxfdetail)   | 跳转到新房详情(没有这个方法) |
| [goToVRDetail](#gotovrdetail)   | 跳转 vr 地址(没有这个方法) |


```javascript
// 全局变量
var ua = navigator.userAgent.toLowerCase()
```

### request

接口请求

```javascript
/**
* 接口请求
* url: 请求地址 生产https://i.leyoujia.com
* params：请求参数
* header： 请求头
* callback：请求结束后回调名
**/
function request(url, params, header, callback) {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.request.postMessage({
                'url': url,
                'params': params,
                'header': header,
                'callback': callback
            });
        } else if (/android/.test(ua)) {
            window.injs.request(url, params, header, callback);

            //安卓包含请求头一些信息 
            // window.injs.minAppaicpPost(url, params, header, serverCode, methodCode, apiVersion, callback); 
        }
    } catch (e) {
        alert(e);
    }
}

request()
```

### webReload

刷新

```javascript
/**
 * 进入页面是否要重新请求
 * params 1:刷新  0：不刷新
 */
function webReload(params) {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.webReload.postMessage({
                'webReload': params
            });
        } else if (/android/.test(ua)) {
            window.injs.webReload(params);
        }
    } catch (e) {
        alert(e);
    }
}

webReload()
```

### loadBarTitle

设置页面顶部标题

```javascript
/* 页面顶部标题 */
function loadBarTitle(title) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadBarTitle.postMessage({
        title: title
      })
    } else if (/android/.test(ua)) {
      window.injs.loadBarTitle(title)
    }
  } catch (e) {}
}

loadBarTitle('title')
```

### loadbarColor

页面顶部导航栏背景色

```javascript
/**
* 设置头部颜色（ios包括手机最顶部，安卓不包括）
* color: #ff0000
**/
function loadbarColor(color) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadbarColor.postMessage({
        color: color
      })
    } else if (/android/.test(ua)) {
      window.injs.loadbarColor(color)
    }
  } catch (e) {}
}

loadbarColor('#ff0000')
```

### webAppBack

返回

```javascript
/**
 * 安卓：返回上一页
 * ios：返回index页，如果在index页，刷新当前页面
 */
function webAppBack() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.webAppBack.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.webAppBack('')
    }
  } catch (e) {}
}

webAppBack()
```

### minAppHome

返回

```javascript
/**
 * 安卓：返回index页面；如果本来就在index页面，则返回上一页
 * ios：有这个方法，但是没作用
 */
function minAppHome() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.minAppHome.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.minAppHome('')
    }
  } catch (e) {}
}

minAppHome()
```

### loadUserInfo

获取用户信息

```javascript
/**
 * 获取用户信息
 */
function loadUserInfo() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadUserInfo.postMessage({
        key: 'undefined'
      })
    } else if (/android/.test(ua)) {
      window.injs.loadUserInfo()
    }
  } catch (e) {
    console.log(e)
  }
}

loadUserInfo()

/**
 * loadUserInfo 的回调
 * 返回参数：workerId,workerName,cityCode,headPic(不带域名)
 */
function setUserInfo(info) {
  console.log(info)
}
```

### loadLocalCity

获取当前城市

```javascript
/**
 *  获取当前城市(对应app首页城市)
 *  callback 成功回调名  
 *  返回参数：cityName,cityCode
*/
function loadLocalCity(callback) {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.loadLocalCity.postMessage({
                'callback': callback
            });
        } else if (/android/.test(ua)) {
            window.injs.loadLocalCity(callback);
        }
    } catch (e) {
        alert(e);
    }
}

loadLocalCity()
```

### loadSubCitiesByCode

获取城市区域列表

```javascript
/**
 *  获取城市区域列表
 *  code: 城市cityCode
 *  callback: 成功回调名  
 *  返回参数：{datas: []}
*/
function loadSubCitiesByCode(code, callback) {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.loadSubCitiesByCode.postMessage({
                'code': code,
                'callback': callback
            });
        } else if (/android/.test(ua)) {
            window.injs.loadSubCitiesByCode(code, callback);
        }
    } catch (e) {
        alert(e);
    }
}

loadSubCitiesByCode('000002','')
```

### loadLocation

获取当前经纬度

```javascript
/**
 *  获取当前经纬度
 *  没有参数,回调名setLocation
*/
function loadLocation() {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.loadLocation.postMessage({});
        } else if (/android/.test(ua)) {
            window.injs.loadLocation();
        }
    } catch (e) {
        alert(e);
    }
}


loadLocation()

/**
 * loadLocation的回调
 * 返回参数：lat,lng,addres
 */
function setLocation(res) {
  console.log(res)
}
```

### webAppTel

拨打电话

```javascript
/* 拨打电话 */
function webAppTel(telNo) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.webAppTel.postMessage({
        telNo: telNo
      })
    } else if (/android/.test(ua)) {
      window.injs.webAppTel(telNo + '')
    }
  } catch (e) {}
}

webAppTel('15112334777')
```

### webAppSMG

发送短信

```javascript
/**
 * 调起发送短信
 * telNo发送对象
 * content发送内容
*/
function webAppSMG(telNo, content) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.webAppSMG.postMessage({
        title: telNo,
        content: content
      })
    } else if (/android/.test(ua)) {
      window.injs.webAppSMG(telNo, content)
    }
  } catch (e) {}
}

webAppSMG('15112334777', '测试')
```

### minAppShare 

分享

```javascript
/**
 * 分享
 * params = {
   'shareType': 1,  
    //1.公共(安卓：微信好友，朋友圈，qq好友，qq空间，微信，复制链接) (ios：微信好友，qq好友，短信)
    //2微信
    //3朋友圈
    //4QQ,
    //5短信
    //6.乐聊(传shareType和extraContent，其中sourceType和sourceName需要app端定制，
                                            例如sourceType=minApp-hdq和sourceName=二手房互动圈，是现有的)
    * extraContent 扩展字段 例如分享到乐聊需要的消息体
    'extraContent': {
        "sourceType": "minApp-hdq",
        "sourceName": "二手房互动圈",
        "expandContent": {
            "type": "multi", //text 只传文本，msgs 传一个对象 | multi 文本加图片,msgs传数组
            "msgs": [{
                "type": "text",  
                "text": ''
            },{
                "type": "image",  
                "file": {
                    "ext": "jpg?imageView2/2/w/800/h/600",
                    "size": 100,
                    "w": 100,
                    "h": 100,
                    "name": "/pic/hsl/2017-12/28/e055e79f-8bb2-47de-b0e6-0f29de803b7a.jpg?imageView2/2/w/800/h/600",
                    "url": "http://7xln4b.com1.z0.glb.clouddn.com//pic/hsl/2017-12/28/e055e79f-8bb2-47de-b0e6-0f29de803b7a.jpg?imageView2/2/w/800/h/600",
                    "md5": "75ad07cc90856a26986201ad4114ead3"
                }
            }]
        }
    }
 }
 * shareType 不是6时，传下面的参数：
 * title 标题
 * summary 摘要信息
 * targetUrl 网页打开的目标url
 * imageUrl 网络图片url
 * miniPath 微信小程序路径
*/
function minAppShare(params) {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.minAppShare.postMessage(params);
        } else if (/android/.test(ua)) {
            window.injs.minAppShare(JSON.stringify(params));
        }
    } catch (e) {
        alert(e);
    }
}

minAppShare('144451')
```

### webtoChat 

乐聊一对一聊天

```javascript
/**
 * 乐聊一对一聊天
 * @param {*} workerNo
 */
function webtoChat(workerNo) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.webtoChat.postMessage({
        workerNo: workerNo
      })
    } else if (/android/.test(ua)) {
      window.injs.webtoChat(workerNo + '')
    }
  } catch (e) {}
}

webtoChat('144451')minAppShare
```

### toImSendMsg

乐聊一对一聊天（带内容参数）

```javascript
/**
 * 乐聊一对一聊天（带内容参数）
 * workerNo  聊天对象
 * params = {
    "type": "multi",   
    'msgs': [{
        "type": "text",
        "text": ''
    },{
        "type": "image",
        "file": ''
    }]
 */
function toImSendMsg(workerNo, params) {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.toImSendMsg.postMessage({
                'workerNo': workerNo,
                'params': params
            });
        } else if (/android/.test(ua)) {
            window.injs.toImSendMsg(workerNo, JSON.stringify(params));
        }
    } catch (e) {
        alert(e);
    }
}

```

### imWithAgent

IM 一对一聊天咨询

```javascript
// IM一对一聊天（非抢单）参数同抢单,加一个经纪人no
function imWithAgent(type, targetId, appendMsg, alertContent, workerNo) {
  alertContent =
    alertContent || '在线咨询不会主动透露号码给经纪人，您确定放弃咨询吗？'
  var ua = navigator.userAgent.toLowerCase()
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.imWithAgent.postMessage({
        type: type,
        targetId: targetId,
        appendMsg: appendMsg,
        alertContent: alertContent,
        workerNo: workerNo
      })
    } else if (/android/.test(ua)) {
      window.injs.imWithAgent(
        type,
        targetId + '',
        appendMsg,
        alertContent,
        workerNo
      )
    }
  } catch (e) {}
}

imWithAgent('1', '491557', '测试', '', '144451')
```

### imConsulting

IM 抢单

```javascript
/**
 * IM抢单
 * type房源类型 1、租房(houseId) 2、二手房(houseId) 3、小区(dicId) 4新房(lpId)
 * appendMsg这个是发送开盘后追加的那条消息
 * alertContent是进入登录页面，关闭登录页面的时候需要的二次弹窗提醒文案
 */
function imConsulting(type, targetId, appendMsg, alertContent) {
  alertContent =
    alertContent || '在线咨询不会主动透露号码给经纪人，您确定放弃咨询吗？'
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.imConsulting.postMessage({
        type: type,
        targetId: targetId,
        appendMsg: appendMsg,
        alertContent: alertContent
      })
    } else if (/android/.test(ua)) {
      window.injs.imConsulting(type, targetId + '', appendMsg, alertContent)
    }
  } catch (e) {}
}

imConsulting('1', '491557', '测试测试')
```

### showAlbum

浏览相册

```javascript
/**
 * 打开相册，查看大图
 * params = {
        'position': 0,       //当前查看第几张
        'picList': ['',''],  //图片url数组
        'isMiniH5': true     //判断图片来源为轻应用
    }
 *
*/
function showAlbum(params) {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.showAlbum.postMessage({
                'className': 'OA_Club_imageViewerVC',
                'params': JSON.stringify(params)
            });
        } else if (/android/.test(ua)) {
            window.injs.toAppactivity('com.jjshome.basicui.activity.BasicPicActivity', JSON.stringify(params), '');
        }
    } catch (e) {
        alert(e);
    }
}
showAlbum()
```

### toMoviePlayer

播放视频

```javascript
/**
 * 打开视频播放 
 * dataSource 视频地址
 * isLooping  是否循环
 *
*/
function appVideo(dataSource,isLooping) {
    var params = {
        'dataSource': dataSource,
        'isLooping': isLooping
    }
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.toMoviePlayer.postMessage({
                'className': 'SelVideoViewController',
                'params': params,
            });
        } else if (/android/.test(ua)) {
            window.injs.toAppactivity('com.jjshome.basicui.activity.BasicVideoPlayerActivity', JSON.stringify(params), '');
        }
    } catch (e) {
        alert(e);
    }
}
toMoviePlayer('',true)
```

### toTargetVC

通用的跳转方法

```javascript
/**
 * 通用的跳转方法， 跳转到二手房列表
 */
function toTargetVC() {
  var ua = navigator.userAgent.toLowerCase()
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.toTargetVC.postMessage({
        className: 'JJSResoldListViewController',
        callback: '',
        params: ''
      })
    } else if (/android/.test(ua)) {
      window.injs.toAppactivity(
        'com.leyoujia.lyj.searchhouse.activity.ESFListActivity',
        '',
        ''
      )
    }
  } catch (e) {}
}

toTargetVC()
```

### openApp

打开支付宝

```javascript
/**
 * 打开支付宝
 */
function openApp() {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.openApp.postMessage({
                'page': 'alipay',
                'downUrl': 'https://itunes.apple.com/cn/app/zhi-fu-bao-qian-bao-yu-e-bao/id333206289?mt=8'
            });
        } else if (/android/.test(ua)) {
            window.injs.openApp("com.eg.android.AlipayGphone", 'http://a.app.qq.com/o/simple.jsp?pkgname=com.eg.android.AlipayGphone');
        }
    } catch (e) {}
}

openApp()
```

### screenshot

截屏当前页面

```javascript
/**
 * 截屏，截取当前页面内容，不包括头部，并保存到相册
*/
function screenshot() {
    try {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.screenshot.postMessage({
                'key': ''
            })
        } else if (/android/.test(ua)) {
            window.injs.screenshot();
        }
    } catch (e) {}

}

screenshot()
```

### loadDate 

获取时间(无效方法)

```javascript
/**
 * 获取时间
 */
function loadDate() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadDate.postMessage()
    } else if (/android/.test(ua)) {
      window.injs.loadDate()
    }
  } catch (e) {}
}

loadDate()

/**
 *  loadDate的回调
 */
function setDate(res) {
  console.log(res)
}
```

### loadAddress 

获取省市区(无效方法)

```javascript
/**
 * 获取省市区
 */
function loadAddress() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadAddress.postMessage()
    } else if (/android/.test(ua)) {
      window.injs.loadAddress()
    }
  } catch (e) {}
}

loadAddress()

/**
 *  loadAddress的回调
 */
function setAddress(res) {
  console.log(res)
}
```

### loadPhoto 

拍照(无效方法)

```javascript
/**
 * 拍照(安卓拍照跟相册是反的，ios没用)
 */
function loadPhoto() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadPhoto.postMessage()
    } else if (/android/.test(ua)) {
      window.injs.loadPhoto()
    }
  } catch (e) {}
}

loadPhoto()
```

### loadFile 

浏览文件(无效方法)

```javascript
/* 浏览文件 */
function loadFile() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadFile.postMessage()
    } else if (/android/.test(ua)) {
      window.injs.loadFile()
    }
  } catch (e) {}
}

loadFile()
```

### webAppShare 

分享(没有这个方法)

```javascript
/**
 *  分享
 * @param {*} title
 * @param {*} url
 * @param {*} des
 */
function webAppShare(title, url, des) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.webAppShare.postMessage({
        title: title,
        url: url,
        des: des
      })
    } else if (/android/.test(ua)) {
      window.injs.webAppShare(title, url, des)
    }
  } catch (e) {}
}

webAppShare('title', '', '')
```

### goToXfDetail 

跳转到新房详情(没有这个方法)

```javascript
/* 跳转到新房详情 no*/
function goToXfDetail(lpId) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToXfDetail.postMessage({
        lpId: lpId
      })
    } else if (/android/.test(ua)) {
      window.injs.goToXfDetail(lpId + '')
    }
  } catch (e) {}
}

goToXfDetail('475811')
```

### goToVRDetail 

跳转 vr 地址(没有这个方法)

```javascript
/* 跳转vr地址 */
function goToVRDetail(urlString) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToVRDetail.postMessage({
        urlString: urlString
      })
    } else if (/android/.test(ua)) {
      window.injs.goToVRDetail(urlString)
    }
  } catch (e) {}
}

goToVRDetail('https://beyond.3dnest.cn/house/?m=a6f9f4ea_qfrC_b6f9')
```

