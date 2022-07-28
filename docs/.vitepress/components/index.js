import Demo from '../components/Demo.vue';
import HelloWorld from '../components/HelloWorld.vue';

export const install = (app) => {
  app.component('Demo', Demo);
  app.component('HelloWorld', HelloWorld);
};
