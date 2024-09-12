import 'default-passive-events';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

import vue3SemiAiEngine from 'vue3-semi-ai-engine/components/install';

// 修改分页器默认文字
zhCn.el.pagination.total = '共 {total} 条';
zhCn.el.pagination.goto = '跳至';
zhCn.el.pagination.pagesize = '条/页';
zhCn.el.pagination.pageClassifier = '页';

const app = createApp(App);
app
  .use(createPinia())
  .use(ElementPlus, { locale: zhCn })
  .use(vue3SemiAiEngine)
  .use(router)
  .mount('#app');
