import DefaultTheme from 'vitepress/theme';
import type { App } from 'vue';
import { install as installComponents } from '../components';
import { install } from '@/index';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    install(app);
    installComponents(app);
  },
};
