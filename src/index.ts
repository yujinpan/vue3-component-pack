// 主组件
import type { App } from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
import './styles/index.scss';

export const install = (vue: App) => {
  vue.component('HelloWorld', HelloWorld);
};

// Vue.component()
export default HelloWorld;
