export default [
  {
    name: '新系统',
    icon: 'iconfont iconsystem',
    path: '/new-sys',
    children: [
      {
        name: '布局',
        path: '/layout'
      },
      {
        name: '表单',
        path: '/form'
      },
      {
        name: '表格',
        path: '/table'
      },
      {
        name: '详情',
        path: '/detail'
      },
      {
        name: '弹窗',
        path: '/dialog'
      }
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
        name: '轻应用子菜单',
        path: '/qyy-menu'
      }
    ]
  }
]
