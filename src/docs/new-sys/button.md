## 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法

:::demo 使用`btn`、`btn-primary`、`btn-white` class 来定义按钮的样式，使用`btn-primary`class 则按钮为主要按钮，使用`btn-white`class 则按钮为次要按钮。

```html
<button class="fl mr10 btn btn-primary">主要按钮</button>
<a class="fl mr10 btn btn-primary" href="#" role="button">主要按钮</a>
<button class="fl mr10 btn btn-white">次要按钮</button>
<a class="fl btn btn-white" href="#" role="button">次要按钮</a>
```

:::

### 禁用状态

按钮不可用状态。

:::demo 使用`disabled`class 来定义按钮的禁用状态，建议使用`button`不使用`a`。

```html
<button class="fl mr10 btn btn-primary disabled">主要按钮</button>
<button class="fl mr10 btn btn-white disabled">次要按钮</button>
```

:::

### 文字按钮

没有边框和背景色的按钮。

:::demo

```html
<a class="fl mr10 blue" href="javascript:;">文字按钮</a>
<a class="blue" style="color: #c0c4cc; cursor: not-allowed;" href="javascript:;">文字按钮</a>
```

:::
