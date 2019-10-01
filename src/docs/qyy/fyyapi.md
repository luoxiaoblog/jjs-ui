## 房源网 API

| 方法名                                          | 描述                     |
| :---------------------------------------------- | ------------------------ |
| [reloadCurrentPage](#reloadcurrentpage)         | 重新加载页面             |
| [loadBarTitle](#loadbartitle)                   | 设置页面顶部标题         |
| [loadbarColor](#loadbarcolor)                   | 页面顶部导航栏背景色     |
| [loadUserInfo](#loaduserinfo)                   | 设置获取用户信息         |
| [webAppTel](#webapptel)                         | 拨打电话                 |
| [imWithAgent](#imwithagent)                     | IM 一对一聊天咨询        |
| [imConsulting](#imconsulting)                   | IM 抢单                  |
| [goToXfDetail](#gotoxfdetail)                   | 跳转到新房详情           |
| [loadStarupData](#loadstarupdata)               | 获取 app 数据            |
| [loadRequestParams](#loadrequestparams)         | 获取请求参数             |
| [changeRequestParams](#changerequestparams)     | 改变请求参数             |
| [request](#request)                             | 接口请求                 |
| [share](#share)                                 | 微信朋友圈、微信好友分享 |
| [login](#login)                                 | 登录                     |
| [webGoBack](#webgoback)                         | 返回上一个页面           |
| [webAppBack](#webappback)                       | 返回到轻应用首页         |
| [goBackAppHome](#gobackapphome)                 | 返回到原生 APP 首页      |
| [refreshHomeHouseCards](#refreshhomehousecards) | 刷新首页房源卡片模块     |
| [goToNativeXqDetail](#gotonativexqdetail)       | 小区详情                 |
| [goToNativeXXDetail](#gotonativexxdetail)       | 学校详情                 |
| [goToNativeXfDetail](#gotonativexfdetail)       | 新房详情                 |
| [goToBaodian](#gotobaodian)                     | 跳转小区宝典             |
| [goToXQPrice](#gotoxqprice)                     | 跳转小区房价             |
| [goToWebView](#gotowebview)                     | 跳转原生头的 WebView     |
| [toTargetVC](#totargetvc)                       | 通用的跳转方法           |
| [goToEstimateHouse](#gotoestimatehouse)         | 估房价                   |
| [goToFindCJ](#gotofindcj)                       | 查成交                   |
| [goToZhiNengXiaoLe](#gotozhinengxiaole)         | 智能小乐                 |
| [goToHouseCardsPage](#gotohousecardspage)       | 跳转到房卡落地页         |

```javascript
// 全局变量
var ua = navigator.userAgent.toLowerCase()
```

### reloadCurrentPage

重新加载页面

```javascript
function reloadCurrentPage() {
  var params = {
    reload: '1'
  }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.reloadCurrentPage.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.webReload(JSON.stringify(params))
    }
  } catch (e) {}
}

reloadCurrentPage()
```

### loadBarTitle

设置页面顶部标题

```javascript
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

loadBarTitle()
```

### loadbarColor

页面顶部导航栏背景色

```javascript
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

loadbarColor()
```

### loadUserInfo

设置获取用户信息

```javascript
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
```

### webAppTel

拨打电话

```javascript
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

webAppTel('15112334755')
```

### imWithAgent

IM 一对一聊天咨询

```javascript
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
  var ua = navigator.userAgent.toLowerCase()
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

### goToXfDetail

跳转到新房详情

```javascript
function goToXfDetail(lpId) {
  var params = { targetId: lpId }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToXfDetail.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToXfDetail(lpId)
    }
  } catch (e) {}
}

goToXfDetail('475811')
```

### loadStarupData

跳转到新房详情

```javascript
/* 获取app数据 no */
function loadStarupData(requestUrl, params, headerParams) {
  var params = {
    requestUrl: requestUrl,
    params: params,
    headerParams: headerParams
  }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadStarupData.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.loadStarupData(JSON.stringify(params))
    }
  } catch (e) {}
}

loadStarupData(
  '/stewardnew/housecard/queryHouseCards',
  {
    cityCode: '000002',
    mobile: '',
    dataType: '0',
    uuid: '84C7B19A-59DC-46FC-9F15-C90DD40F35F8'
  },
  {}
)
```

### loadRequestParams

获取请求参数

```javascript
/**
 * 获取请求参数
 * 一般在JS开头调用此func，获取用于请求数据的参数。
 * 调用此func之后会回调setRequestParams方法，获取到的请求参数作为setRequestParams的参数传入
 */
function loadRequestParams() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.loadRequestParams.postMessage('')
    } else if (/android/.test(ua)) {
      window.injs.loadRequestParams()
    }
  } catch (e) {}
}

loadRequestParams()
```

### changeRequestParams

改变请求参数

```javascript
function changeRequestParams() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.changeRequestParams.postMessage('')
    } else if (/android/.test(ua)) {
      window.injs.changeRequestParams()
    }
  } catch (e) {}
}

changeRequestParams()
```

### request

接口请求

```javascript
/**
 * 接口请求
 * @param {*} url
 * @param {*} params
 * @param {*} header
 * @param {*} callback
 */
function request(url, params, header, callback) {
  var params = JSON.stringify(params)
  var header = JSON.stringify(header)
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.request.postMessage({
        url: url,
        params: params,
        header: header,
        callback: callback
      })
    } else if (/android/.test(ua)) {
      window.injs.request(url, params, header, callback)
    }
  } catch (e) {
    alert(e)
  }
}

request(
  '/stewardnew/housecard/queryHouseCards',
  {
    cityCode: '000002',
    mobile: '',
    dataType: '0',
    uuid: '84C7B19A-59DC-46FC-9F15-C90DD40F35F8'
  },
  {},
  'requestCallback'
)
```

### share

微信朋友圈、微信好友分享

```javascript
/**
 * 微信朋友圈、微信好友分享
 * @param {*} type  1微信朋友圈 2微信好友
 * @param {*} title 标题
 * @param {*} summary 描述
 * @param {*} Url 分享链接
 * @param {*} imgStr 分享图片
 * @param {*} miniUrl 小程序地址
 * no
 */
function share(type, title, summary, url, imgStr, miniUrl) {
  var params = {
    type: type,
    title: title,
    summary: summary,
    url,
    url,
    imgStr: imgStr,
    miniUrl: miniUrl
  }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.share.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.share(JSON.stringify(params))
    }
  } catch (e) {
    alert(e)
  }
}

share('2', 'title', 'summary', 'http://www.baidu.com', '', '')
```

### login

登录

```javascript
function login() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.login.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.login('')
    }
  } catch (e) {}
}

login()
```

### webGoBack

返回上一个页面

```javascript
function webGoBack() {
  var ua = navigator.userAgent.toLowerCase()
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.webGoBack.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.webGoBack('')
    }
  } catch (e) {}
}

webGoBack()
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

### goBackAppHome

返回到原生 APP 首页

```javascript
/**
 * 返回到原生APP首页
 */
function goBackAppHome() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goBackAppHome.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.goBackAppHome('')
    }
  } catch (e) {}
}

goBackAppHome()
```

### refreshHomeHouseCards

刷新首页房源卡片模块

```javascript
/**
 * 刷新首页房源卡片模块
 */
function refreshHomeHouseCards() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.refreshHomeHouseCards.postMessage('')
    } else if (/android/.test(ua)) {
      window.injs.refreshHomeHouseCards('')
    }
  } catch (e) {
    alert(e)
  }
}

refreshHomeHouseCards()
```

### goToNativeXqDetail

跳转到小区详情

```javascript
/**
 * 小区详情
 * @param {String} id
 */
function goToNativeXqDetail(id) {
  var params = { targetId: id + '' }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToNativeXqDetail.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToNativeXqDetail(JSON.stringify(params))
    }
  } catch (e) {
    alert(e)
  }
}

goToNativeXqDetail('306')
```

### goToNativeXXDetail

跳转到学校详情

```javascript
/**
 * 跳转到学校详情
 * @param {String} id
 */
function goToNativeXXDetail(id) {
  var params = { targetId: id + '' }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToNativeXXDetail.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToNativeXXDetail(JSON.stringify(params))
    }
  } catch (e) {
    alert(e)
  }
}

goToNativeXXDetail('4336')
```

### goToNativeXfDetail

跳转到新房详情

```javascript
/**
 * 新房详情
 * @param {String} id
 */
function goToNativeXfDetail(id) {
  var params = { targetId: id + '' }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToNativeXfDetail.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToNativeXfDetail(JSON.stringify(params))
    }
  } catch (e) {
    alert(e)
  }
}

goToNativeXfDetail('475811')
```

### goToBaodian

跳转到小区宝典

```javascript
/**
 * 跳转到小区宝典
 * @param {String} id
 */
function goToBaodian(id) {
  params = { targetId: id + '' }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToBaodian.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToBaodian(JSON.stringify(params))
    }
  } catch (e) {}
}

goToBaodian('306')
```

### goToBaodian

跳转到小区宝典

```javascript
/**
 * 跳转到小区宝典
 * @param {String} id
 */
function goToBaodian(id) {
  params = { targetId: id + '' }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToBaodian.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToBaodian(JSON.stringify(params))
    }
  } catch (e) {}
}

goToBaodian('306')
```

### goToXQPrice

跳转到小区房价

```javascript
/**
 * 跳转到小区房价
 * @param {String} id
 */
function goToXQPrice(id) {
  var params = { appId: id + '' }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToXQPrice.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToXQPrice(JSON.stringify(params))
    }
  } catch (e) {}
}

goToXQPrice('306')
```

### goToWebView

跳转原生头的 WebView

```javascript
/**
 * 跳转原生头的WebView
 * @param {String} id
 */
function goToWebView(urlString) {
  var params = { urlString: urlString }
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToWebView.postMessage(params)
    } else if (/android/.test(ua)) {
      window.injs.goToWebView(JSON.stringify(params))
    }
  } catch (e) {}
}

goToWebView('/shenzhen/xq/detail/306.html')
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

### goToEstimateHouse

跳转到估房价

```javascript
/**
 * 跳转到估房价
 */
function goToEstimateHouse() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToEstimateHouse.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.goToEstimateHouse('')
    }
  } catch (e) {}
}

goToEstimateHouse()
```

### goToFindCJ

跳转到查成交

```javascript
/**
 * 跳转到查成交
 */
function goToFindCJ() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToFindCJ.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.goToFindCJ('')
    }
  } catch (e) {}
}

goToFindCJ()
```

### goToZhiNengXiaoLe

跳转到智能小乐

```javascript
/**
 * 跳转到智能小乐
 */
function goToZhiNengXiaoLe() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToZhiNengXiaoLe.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.goToZhiNengXiaoLe('')
    }
  } catch (e) {}
}

goToZhiNengXiaoLe()
```

### goToHouseCardsPage

跳转到房卡落地页

```javascript
/**
 * 跳转到房卡落地页
 */
function goToHouseCardsPage() {
  try {
    if (/iphone|ipad|ipod/.test(ua)) {
      window.webkit.messageHandlers.goToHouseCardsPage.postMessage({})
    } else if (/android/.test(ua)) {
      window.injs.goToHouseCardsPage('')
    }
  } catch (e) {}
}

goToHouseCardsPage()
```
