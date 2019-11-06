## 房源网 API

| 方法名                                          | 描述                     |
| :---------------------------------------------- | ------------------------ |
| [reloadCurrentPage](#reloadcurrentpage)         | 重新加载页面             |
| [loadBarTitle](#loadBarTitle)                   | 设置页面顶部标题         |
| [loadbarColor](#loadbarColor)                   | 页面顶部导航栏背景色     |
| [loadUserInfo](#loadUserInfo)                   | 设置获取用户信息         |
| [webAppTel](#webAppTel)                         | 拨打电话                 |
| [imWithAgent](#imWithAgent)                     | IM 一对一聊天咨询        |
| [imConsulting](#imConsulting)                   | IM 抢单                  |
| [goToXfDetail](#goToXfDetail)                   | 跳转到新房详情           |
| [loadStarupData](#loadStarupData)               | 获取 app 数据            |
| [loadRequestParams](#loadRequestParams)         | 获取请求参数             |
| [changeRequestParams](#changeRequestParams)     | 改变请求参数             |
| [request](#request)                             | 接口请求                 |
| [share](#share)                                 | 微信朋友圈、微信好友分享 |
| [login](#login)                                 | 登录                     |
| [webGoBack](#webGoBack)                         | 返回上一个页面           |
| [webAppBack](#webAppBack)                       | 返回到轻应用首页         |
| [goBackAppHome](#goBackAppHome)                 | 返回到原生 APP 首页      |
| [refreshHomeHouseCards](#refreshHomeHouseCards) | 刷新首页房源卡片模块     |
| [goToNativeXqDetail](#goToNativeXqDetail)       | 小区详情                 |
| [goToNativeXXDetail](#goToNativeXXDetail)       | 学校详情                 |
| [goToNativeXfDetail](#goToNativeXfDetail)       | 新房详情                 |
| [goToBaodian](#goToBaodian)                     | 跳转小区宝典             |
| [goToXQPrice](#goToXQPrice)                     | 跳转小区房价             |
| [goToWebView](#goToWebView)                     | 跳转原生头的 WebView     |
| [toTargetVC](#toTargetVC)                       | 通用的跳转方法           |
| [goToEstimateHouse](#goToEstimateHouse)         | 估房价                   |
| [goToFindCJ](#goToFindCJ)                       | 查成交                   |
| [goToZhiNengXiaoLe](#goToZhiNengXiaoLe)         | 智能小乐                 |
| [goToHouseCardsPage](#goToHouseCardsPage)       | 跳转到房卡落地页         |

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
