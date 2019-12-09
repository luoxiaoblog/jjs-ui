## 表格

展示常用表格

### 基础用法

:::demo

```html
<table
  class="table-box"
  style="width: 100%;border-left: 1px solid #ddd;border-top: 1px solid #ddd;"
>
  <thead>
    <tr>
      <td width="180">日期</td>
      <td width="180">姓名</td>
      <td>地址</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
  </tbody>
</table>
<div class="clearfix page-item mt15" id="logPagerDiv-0">
  <div class="fl line-28 mr10">共有 <span>912</span> 条记录</div>
  <button class="fl btn btn-white pageButton mr5" type="button" page="1">首页</button>
  <button class="fl btn btn-white mr5 curr-disable pageButton" type="button" page="0">上一页</button>
  <button class="fl btn btn-white mr5 pageButton curr-page " type="button" title="1" page="1">1</button>
  <button class="fl btn btn-white mr5 pageButton" type="button" title="2" page="2">2</button>
  <button class="fl btn btn-white mr5 pageButton"type="button" title="3" page="3">3</button>
  <button class="fl btn btn-white mr5 pageButton" type="button" title="4" page="4">4</button>
  <button class="fl btn btn-white mr5 pageButton"type="button" title="5" page="5">5</button>
  <button class="fl btn btn-white mr5  pageButton" type="button" page="2">下一页</button>
  <button class="fl btn btn-white mr5 pageButton" type="button" page="19" style="margin-right:0;">尾页</button>
  <input type="hidden" id="totalPage" value="19" />
  <div class="fl line-28 ml10">跳转</div>
  <input class="fl mr5" type="text" id="inputPageNo" placeholder="1" oldvalue="1" value="1" onkeyup="" onafterpaste=""/>
  <div class="fl line-28">/<span class="all-page ml3">19</span>页，</div>
  <div class="fl line-28">每页显示</div>
  <input class="fl" type="text" id="inputPageSize" placeholder="50" oldvalue="50" value="50" onkeyup="" onafterpaste=""/>
  <div class="fl line-28 mr10">条</div>
  <button class="fl btn btn-white" onclick="" type="button">确定</button>
</div>
```

:::

### 单选

点击要选中的行，被选中的行将高亮展示。

:::demo 选中的`<tr>`会加上`current-row`class

```html
<style>
.table-box tr.current-row > td {
  background-color: #ecf5ff;
}
</style>

<table
  id="tableSingleSelect"
  class="table-box"
  style="width: 100%;border-left: 1px solid #ddd;border-top: 1px solid #ddd;"
>
  <thead>
    <tr>
      <td width="180">日期</td>
      <td width="180">姓名</td>
      <td>地址</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
  </tbody>
</table>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#tableSingleSelect').on('click', 'tbody tr', function() {
      $(this)
        .siblings()
        .removeClass('current-row')
        .end()
        .addClass('current-row')
    })
  }
} //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#tableSingleSelect').on('click', 'tbody tr', function() {
  $(this)
    .siblings()
    .removeClass('current-row')
    .end()
    .addClass('current-row')
})//DEMO_JS_SHOW_END
</script>
```
:::


### 多选

第一列是多选框，点击多选框选择列。勾选表头的多选框可选中所有行。

:::demo  选中的`<tr>` 会加上`selected`class

```html
<table
  id="tableMutilSelect"
  class="table-box"
  style="width: 100%;border-left: 1px solid #ddd;border-top: 1px solid #ddd;"
>
  <thead>
    <tr>
      <td width="30"><input type="checkbox" class="select-all"></td>
      <td width="180">日期</td>
      <td width="180">姓名</td>
      <td>地址</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox" class="select-row"></td>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td><input type="checkbox" class="select-row"></td>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td><input type="checkbox" class="select-row"></td>
      <td>2016-05-02</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
  </tbody>
</table>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#tableMutilSelect').find('.select-row').on('ifChecked', function () {
    var $curTr = $(this).parents('tr:eq(0)')
    $curTr.addClass('selected')
    if ($curTr.siblings().not('.selected').length == 0) {
      $(this).parents('table:eq(0)').find('.select-all').iCheck('check')
    }
    }).on('ifUnchecked', function () {
      $(this).parents('tr:eq(0)').removeClass('selected')
      $(this).parents('table:eq(0)').find('.select-all').prop('checked', false).parent().removeClass('checked')
    }).end()
    .find('.select-all').on('ifChecked', function () {
      $(this).parents('table:eq(0)').find('.select-row').iCheck('check')
    }).on('ifUnchecked', function () {
      $(this).parents('table:eq(0)').find('.select-row').iCheck('uncheck')
    })

    this.initiCheck('#tableMutilSelect input')
  },
  methods: {
     initiCheck(obj) {
      $(obj).iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%'
      })
    }
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#tableMutilSelect').find('.select-row').on('ifChecked', function () {
var $curTr = $(this).parents('tr:eq(0)')
$curTr.addClass('selected')
if ($curTr.siblings().not('.selected').length == 0) {
  $(this).parents('table:eq(0)').find('.select-all').iCheck('check')
}
}).on('ifUnchecked', function () {
  $(this).parents('tr:eq(0)').removeClass('selected')
  $(this).parents('table:eq(0)').find('.select-all').prop('checked', false).parent().removeClass('checked')
}).end()
.find('.select-all').on('ifChecked', function () {
  $(this).parents('table:eq(0)').find('.select-row').iCheck('check')
}).on('ifUnchecked', function () {
  $(this).parents('table:eq(0)').find('.select-row').iCheck('uncheck')
})

initiCheck('#tableMutilSelect input')

function initiCheck(obj) {
  $(obj).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'
  })
}
//DEMO_JS_SHOW_END
</script>
```

:::

### 固定表头和列

:::demo

```html
<div class="table-scroll" style="max-height: 140px;">
  <table class="table-box" style="width: 100%; table-layout: fixed;">
    <thead>
      <tr>
        <td width="180">日期</td>
        <td width="180">姓名</td>
        <td width="280">地址</td>
        <td width="280">地址</td>
        <td width="280">地址</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2016-05-02</td>
        <td>王小虎</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
      </tr>
      <tr>
        <td>2016-05-02</td>
        <td>王小虎</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
      </tr>
      <tr>
        <td>2016-05-02</td>
        <td>王小虎</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
      </tr>
        <tr>
        <td>2016-05-02</td>
        <td>王小虎</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
      </tr>
        <tr>
        <td>2016-05-02</td>
        <td>王小虎</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
      </tr>
      </tr>
        <tr>
        <td>2016-05-02</td>
        <td>王小虎</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
      </tr>
      </tr>
        <tr>
        <td>2016-05-02</td>
        <td>王小虎</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
        <td>上海市普陀区金沙江路 1518 弄</td>
      </tr>
    </tbody>
  </table>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  methods: {
    fixedTds(className, cols) {
      var css = '.table-box{border-collapse:separate;border-top:none;border-left:none;}/*要设置这个，不然边框会跑*/' +
      '.table-box thead tr td.fixedTd,.table-box tbody tr td.fixedTd{position:relative;top:0px;z-index:1;background-color:white !important;border-right:1px solid #ddd !important;}' +
      '.table-box thead tr:hover td.fixedTd,.table-box tbody tr:hover td.fixedTd{position:relative;top:0px;z-index:1;}' +
      '.table-box tbody tr td.fixedTd{background-color:white !important;}' +
      '.table-box tbody tr:hover td.fixedTd{background-color:#C1F9CB !important;}'
      var style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      var textCss = document.createTextNode(css)
      style.appendChild(textCss)
      var heads = document.getElementsByTagName("head")
      if (heads.length) {
        heads[0].appendChild(style)
      } else {
        document.documentElement.appendChild(style)
      }

      if (!className) { className = $('table').parent() }
      cols = cols || 0
      cols = cols > $(className).find('table tbody').find('tr').eq(0).find('td').length ? 0 : cols
      //给table外层添加样式
      $(className).css({ 'overflow': 'auto', 'border-left': '1px solid #ddd', 'border-top': '1px solid #ddd' })
      $(className).scroll(function () { //给table外面的div滚动事件绑定一个函数
        var $divScroll = $(className)
        var left = $divScroll.scrollLeft() //获取滚动的距离
        var top = $divScroll.scrollTop() //获取滚动的距离
        var trs = $divScroll.find(" table tr") //获取表格的所有tr
        $divScroll.find("table thead tr").find('td').addClass('fixedTd').css({ "top": top })//固定头部
        for (var j = 0; j < cols; j++) {
          $divScroll.find("table thead tr").find('td').eq(j).css({ 'zIndex': 2 })
        }
        trs.each(function (i) { //对每一个tr（每一行）进行处理
          //固定列
          for (var i = 0; i < cols; i++) {
            //$divScroll.find("table tr").eq(0).find('td').eq(i).css({'zIndex':2});
            $(this).children().eq(i).addClass('fixedTd').css({ "left": left })
          }
        })
      })
    }
  },
  mounted() {
    this.fixedTds('.table-scroll', 1)
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
fixedTds('.table-scroll', 1)

function fixedTds(className, cols) {
  var css = '.table-box{border-collapse:separate;border-top:none;border-left:none;}/*要设置这个，不然边框会跑*/' +
  '.table-box thead tr td.fixedTd,.table-box tbody tr td.fixedTd{position:relative;top:0px;z-index:1;background-color:white !important;border-right:1px solid #ddd !important;}' +
  '.table-box thead tr:hover td.fixedTd,.table-box tbody tr:hover td.fixedTd{position:relative;top:0px;z-index:1;}' +
  '.table-box tbody tr td.fixedTd{background-color:white !important;}' +
  '.table-box tbody tr:hover td.fixedTd{background-color:#C1F9CB !important;}'
  var style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  var textCss = document.createTextNode(css)
  style.appendChild(textCss)
  var heads = document.getElementsByTagName("head")
  if (heads.length) {
    heads[0].appendChild(style)
  } else {
    document.documentElement.appendChild(style)
  }

  if (!className) { className = $('table').parent() }
  cols = cols || 0
  cols = cols > $(className).find('table tbody').find('tr').eq(0).find('td').length ? 0 : cols
  //给table外层添加样式
  $(className).css({ 'overflow': 'auto', 'border-left': '1px solid #ddd', 'border-top': '1px solid #ddd' })
  $(className).scroll(function () { //给table外面的div滚动事件绑定一个函数
    var $divScroll = $(className)
    var left = $divScroll.scrollLeft() //获取滚动的距离
    var top = $divScroll.scrollTop() //获取滚动的距离
    var trs = $divScroll.find(" table tr") //获取表格的所有tr
    $divScroll.find("table thead tr").find('td').addClass('fixedTd').css({ "top": top })//固定头部
    for (var j = 0; j < cols; j++) {
      $divScroll.find("table thead tr").find('td').eq(j).css({ 'zIndex': 2 })
    }
    trs.each(function (i) { //对每一个tr（每一行）进行处理
      //固定列
      for (var i = 0; i < cols; i++) {
        //$divScroll.find("table tr").eq(0).find('td').eq(i).css({'zIndex':2});
        $(this).children().eq(i).addClass('fixedTd').css({ "left": left })
      }
    })
  })
}
//DEMO_JS_SHOW_END
</script>
```

:::

### 排序

:::demo

```html
<table
  id="tableSort"
  class="table-box"
  style="width: 100%;border-left: 1px solid #ddd;border-top: 1px solid #ddd;"
>
  <thead>
    <tr>
      <td width="180" class="sortIcon sorting arrow-sort">日期</td>
      <td width="180" class="sortIcon sorting arrow-sort">姓名</td>
      <td class="sortIcon sorting arrow-sort">地址</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2019-11-11</td>
      <td>王小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td>2019-11-12</td>
      <td>张小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
    <tr>
      <td>2019-11-13</td>
      <td>李小虎</td>
      <td>上海市普陀区金沙江路 1518 弄</td>
    </tr>
  </tbody>
</table>

<script>
//DEMO_JS_RUN_START
export default {
  methods: {},
  mounted() {
    $('#tableSort').on('click', 'thead td', function() {
      var curIndex = $(this).index()
      sortTable(this, 'tableSort', curIndex)
    })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#tableSort').on('click', 'thead td', function() {
  var curIndex = $(this).index()
  sortTable(this, 'tableSort', curIndex)
})
//DEMO_JS_SHOW_END
</script>
```

:::

### 暂无数据

:::demo

```html
<table
  class="table-box"
  style="width: 100%;border-left: 1px solid #ddd;border-top: 1px solid #ddd;"
>
  <thead>
    <tr>
      <td width="180">日期</td>
      <td width="180">姓名</td>
      <td>地址</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td height="75" class="text-center c666" colspan="3">暂无数据！</td>
    </tr>
  </tbody>
</table>
```

:::

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

:::demo

```html
<style>
.form-item {
  text-align: left;
}

label.form-item-label {
  width: 90px;
  color: #99a9bf;
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  color: #606266;
  line-height: 28px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}

.form-item-content {
  vertical-align: top;
  line-height: 28px;
  position: relative;
  font-size: 14px;
}

.table-box__expanded-cell {
  display: none;
}
</style>

<table id="tableExpand" class="table-box"
  style="width: 100%; border-left: 1px solid #ddd;border-top: 1px solid #ddd;">
  <thead>
    <tr>
      <td width="50"></td>
      <td width="">商品 ID</td>
      <td width="">商品名称</td>
      <td width="">描述</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="javascript:;" class="blue table-box__expand-toggle table-box__noexpand">展开</a></td>
      <td>12987122</td>
      <td>好滋好味鸡蛋仔</td>
      <td>荷兰优质淡奶，奶香浓而不腻</td>
    </tr>
    <tr>
      <td colspan="5" class="table-box__expanded-cell">
        <form>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品名称</label>
            <div class="fl form-item-content">好滋好味鸡蛋仔</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">所属店铺</label>
            <div class="fl form-item-content">王小虎夫妻店</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品 ID</label>
            <div class="fl form-item-content">12987122</div>
          </div>
           <div class="form-item clearfix">
            <label class="fl form-item-label">店铺 ID</label>
            <div class="fl form-item-content">10333</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品分类</label>
            <div class="fl form-item-content">江浙小吃、小吃零食</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">店铺地址</label>
            <div class="fl form-item-content">上海市普陀区真北路</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品描述</label>
            <div class="fl form-item-content">荷兰优质淡奶，奶香浓而不腻</div>
          </div>
        </form>
      </td>
    </tr>
    <tr>
      <td><a href="javascript:;" class="blue table-box__expand-toggle table-box__noexpand">展开</a></td>
      <td>12987123</td>
      <td>好滋好味鸡蛋仔</td>
      <td>荷兰优质淡奶，奶香浓而不腻</td>
    </tr>
    <tr>
      <td colspan="5" class="table-box__expanded-cell">
        <form>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品名称</label>
            <div class="fl form-item-content">好滋好味鸡蛋仔</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">所属店铺</label>
            <div class="fl form-item-content">王小虎夫妻店</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品 ID</label>
            <div class="fl form-item-content">12987123</div>
          </div>
           <div class="form-item clearfix">
            <label class="fl form-item-label">店铺 ID</label>
            <div class="fl form-item-content">10333</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品分类</label>
            <div class="fl form-item-content">江浙小吃、小吃零食</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">店铺地址</label>
            <div class="fl form-item-content">上海市普陀区真北路</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品描述</label>
            <div class="fl form-item-content">荷兰优质淡奶，奶香浓而不腻</div>
          </div>
        </form>
      </td>
    </tr>
    <tr>
      <td><a href="javascript:;" class="blue table-box__expand-toggle table-box__noexpand">展开</a></td>
      <td>12987124</td>
      <td>好滋好味鸡蛋仔</td>
      <td>荷兰优质淡奶，奶香浓而不腻</td>
    </tr>
    <tr>
      <td colspan="5" class="table-box__expanded-cell">
        <form>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品名称</label>
            <div class="fl form-item-content">好滋好味鸡蛋仔</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">所属店铺</label>
            <div class="fl form-item-content">王小虎夫妻店</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品 ID</label>
            <div class="fl form-item-content">12987124</div>
          </div>
           <div class="form-item clearfix">
            <label class="fl form-item-label">店铺 ID</label>
            <div class="fl form-item-content">10333</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品分类</label>
            <div class="fl form-item-content">江浙小吃、小吃零食</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">店铺地址</label>
            <div class="fl form-item-content">上海市普陀区真北路</div>
          </div>
          <div class="form-item clearfix">
            <label class="fl form-item-label">商品描述</label>
            <div class="fl form-item-content">荷兰优质淡奶，奶香浓而不腻</div>
          </div>
        </form>
      </td>
    </tr>
  </tbody>
</table>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#tableExpand').on('click', '.table-box__expand-toggle', function () {
      var isExpanded = !$(this).hasClass('table-box__noexpand')
      $(this).toggleClass('table-box__noexpand')
            .parents('tr:eq(0)')
            .next().find('.table-box__expanded-cell').toggle(!isExpanded)   
      $(this).text(isExpanded ? '展开' : '收起')
    })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#tableExpand').on('click', '.table-box__expand-toggle', function () {
  var isExpanded = !$(this).hasClass('table-box__noexpand')
  $(this).toggleClass('table-box__noexpand')
          .parents('tr:eq(0)')
          .next().find('.table-box__expanded-cell').toggle(!isExpanded)   
  $(this).text(isExpanded ? '展开' : '收起')
})
//DEMO_JS_SHOW_END
</script>
```
:::
