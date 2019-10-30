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
    redirect: '/component/index',
    component: load('component'),
    children: [
      {
        name: 'index',
        path: 'index',
        component: loadDocs('index')
      }
    ]
  })
  navConfig.forEach((nav: any) => {
    if (nav.href) return
    if (nav.groups) {
      nav.groups.forEach((group: any) => {
        group.list.forEach((nav: any) => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach((nav: any) => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })
  function addRoute(page: any) {
    const component = loadDocs(page.path.slice(1))
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
