import NProgress from 'nprogress';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

NProgress.configure({ showSpinner: false });

// 默认路由(框架级别, 除了home的redirect, 其它都无须改)
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    redirect: '/user-page', // 配置首页的默认路由
    children: [
      {
        path: '/user-page',
        name: '演示例子',
        component: () => import('@/pages/user-page/index.vue'),
      },
    ],
  },

  {
    path: '/404',
    meta: {
      title: '找不到此页面',
    },
    component: () => import('@/pages/error/404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async () => {
  NProgress.start();
  return true;
});

// 路由加载后
router.afterEach(() => {
  NProgress.done();
});

export default router;
