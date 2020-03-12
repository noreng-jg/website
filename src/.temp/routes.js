export default [
  {
    path: "/blog/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/home/leonardo/Documents/gridsome/website/src/templates/BlogPost.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/leonardo/Documents/gridsome/website/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/leonardo/Documents/gridsome/website/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/leonardo/Documents/gridsome/website/node_modules/gridsome/app/pages/404.vue")
  }
]
