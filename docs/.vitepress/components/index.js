import Demo from './Demo.vue';

import Feature1 from './Feature1.vue';

export const install = (app) => {
  app.component('Demo', Demo);
  app.component('Feature1', Feature1);
};
