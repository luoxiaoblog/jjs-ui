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
    redirect: '/component/message',
    component: load('component'),
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
    if (navConfig.children) {
      level1.children.forEach((level2: any) => {
        level2.parentPath = path
        if (level2.groups) {
          level2.groups.forEach((group: any) => {
            group.list.forEach((groupItem: any) => {
              addRoute(groupItem)
            })
          })
        } else if (level2.children) {
          level2.children.forEach((level3: any) => {
            addRoute(level3)
          })
        } else {
          addRoute(level2)
        }
        addRoute(level2)
      })
    } else {
      addRoute(level1)
    }
  })
  // navConfig.forEach((nav: any) => {
  //   if (nav.href) return
  //   if (nav.groups) {
  //     nav.groups.forEach((group: any) => {
  //       group.list.forEach((nav: any) => {
  //         addRoute(nav)
  //       })
  //     })
  //   } else if (nav.children) {
  //     nav.children.forEach((nav: any) => {
  //       addRoute(nav)
  //     })
  //   } else {
  //     addRoute(nav)
  //   }
  // })
  function addRoute(page: any) {
    let docPath = page.parentPath
      ? page.parentPath.slice(1) + '/' + page.path
      : page.path.slice(1)
    const component = loadDocs(docPath)
    let child = {
      path: page.path.slice(1),
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
    meta: {},
    name: 'resource',
    component: load('resource')
  }

  let indexRoute = {
    path: '/', // 首页
    meta: {},
    name: 'home',
    component: load('index')
  }

  return [guideRoute, resourceRoute, indexRoute]
}

route = route.concat(generateMiscRoutes())

route = route.concat([
  {
    path: '*',
    redirect: '/'
  }
])

export default route
