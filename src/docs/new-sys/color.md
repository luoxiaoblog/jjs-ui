<script>
  import bus from '@/bus'
  import { tintColor } from './color.js'

  const varMap = {
    'primary': '$--color-primary',
    'success': '$--color-success',
    'warning': '$--color-warning',
    'danger': '$--color-danger',
    'info': '$--color-info',
    'white': '$--color-white',
    'black': '$--color-black',
    'textPrimary': '$--color-text-primary',
    'textRegular': '$--color-text-regular',
    'textSecondary': '$--color-text-secondary',
    'textPlaceholder': '$--color-text-placeholder',
    'borderBase': '$--border-color-base',
    'borderLight': '$--border-color-light',
    'borderLighter': '$--border-color-lighter',
    'borderExtraLight': '$--border-color-extra-light'
  }

  const original = {
    primary: '#3188E8',
    menuBg: '#238DFD',
    success: '#67C23A',
    warning: '#E6A23C',
    danger: '#F56C6C',
    info: '#909399',
    white: '#FFFFFF',
    black: '#000000',
    textPrimary: '#000000',
    textRegular: '#333333',
    textSecondary: '#666666',
    textPlaceholder: '#999999',
    textTipRed: '#EE3939',
    textTipGreen: '#37990D',
    textTipYellow: '#F5A623',
    borderTable: '#DDDDDD',
    borderForm: '#CCCCCC',
    borderButton: '#BBBBBB',
    borderBg: '#E3E3E3',
    borderBase: '#DCDFE6',
    borderLight: '#E4E7ED',
    borderLighter: '#EBEEF5',
    borderExtraLight: '#F2F6FC'
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
        primary: '',
        menuBg: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
        white: '',
        black: '',
        textPrimary: '',
        textRegular: '',
        textSecondary: '',
        textPlaceholder: '',
        textTipRed: '',
        textTipGreen: '',
        textTipYellow: '',
        borderTable: '',
        borderForm: '',
        borderButton: '',
        borderBg: '',
        borderBase: '',
        borderLight: '',
        borderLighter: '',
        borderExtraLight: ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          Object.keys(original).forEach((o) => {
            if (value[varMap[o]]) {
              this[o] = value[varMap[o]]
            } else {
              this[o] = original[o]
            }
          })
        }
      }
    },
  }
</script>

## Color 色彩

为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

主题颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="10" :xs="{span: 12}">
    <div class="demo-color-box" :style="{ background: primary }">主色
      <div class="value">#3188E8</div>
      <div class="bg-color-sub" :style="{ background: tintColor(primary, 0.9) }">
        <div
          class="bg-blue-sub-item"
          v-for="(item, key) in Array(8)"
          :key="key"
          :style="{ background: tintColor(primary, (key + 1) / 10) }"
        ></div>
      </div>
    </div>
  </el-col>

   <el-col :span="10" :xs="{span: 12}">
    <div class="demo-color-box" :style="{ background: menuBg }">菜单底色
      <div class="value">#238DFD</div>
      <div class="bg-color-sub" :style="{ background: tintColor(primary, 0.9) }">
        <div
          class="bg-blue-sub-item"
          v-for="(item, key) in Array(8)"
          :key="key"
          :style="{ background: tintColor(primary, (key + 1) / 10) }"
        ></div>
      </div>
    </div>
  </el-col>
</el-row>

### 文字用色

用于各种文本

<el-row :gutter="12">
   <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
      :style="{ background: textPrimary }"
      >主要文字<div class="value">#000000</div>
      </div>
   </el-col>
   <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
      :style="{ background: textRegular }"
      >正文文字<div class="value">#333333</div>
        <div 
          class="bg-color-sub"
        >
          <div 
            class="bg-textRegular-sub-item" 
            v-for="(item, key) in Array(2)"
            :key="key"
            :style="{ background: tintColor(success, (key + 8) / 10) }"
              >
          </div>
        </div>
      </div>
   </el-col>
   <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
      :style="{ background: textSecondary }"
      >辅助文字<div class="value">#666666</div>
      </div>
   </el-col>
   <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
      :style="{ background: textPlaceholder }"
      >占位文字<div class="value">#999999</div>
      </div>
   </el-col>

   <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
      :style="{ background: textTipRed }"
      >表格特别说明文字、特别重要的文字提示<div class="value">#EE3939</div>
      </div>
   </el-col>
   <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
      :style="{ background: textTipGreen }"
      >表格特别说明文字<div class="value">#37990D</div>
      </div>
   </el-col>
   <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
      :style="{ background: textTipYellow }"
      >其他说明文字<div class="value">#F5A623</div>
      </div>
   </el-col>
</el-row>

### 边框、背景、线条

边框、背景、线条用色

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: borderTable }"
    >线条、分割线、表格线<div class="value">#DDDDDD</div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: borderForm }"
    >表单边框<div class="value">#CCCCCC</div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: borderButton }"
    >按钮边框<div class="value">#BBBBBB</div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: borderBg }"
    >背景色<div class="value">#E3E3E3</div>
    </div>
  </el-col>
</el-row>
