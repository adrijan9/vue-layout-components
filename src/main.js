import VLCLayout from "./components/Layout/VLCLayout";
import VLCSidebarMenu from "./components/SidebarMenu/VLCSidebarMenu";
import VLCSidebarMenuItem from "./components/SidebarMenu/VLCSidebarMenuItem";
import VLCInput from "./components/Form/VLCInput";

export default {
  install(Vue, options) {
    Vue.component("vlc-layout", VLCLayout);
    Vue.component("vlc-sidebar-menu", VLCSidebarMenu);
    Vue.component("vlc-sidebar-menu-item", VLCSidebarMenuItem);
    Vue.component("vlc-input", VLCInput);
  }
};