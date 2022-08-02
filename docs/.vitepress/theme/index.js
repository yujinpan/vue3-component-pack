import DefaultTheme from 'vitepress/theme';
import { install as installComponents } from '../components';
import { install } from '../../../lib';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    install(app);
    installComponents(app);
  },
};
