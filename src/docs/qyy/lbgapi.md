## 乐办公 API

| 方法名                        | 描述                 |
| :---------------------------- | -------------------- |
| [webAppBack](#webappback)     | 返回到轻应用首页     |
| [loadBarTitle](#loadbartitle) | 设置页面顶部标题     |
| [loadbarColor](#loadbarcolor) | 页面顶部导航栏背景色 |
| [minAppHome](#minapphome)     | 回到轻应用首页       |
| [loadUserInfo](#loaduserinfo) | 设置获取用户信息     |
| [loadLocation](#loadlocation) | 获取地理位置         |
| [webAppTel](#webapptel)       | 拨打电话             |
| [webAppSMG](#webappsmg)       | 发送短信             |
| [webAppShare](#webappshare)   | 分享                 |
| [loadDate](#loaddate)         | 获取时间             |
| [loadAddress](#loadaddress)   | 获取省市区           |
| [webtoChat](#webtochat)       | 聊天                 |
| [loadPhoto](#loadphoto)       | 拍照                 |
| [loadFile](#loadfile)         | 浏览文件             |
| [showAlbum](#showalbum)       | 浏览相册             |
| [imWithAgent](#imwithagent)   | IM 一对一聊天咨询    |
| [imConsulting](#imconsulting) | IM 抢单              |
| [goToXfDetail](#gotoxfdetail) | 跳转到新房详情       |
| [goToVRDetail](#gotovrdetail) | 跳转 vr 地址         |
| [toTargetVC](#totargetvc)     | 通用的跳转方法       |

```javascript
// 全局变量
var ua = navigator.userAgent.toLowerCase()
```

### webAppBack

返回到轻应用首页

```javascript
/**
 * 返回到轻应用首页
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
/* 页面顶部导航栏背景色 */
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

### minAppHome

回到轻应用首页

```javascript
/**
 * 回到轻应用首页
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
 */
function setUserInfo(info) {
  console.log(info)
}
```

### loadLocation

获取地理位置

```javascript
/* 获取地理位置 */
function loadLocation() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadLocation.postMessage({
        key: 'undefined'
      })
    } else if (/android/.test(ua)) {
      window.injs.loadLocation()
    }
  } catch (e) {}
}

loadLocation()

/**
 * loadLocation的回调
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
      window.injs.webAppTel(telNo)
    }
  } catch (e) {}
}

webAppTel('15112334777')
```

### webAppSMG

发送短信

```javascript
/* 发送短信 */
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

### webAppShare

分享

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

### loadDate

获取时间

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

获取省市区

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

### webtoChat

聊天

```javascript
/**
 * 聊天
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

webtoChat('144451')
```

### loadPhoto

拍照

```javascript
/**
 * 拍照
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

浏览文件

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

### showAlbum

浏览相册

```javascript
/* 浏览相册 */
function showAlbum(lists, index) {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.showAlbum.postMessage({
        list: lists,
        int: index
      })
    } else if (/android/.test(ua)) {
      window.injs.showAlbum(lists, index)
    }
  } catch (e) {}
}

showAlbum()
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

### goToXfDetail

跳转到新房详情

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

跳转 vr 地址

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
