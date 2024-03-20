import type { App } from 'vue';
import ChooseArea from './chooseArea';
import ChooseIcon from './chooseIcon';
import Trend from "@/components/trend";

const components = [ChooseArea, ChooseIcon, Trend];

export default {
  install(app: App) {
    components.forEach(component => {
      app.use(component);
    });
  }
};
