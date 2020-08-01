import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  install(Vue, options) {
    Vue.component("layout", Layout);
    Vue.component("sidebar", Sidebar);
  }
};
