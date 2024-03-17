import type { App } from 'vue';
import ChooseArea from "./src/index.vue";

// 让组件可以通过 use 的形式使用
export default {
    install(app:App) {
        app.component('choose-area', ChooseArea);
    }
}