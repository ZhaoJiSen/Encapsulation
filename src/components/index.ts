import type { App } from 'vue';
import ChooseArea from './chooseArea';
import ChooseIcon from './chooseIcon';

const components = [ChooseArea, ChooseIcon];

export default {
  install(app: App) {
    components.forEach(component => {
      app.use(component);
    });
  }
};
