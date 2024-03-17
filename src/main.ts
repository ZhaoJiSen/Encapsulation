import { createApp } from 'vue';
import { toLine } from '@/utils/index.ts';

import App from './App.vue';
import router from './router/index.ts';
import ElementUI from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIcons from '@element-plus/icons-vue';
import myUi from '@/components/index.ts'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIcons)) {
  // 注册成全局组件
  app.component(`el-icon-${toLine(key)}`, component);
}

app.use(myUi);
app.use(router).use(ElementUI).mount('#app');
