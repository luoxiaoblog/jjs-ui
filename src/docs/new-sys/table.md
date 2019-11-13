## 表格

展示常用表格

### 基础用法

:::demo

```html
    <!-- 基础 -->
    <table class="table-box" style="width: 100%;border-left: 1px solid #ddd;border-top: 1px solid #ddd;">
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
    }//DEMO_JS_SHOW_END
    </script> 
```

:::

### 排序


:::demo

```html
    <table id="tableSort" class="table-box" style="width: 100%;border-left: 1px solid #ddd;border-top: 1px solid #ddd;">
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
        methods: {

        },
        mounted() {
          $('#tableSort').on('click', 'thead td', function () {
            var curIndex = $(this).index();
            window.sortTable(this, 'tableSort', curIndex);
          });
        }
      }
      //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
      $('#tableSort').on('click', 'thead td', function () {
        var curIndex = $(this).index();
        sortTable(this, 'tableSort', curIndex);
      });//DEMO_JS_SHOW_END
    </script>
```

:::

