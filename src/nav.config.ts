export default [
  {
    name: '新系统',
    icon: 'iconfont iconsystem',
    path: '/new-sys',
    children: [
      {
        name: '颜色',
        path: '/color'
      },
      {
        name: '字体',
        path: '/typography'
      },
      {
        name: '按钮',
        path: '/button'
      },
      {
        name: '标签',
        path: '/label'
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
        name: '上传',
        path: '/pccpt-upload'
      },
      {
        name: 'daterangepicker',
        path: '/pccpt-daterangepicker'
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
        path: '/wap-menu'
      }
    ]
  },
  {
    name: '轻应用',
    icon: 'iconfont iconqingyingyongxuanzhong',
    path: '/qyy',
    children: [
      {
        name: '房源网API',
        path: '/fyyapi'
      },
      {
        name: '乐办公API',
        path: '/lbgapi'
      }
    ]
  }
]
