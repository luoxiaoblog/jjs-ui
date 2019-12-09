## 标签

### 纯色标签

:::demo

```html
<style>
.color-label {
  font-size: 12px;
  padding: 0 5px;
  color: #fff;
  border-radius: 2px;
}

.color-label.color1 {
  background-color: #7ed321;
}

.color-label.color2 {
  background-color: #f5a623;
}

.color-label.color3 {
  background-color: #4a90e2;
}
</style>

<span class="fl mr10 color-label color1">代理中</span>
<span class="fl mr10 color-label color2">标准合同</span>
<span class="fl mr10 color-label color3">红本在手</span>
```

:::

### 带边框标签

:::demo

```html
<style>
.border-label {
  font-size: 12px;
  padding: 0 5px;
  border-radius: 2px;
}

.border-label.fill-color {
  background-color: #e7f2fe;
  color: #688fbf;
}

.border-label.red {
  color: #ee3939;
  border: 1px solid #ee3939;
}

.border-label.green {
  color: #37990d;
  border: 1px solid #ee3939;
}

.border-label.yellow {
  color: #f5a623;
  border: 1px solid #ee3939;
}
</style>

<span class="fl mr10 border-label fill-color">标准合同</span>
<span class="fl mr10 border-label red">标准合同</span>
<span class="fl mr10 border-label green">标准合同</span>
<span class="fl mr10 border-label yellow">标准合同</span>
```

:::

### 快速标签

:::demo

```html
<style>
.quick-label {
  font-size: 12px;
  line-height: 22px;
  color: #4c4d50;
  padding: 0 8px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #e3e3e3;
}

.quick-label:hover {
  background-color: #eceeef;
}

.quick-label.curr {
  color: #0275d8;
  border: 1px solid #0275d8;
}
</style>

<span class="fl mr10 quick-label">五星房源</span>
<span class="fl mr10 quick-label">四星房源</span>
<span class="fl mr10 quick-label curr">三星房源</span>
```

:::
