import navConfig from '../nav.config'

const load = (path: String): any => {
  return (r: any) =>
    require.ensure([], () => r(require(`../views/${path}.vue`)), '')
}

const loadDocs = (path: String): any => {
  return (r: any) =>
    require.ensure([], () => r(require(`../docs/${path}.md`)), '')
}

const registerRoute = (navConfig: any): any => {
  let route: any[] = []
  route.push({
    path: '/component', // 组件
    redirect: '/component/new-sys/color',
    component: load('component'),
    meta: {
      title: '组件'
    },
    children: [
      {
        name: 'message',
        path: 'message',
        component: loadDocs('message')
      }
    ]
  })
  navConfig.forEach((level1: any) => {
    let path = level1.path
    if (level1.href) return
    if (level1.children) {
      level1.children.forEach((level2: any) => {
        if (level2.groups) {
          level2.groups.forEach((groupItem: any) => {
            groupItem.parentPath = path
            addRoute(groupItem)
          })
        } else {
          level2.parentPath = path
          addRoute(level2)
        }
      })
    } else {
      addRoute(level1)
    }
  })
  function addRoute(page: any) {
    let docPath = page.parentPath
      ? page.parentPath.slice(1) + page.path
      : page.path.slice(1)
    const component = loadDocs(docPath)
    let child = {
      path: docPath,
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    }

    route[0].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)

const generateMiscRoutes = (): any[] => {
  let guideRoute = {
    path: '/guide', // 指南
    redirect: '/guide/design',
    component: load('guide'),
    children: [
      {
        path: 'design', // 设计原则
        name: 'guide-design',
        meta: {},
        component: load('design')
      },
      {
        path: 'nav', // 导航
        name: 'guide-nav',
        meta: {},
        component: load('nav')
      }
    ]
  }

  let resourceRoute = {
    path: '/resource', // 资源
    meta: {
      title: ''
    },
    name: 'resource',
    component: load('resource')
  }

  let indexRoute = {
    path: '/', // 首页
    meta: {
      title: '首页'
    },
    name: 'home',
    component: load('index')
  }

  let templateRoute = {
    path: '/template',
    meta: {
      title: '模板'
    },
    name: 'template',
    component: load('template')
  }

  let shareRoute = {
    path: '/share',
    meta: {
      title: '分享'
    },
    name: 'share',
    component: load('share')
  }

  let changeLogRoute = {
    path: '/changelog',
    meta: {
      title: '更新日志'
    },
    name: 'changeLog',
    component: loadDocs('changelog')
  }

  return [
    guideRoute,
    resourceRoute,
    indexRoute,
    templateRoute,
    shareRoute,
    changeLogRoute
  ]
}

route = route.concat(generateMiscRoutes())

route = route.concat([
  {
    path: '*',
    redirect: '/'
  }
])

export default route
