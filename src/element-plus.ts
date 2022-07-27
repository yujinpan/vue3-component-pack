import ElementPlus from 'element-plus';
import type { App } from 'vue';

const install = (app: App) => {
  app.use(ElementPlus);
};

export default install;
