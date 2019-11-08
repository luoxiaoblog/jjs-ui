<script>
  import bus from '../../bus'
  const varMap = [
    '$--font-size-extra-large',
    '$--font-size-large',
    '$--font-size-medium',
    '$--font-size-base',
    '$--font-size-small',
    '$--font-size-extra-small', 
    '$--font_size-detail-title',
    '$--font-size-detail-tab',
    '$--font-size-small-title',
    '$--font-size-normal',
    '$--font-size-list'
  ]
  const original = {
    'font_size_extra_large': '20px',
    'font_size_large': '18px',
    'font_size_medium': '16px',
    'font_size_base': '14px',
    'font_size_small': '13px',
    'font_size_extra_small': '12px',

    'font_size_detail_title': '16px',
    'font_size_detail_tab': '15px',
    'font_size_small_title': '14px',
    'font_size_normal': '13px',
    'font_size_list': '12px'
  }
  export default {
    created() {
      bus.$on('user-theme-config-update', this.setGlobal)
    },
    mounted() {
      this.setGlobal()
    },
    methods: {
      tintColor(color, tint) {
        return tintColor(color, tint)
      },
      setGlobal() {
        if (window.userThemeConfig) {
          this.global = window.userThemeConfig.global
        }
      }
    },
    data() {
      return {
        global: {},
        'font_size_extra_large': '',
        'font_size_large': '',
        'font_size_medium': '',
        'font_size_base': '',
        'font_size_small': '',
        'font_size_extra_small': '',

        'font_size_detail_title': '',
        'font_size_detail_tab': '',
        'font_size_small_title': '',
        'font_size_normal': '',
        'font_size_list': ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          varMap.forEach((v) => {
            const key = v.replace('$--', '').replace(/-/g, '_')
            if (value[v]) {
              this[key] = value[v]
            } else {
              this[key] = original[key]
            }
          })
        }
      }
    },
  }
</script>

## 字体 Typography

主体字体：宋体，（微软雅黑仅限用于头部菜单字体）

<table class="demo-typo-size">
  <tbody>
  <tr
    >
      <td>层级</td>
      <td>字体大小</td>
      <td class="color-dark-light">举例</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_detail_title }"
    >
      <td>详情大标题</td>
      <td class="color-dark-light">{{font_size_detail_title}}</td>
      <td>leyoujia乐有家123</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_detail_tab }"
    >
      <td>详情页页签</td>
      <td class="color-dark-light">{{font_size_detail_tab}}</td>
      <td>leyoujia乐有家123</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_small_title }"
    >
      <td>特殊小标题</td>
      <td class="color-dark-light">{{font_size_small_title}}</td>
      <td>leyoujia乐有家123</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_normal }"
    >
      <td>常规字号</td>
      <td class="color-dark-light">{{font_size_normal}}</td>
      <td>leyoujia乐有家123</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_list }"
    >
      <td>列表页</td>
      <td class="color-dark-light">{{font_size_list}}</td>
      <td>leyoujia乐有家123</td>
    </tr>
  </tbody>
</table>

### Font-family 代码

```css
font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
```
