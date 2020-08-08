import Layout from "./components/Layout.vue";
import SidebarMenu from "./components/Menu/SidebarMenu.vue";
import SidebarMenuItem from "./components/Menu/SidebarMenuItem.vue";

export default {
  install(Vue, options) {
    Vue.component("layout", Layout);
    Vue.component("sidebar-menu", SidebarMenu);
    Vue.component("sidebar-menu-item", SidebarMenuItem);
  }
};
