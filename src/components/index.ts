import type { App } from 'vue';
import ChooseArea from './chooseArea';
import ChooseIcon from './chooseIcon';
import Trend from '@/components/trend';
import Notification from '@/components/notification';

const components = [ChooseArea, ChooseIcon, Trend, Notification];

export default {
  install(app: App) {
    components.forEach(component => {
      app.use(component);
    });
  }
};
