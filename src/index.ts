// 主组件
import HelloWorld from '@/components/HelloWorld.vue';
import './styles/index.scss';
import type { App } from 'vue';

export const install = (vue: App) => {
  vue.component('HelloWorld', HelloWorld);
};

// Vue.component()
export default HelloWorld;
