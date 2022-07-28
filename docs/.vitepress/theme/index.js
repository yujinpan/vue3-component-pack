import DefaultTheme from 'vitepress/theme';
import { install } from '../components';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    install(app);
  },
};
