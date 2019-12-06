## 时间选择器 WdatePicker

WdatePicker 是一款强大的日期插件。

引入文件：

```html
<script src="https://front.leyoujia.com/plugins/datepicker/WdatePicker.js"></script>
```

### 基础使用

点击输入框或图标选择日期

:::demo 为 click 事件绑定`.WdatePicker(options)`方法即可使用此插件，`readOnly`属性设置是否只读

```html
<div class="fl relative">
  <input
    onclick="WdatePicker({readOnly:true})"
    type="text"
    id="date1"
    name="date"
    value=""
    placeholder="选择日期"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'date1', readOnly:true})"
  ></a>
</div>
```

:::

### 默认值

带默认值的日期选择器

:::demo 给 input 的 value 属性赋初值即可

```html
<div class="fl relative">
  <input
    onclick="WdatePicker({readOnly:true})"
    type="text"
    id="date2"
    name="date2"
    value="2019-10-01"
    placeholder="选择日期"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'date2', readOnly:true})"
  ></a>
</div>
```

:::

### 自定义格式

可自定义日期格式

:::demo `dateFmt`属性可定义日期格式， yMdHmswW 分别代表年月日时分秒星期周,你可以任意组合这些元素来自定义你个性化的日期格式

```html
<div class="fl relative mr20">
  <input
    style="width: 160px"
    onclick="WdatePicker({readOnly:true, dateFmt:'yyyy-MM-dd HH:mm:ss'})"
    type="text"
    id="date3"
    name="date3"
    placeholder="yyyy-MM-dd HH:mm:ss"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'date3', readOnly:true, dateFmt:'yyyy-MM-dd HH:mm:ss'})"
  ></a>
</div>

<div class="fl relative mr20">
  <input
    style="width: 200px"
    onclick="WdatePicker({readOnly:true, dateFmt:'yyyy年MM月dd日 HH时mm分ss秒'})"
    type="text"
    id="date4"
    name="date5"
    placeholder="yyyy年MM月dd日 HH时mm分ss秒"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'date4', readOnly:true, dateFmt:'yyyy年MM月dd日 HH时mm分ss秒'})"
  ></a>
</div>

<div class="fl relative mr20">
  <input
    style="width: 80px"
    onclick="WdatePicker({readOnly:true, dateFmt:'HH:mm'})"
    type="text"
    id="date5"
    name="date5"
    placeholder="HH:mm"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'date5', readOnly:true, dateFmt:'HH:mm'})"
  ></a>
</div>
```

:::

### 禁用状态

禁用状态的日期选择器

:::demo 给 input 加上 `disabled`属性即可禁用插件

```html
<div class="fl relative">
  <input
    onclick="WdatePicker({readOnly:true})"
    type="text"
    id="date6"
    name="date6"
    disabled
    placeholder="选择日期"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'date6', readOnly:true})"
  ></a>
</div>
```

:::

### 选择日期范围

使用两个日期选择器组成日期范围选择器，注意配置 `maxDate` 和 `minDate` 限制日期选择范围

:::demo `$dp.$D` 相当于 `document.getElementById` 函数.那么为什么里面的 ' 使用 \' 呢? 那是因为 " 和 ' 都被外围的函数使用了，故使用转义符 \ ，否则会提示 JS 语法错误。所以您在其他地方使用时注意把 \' 改成 " 或者 ' 来使用。

```html
<div class="fl relative">
  <input
    onclick="WdatePicker({readOnly:true, maxDate:'#F{$dp.$D(\'endDate\')}'})"
    type="text"
    id="startDate"
    name="startDate"
    placeholder="开始日期"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'startDate', readOnly:true, maxDate:'#F{$dp.$D(\'endDate\')}'})"
  ></a>
</div>
<div class="fl line-28">-</div>
<div class="fl relative">
  <input
    onclick="WdatePicker({readOnly:true, minDate:'#F{$dp.$D(\'startDate\')}'})"
    type="text"
    id="endDate"
    name="endDate"
    placeholder="结束日期"
  />
  <a
    class="wdate-ico"
    href="javascript:;"
    onclick="WdatePicker({el:'endDate', readOnly:true, minDate:'#F{$dp.$D(\'startDate\')}'})"
  ></a>
</div>
```

:::

:::warning
两个日期的日期格式必须相同
:::

### 动态绑定

有些场景动态生成日期选择器元素，此时可能需要动态绑定 click 事件保证功能正常使用。

:::demo

```html
<div id="wrapper">
  <div class="mt10 clearfix line-28 row">
    <div class="fl relative">
      <input
        onclick="WdatePicker({readOnly:true, maxDate:'#F{$dp.$D(\'dynamicEndDate0\')}'})"
        type="text"
        id="dynamicStartDate0"
        name="dynamicStartDate0"
        placeholder="开始日期"
      />
      <a
        class="wdate-ico"
        href="javascript:;"
        onclick="WdatePicker({el:'dynamicStartDate0', readOnly:true, maxDate:'#F{$dp.$D(\'dynamicEndDate0\')}'})"
      ></a>
    </div>
    <div class="fl">-</div>
    <div class="fl relative mr10">
      <input
        onclick="WdatePicker({readOnly:true, minDate:'#F{$dp.$D(\'dynamicStartDate0\')}'})"
        type="text"
        id="dynamicEndDate0"
        name="dynamicEndDate0"
        placeholder="结束日期"
      />
      <a
        class="wdate-ico"
        href="javascript:;"
        onclick="WdatePicker({el:'dynamicEndDate0', readOnly:true, minDate:'#F{$dp.$D(\'dynamicStartDate0\')}'})"
      ></a>
    </div>
    <a class="fl mr10 blue add" href="javascript:;">新增</a>
  </div>
</div>
<script>
  //DEMO_JS_RUN_START
  export default {
    mounted() {
      var self = this
      $('#wrapper')
        .on('click', '.add', () => {
          var $tpl = $('#wrapper')
            .find('.row:eq(0)')
            .clone()
          var len = $('#wrapper').find('.row').length
          $tpl.find('input').val('')
          this.refleshRow($tpl, len)

          $tpl
            .find('.add')
            .removeClass('add')
            .addClass('delete')
            .text('删除')

          $tpl.appendTo($('#wrapper'))
        })
        .on('click', '.delete', function() {
          var i = $(this)
            .parents('.row')
            .index()
          $(this)
            .parents('.row')
            .remove()
          var $rows = $('#wrapper').find('.row')
          for (; i < $rows.length; i++) {
            var $row = $rows.eq(i)
            self.refleshRow($row, i)
          }
        })
    },
    methods: {
      refleshRow(row, i) {
        row.find('input:eq(0)').attr({
          id: 'dynamicStartDate' + i,
          name: 'dynamicStartDate' + i,
          onclick:
            "WdatePicker({readOnly: true,maxDate: '#F{$dp.$D(\\'dynamicEndDate" +
            i +
            "\\')}'})"
        })
        row.find('.wdate-ico:eq(0)').attr({
          onclick:
            "WdatePicker({el: 'dynamicStartDate" +
            i +
            "',readOnly: true,maxDate: '#F{$dp.$D(\\'dynamicEndDate" +
            i +
            "\\')}'})"
        })
        row.find('input:eq(1)').attr({
          id: 'dynamicEndDate' + i,
          name: 'dynamicEndDate' + i,
          onclick:
            "WdatePicker({readOnly: true,minDate: '#F{$dp.$D(\\'dynamicStartDate" +
            i +
            "\\')}'})"
        })
        row.find('.wdate-ico:eq(1)').attr({
          onclick:
            "WdatePicker({el: 'dynamicEndDate" +
            i +
            "',readOnly: true,minDate: '#F{$dp.$D(\\'dynamicStartDate" +
            i +
            "\\')}'})"
        })
      }
    }
  }
  //DEMO_JS_RUN_END//DEMO_JS_SHOW_START
  $('#wrapper')
    .on('click', '.add', function() {
      var $tpl = $('#wrapper')
        .find('.row:eq(0)')
        .clone()
      var len = $('#wrapper').find('.row').length
      $tpl.find('input').val('')
      refleshRow($tpl, len)

      $tpl
        .find('.add')
        .removeClass('add')
        .addClass('delete')
        .text('删除')

      $tpl.appendTo($('#wrapper'))
    })
    .on('click', '.delete', function() {
      var i = $(this)
        .parents('.row')
        .index()
      $(this)
        .parents('.row')
        .remove()
      var $rows = $('#wrapper').find('.row')
      for (; i < $rows.length; i++) {
        var $row = $rows.eq(i)
        refleshRow($row, i)
      }
    })

  function refleshRow(row, i) {
    row.find('input:eq(0)').attr({
      id: 'dynamicStartDate' + i,
      name: 'dynamicStartDate' + i,
      onclick:
        "WdatePicker({readOnly: true,maxDate: '#F{$dp.$D(\\'dynamicEndDate" +
        i +
        "\\')}'})"
    })
    row.find('.wdate-ico:eq(0)').attr({
      onclick:
        "WdatePicker({el: 'dynamicStartDate" +
        i +
        "',readOnly: true,maxDate: '#F{$dp.$D(\\'dynamicEndDate" +
        i +
        "\\')}'})"
    })
    row.find('input:eq(1)').attr({
      id: 'dynamicEndDate' + i,
      name: 'dynamicEndDate' + i,
      onclick:
        "WdatePicker({readOnly: true,minDate: '#F{$dp.$D(\\'dynamicStartDate" +
        i +
        "\\')}'})"
    })
    row.find('.wdate-ico:eq(1)').attr({
      onclick:
        "WdatePicker({el: 'dynamicEndDate" +
        i +
        "',readOnly: true,minDate: '#F{$dp.$D(\\'dynamicStartDate" +
        i +
        "\\')}'})"
    })
  }
  //DEMO_JS_SHOW_END
</script>
```

:::

:::tip
更多使用说明请参考官方文档：<a href="http://www.my97.net/demo/index.htm" target="_blank">http://www.my97.net/demo/index.htm</a>
:::
