## 标签页 Tabs

新系统中应用到的所有标签页

### 列表页的标签页

:::demo

```html
<div id="main-content">
  <div
    class="panel-body panel-border"
    style="background-color: #fff;padding:0;border: 1px solid #ddd;border-top: none;min-height: 200px;"
  >
    <!-- 列表页 标签页 -->
    <div
      class="clearfix sub-nav fl"
      style="width:100%;margin:0;border-radius:0;"
    >
      <a class="curr" style="margin-left:-1px;" href="javascript:;">标签页一</a>
      <a href="javascript:;">标签页二</a>
      <a href="javascript:;">标签页三</a>
      <div class="clearfix mb10 fr">
        <button
          type="button"
          class="fr ml5 btn btn-primary"
          id="add-recode"
          style="position: relative"
        >
          按钮
        </button>
        <button
          type="button"
          class="fr ml5 btn btn-primary"
          id="add-dev-new"
          style="position: relative"
        >
          按钮
        </button>
        <button
          type="button"
          class="fr ml5 btn btn-primary"
          id="bq-project"
          style="position: relative"
        >
          按钮
        </button>
      </div>
    </div>
    <!-- content -->
    <div style="margin-top:36px;" class="clearfix">
      <h1 class="text-center">tab content</h1>
    </div>
  </div>
</div>
```

:::

### 列表页的两层标签页

:::demo

```html
<div id="main-content">
  <!-- 列表页 两层标签页 -->
  <div
    class="panel-body panel-border"
    style="background-color: #fff;padding:0;border: 1px solid #ddd;border-top: none;min-height: 200px; margin-top: 10px;"
  >
    <div
      class="clearfix sub-nav fl"
      style="width:100%;margin:0;border-radius:0;"
    >
      <a class="curr" style="margin-left:-1px;" href="javascript:;">标签页一</a>
      <a href="javascript:;">标签页二</a>
      <a href="javascript:;">标签页三</a>
      <div class="clearfix mb10 fr">
        <button
          type="button"
          class="fr ml5 btn btn-primary"
          id="add-recode"
          style="position: relative"
        >
          按钮
        </button>
        <button
          type="button"
          class="fr ml5 btn btn-primary"
          id="add-dev-new"
          style="position: relative"
        >
          按钮
        </button>
        <button
          type="button"
          class="fr ml5 btn btn-primary"
          id="bq-project"
          style="position: relative"
        >
          按钮
        </button>
      </div>
    </div>
    <div class="clearfix navlist-box">
      <a class="curr"><span class="toDealwith">二层标签页</span></a>
      <a class=""><span class="toConfirm">二层标签页</span></a>
    </div>
    <!-- content -->
    <div class="clearfix">
      <h1 class="text-center">tab content</h1>
    </div>
  </div>
</div>
```

:::

### 详情页的标签页

:::demo

```html
<div id="main-content">
  <!-- 详情页 标签页 -->
  <div
    class="panel"
    style="margin: 10px 0; border-radius: 0;background-color: transparent;"
  >
    <div class="clearfix artical-nav artical-navbar">
      <a href="javascript:;" class="curr">标签页一</a>
      <a href="javascript:;">标签页二</a>
      <a href="javascript:;">标签页三</a>
    </div>
  </div>
  <div class="panel clearfix" style="margin: 0; min-height: 160px;">
    <h1 class="text-center">tab content</h1>
  </div>
</div>
```

:::
