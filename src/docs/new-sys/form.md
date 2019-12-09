## 表单

表单行高28px，所有表单框圆角2px

表单应整齐排列，一等分、二等分、三等分，均匀分布，默认两列。根据需求，产品自定几列。表单值都是左对齐，距离左边5px

表单上下间距10px

单位统一放表单外面，距右边5px

### 排版

一等分、二等分、三等分

:::demo

```html
<style>
.form-item {
  margin-bottom: 10px;
}

label.form-item__label {
  width: 70px;
  float: left;
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
}

.form-item__content {
  position: relative;
  margin-left: 70px;
}
</style>


<form class="line-28">
  <!-- 一列 -->
  <div class="form-item">
    <label class="form-item__label">建筑面积</label>
    <div class="form-item__content">
      <input type="text" class="form-item__input" placeholder="请输入建筑面积" autocomplete="off"><span>m²</span>
    </div>
  </div>
  <!-- 、二列 -->
  <div class="row">
    <div class="form-item col-xs-6">
      <label class="form-item__label">建筑面积</label>
      <div class="form-item__content">
        <input type="text" class="form-item__input" placeholder="请输入建筑面积" autocomplete="off">
      </div>
    </div>
    <div class="form-item col-xs-6">
      <label class="form-item__label">建筑面积</label>
      <div class="form-item__content">
        <input type="text" class="form-item__input" placeholder="请输入建筑面积" autocomplete="off">
      </div>
    </div>
  </div>
  <!-- 三列 -->
  <div class="row">
    <div class="form-item col-xs-4">
      <label class="form-item__label">建筑面积</label>
      <div class="form-item__content">
        <input type="text" class="form-item__input" placeholder="请输入建筑面积" autocomplete="off">
      </div>
    </div>
    <div class="form-item col-xs-4">
      <label class="form-item__label">建筑面积</label>
      <div class="form-item__content">
        <input type="text" class="form-item__input" placeholder="请输入建筑面积" autocomplete="off">
      </div>
    </div>
    <div class="form-item col-xs-4">
      <label class="form-item__label">建筑面积</label>
      <div class="form-item__content">
        <input type="text" class="form-item__input" placeholder="请输入建筑面积" autocomplete="off">
      </div>
    </div>
  </div>
</form>
```
:::


### 典型表单

包括各种表单项，比如输入框、选择器、单选框、多选框等。

:::demo

```html
<style>
.form-item {
  margin-bottom: 10px;
}

label.form-item__label {
  width: 70px;
  float: left;
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
}

.form-item__content {
  position: relative;
  margin-left: 70px;
}

.form-item__input {
  margin-right: 5px;
}

textarea {
  resize: vertical;
}
</style>


<form class="line-28" style="width: 480px;">
  <div class="form-item">
    <label class="form-item__label">活动名称</label>
    <div class="form-item__content">
      <input type="text" placeholder="请输入活动名称" autocomplete="off">
    </div>
  </div>
  <div class="form-item">
    <label class="form-item__label">活动区域</label>
    <div class="form-item__content clearfix">
      <select style="width: 138px;">
        <option>区域一</option>
        <option>区域二</option>
      </select>
    </div>
  </div>
  <div class="form-item">
    <label class="form-item__label">活动时间</label>
    <div class="clearfix form-item__content">
      <div class="fl relative">
        <input class="w100" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" type="text" id="date1" name="date1" value="" placeholder="选择日期" autocomplete="off">
        <a class="wdate-ico" href="javascript:;" onclick="WdatePicker({el:'date1', dateFmt:'yyyy-MM-dd'})"><i class="fa fa-calendar"></i></a>
      </div>
      <span class="fl">-</span>
      <div class="fl relative">
        <input class="w100" onclick="WdatePicker({dateFmt:'HH:mm:ss'})" type="text" id="time1" name="time1" value="" placeholder="选择时间" autocomplete="off">
        <a class="wdate-ico" href="javascript:;" onclick="WdatePicker({el:'timeStart', dateFmt:'HH:mm:ss'})"><i class="fa fa-calendar"></i></a>
      </div>
    </div>
  </div>
  <div class="form-item">
    <label class="form-item__label">活动性质</label>
    <div class="clearfix form-item__content">
      <span class="fl mr10">
        <input type="checkbox" name="a" class="fl mr5">
        <span class="fl">美食/餐厅线上活动</span>
      </span>
      <span class="fl">
        <input type="checkbox" name="a" class="fl mr5">
        <span class="fl">线下主题活动</span>
      </span>
    </div>
  </div>
  <div class="form-item">
    <label class="form-item__label">特殊资源</label>
    <div class="clearfix form-item__content">
      <span class="fl mr10">
        <input type="radio" name="b" class="fl mr5">
        <span class="fl">线上品牌商赞助</span>
      </span>
      <span class="fl">
        <input type="radio" name="b" class="fl mr5">
        <span class="fl">线下场地免费</span>
      </span>
    </div>
  </div>
  <div class="form-item">
    <label class="form-item__label">活动形式</label>
    <div class="clearfix form-item__content">
      <textarea autocomplete="off" style="min-height: 28px; margin-top: 0px; margin-bottom: 0px; height: 101px;"></textarea>
    </div>  
  </div>
  <div class="text-center">
    <button class="btn btn-primary">提交</button>
  </div>
</form>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    this.initiCheck('body input')
    $('select').comboSelect()
  },
  methods: {
    initiCheck(obj){
      $(obj).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
      })
    }
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
initiCheck('body input')
$('select').comboSelect()

function initiCheck(obj){
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
