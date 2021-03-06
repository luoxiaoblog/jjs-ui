export default [
  {
    name: '新系统',
    icon: 'iconfont iconsystem',
    path: '/new-sys',
    meta: {
      parent: '/',
      title: '新系统'
    },
    children: [
      {
        name: '颜色 Color',
        path: '/color',
        meta: {
          title: '颜色'
        }
      },
      {
        name: '字体 Typography',
        path: '/typography',
        meta: {
          title: '字体'
        }
      },
      {
        name: '按钮 Button',
        path: '/button',
        meta: {
          title: '按钮'
        }
      },
      {
        name: '标签 Tag',
        path: '/label',
        meta: {
          title: '标签'
        }
      },
      // {
      //   name: '标签页 ',
      //   path: '/tabs',
      //   meta: {
      //     title: '标签页'
      //   }
      // },
      {
        name: '单选框 Radio',
        path: '/radio',
        meta: {
          title: '单选框'
        }
      },
      {
        name: '多选框 Checkbox',
        path: '/checkbox',
        meta: {
          title: '多选框'
        }
      },
      {
        name: '可搜索下拉框 ComboSelect',
        path: '/comboSelect',
        meta: {
          title: '可搜索下拉框'
        }
      },
      {
        name: '表格 Table',
        path: '/table',
        meta: {
          title: '表格'
        }
      },
      {
        name: '日期选择器 Datepicker',
        path: '/datetimepicker',
        meta: {
          title: '日期选择器'
        }
      },
      {
        name: '表单 Form',
        path: '/form',
        meta: {
          title: '表单'
        }
      },
      {
        name: '指引 OperGuide',
        path: '/zhiyin',
        meta: {
          title: '指引'
        }
      },
      {
        name: '消息提示 Message',
        path: '/message',
        meta: {
          title: '消息提示'
        }
      },
      {
        name: '弹框 MessageBox',
        path: '/messageBox',
        meta: {
          title: '弹框'
        }
      },
      {
        name: '对话框 Dialog',
        path: '/dialog',
        meta: {
          title: '对话框'
        }
      },
      {
        name: '上传 Upload',
        path: '/upload',
        meta: {
          title: '上传'
        }
      },
      {
        name: '图片预览 Viewer',
        path: '/viewer',
        meta: {
          title: '图片预览'
        }
      },
      {
        name: '图片裁剪 Cropper',
        path: '/cropper',
        meta: {
          title: '图片裁剪'
        }
      },
      {
        name: '富文本框 wangEditor',
        path: '/richTextEditor',
        meta: {
          title: '富文本框'
        }
      },
      {
        name: '加载 Loading',
        path: '/loading',
        meta: {
          title: '加载'
        }
      },
      {
        name: '树形控件 Tree',
        path: '/tree',
        meta: {
          title: '树形控件'
        }
      },
      {
        name: '标记 Badge',
        path: '/badge',
        meta: {
          title: '标记'
        }
      },
      {
        name: '步骤条 Steps',
        path: '/steps',
        meta: {
          title: '步骤条'
        }
      },
      {
        name: '时间线 Timeline',
        path: '/timeline',
        meta: {
          title: '时间线'
        }
      },
      {
        name: '文字提示 Tooltip',
        path: '/tooltip',
        meta: {
          title: '文字提示'
        }
      },
      {
        name: '公司、人员、部门自动补全',
        path: '/autoComplugins',
        meta: {
          title: '公司、人员、部门自动补全'
        }
      }

      // {
      //   groupName: '组件',
      //   groups: [
      //     {
      //       name: '可搜索下拉框 combo.select',
      //       path: '/comboSelect'
      //     }
      //     // {
      //     //   name: '单选、多选美化插件 ICheck',
      //     //   path: '/icheck'
      //     // },
      //     // {
      //     //   name: '日期选择器 Wdate Picker',
      //     //   path: '/wdatePicker'
      //     // },
      //     // {
      //     //   name: '弹窗 Dialog',
      //     //   path: '/dialog'
      //     // },
      //     // {
      //     //   name: '自动补全 AutoComplete',
      //     //   path: '/autoComplete'
      //     // },
      //     // {
      //     //   name: '公司、人员、部门自动补全 AutoComplete',
      //     //   path: '/autoComplete2'
      //     // },
      //     // {
      //     //   name: '表格排序 TableSort',
      //     //   path: '/tableSort'
      //     // },
      //     // {
      //     //   name: '多选下拉 CheckSelect',
      //     //   path: '/checkSelect'
      //     // },
      //     // {
      //     //   name: '多选下拉含搜索 MultiSelect',
      //     //   path: '/multiSelect'
      //     // }
      //   ]
      // }
    ]
  },
  {
    name: '房源网 PC',
    icon: 'iconfont iconpc-f',
    path: '/fang-pc',
    children: [
      {
        name: '上传 Upload',
        path: '/pccpt-upload',
        meta: {
          parent: '/fang-pc'
        }
      },
      {
        name: '日期选择器 daterangepicker',
        path: '/pccpt-daterangepicker',
        meta: {
          parent: '/fang-pc'
        }
      }
    ]
  },
  {
    name: '房源网 WAP',
    icon: 'iconfont iconshouji',
    path: '/fang-wap',
    children: [
      {
        name: '子菜单',
        path: '/wap-menu',
        meta: {
          parent: '/fang-wap'
        }
      }
    ]
  },
  {
    name: '轻应用',
    icon: 'iconfont iconqingyingyongxuanzhong',
    path: '/qyy',
    children: [
      {
        name: '房源网接口',
        path: '/fyyapi',
        meta: {
          parent: '/qyy'
        }
      },
      {
        name: '乐办公接口',
        path: '/lbgapi',
        meta: {
          parent: '/qyy'
        }
      }
    ]
  }
]
