import VLCLayout from "./components/Layout/VLCLayout";
import VLCSidebarMenu from "./components/SidebarMenu/VLCSidebarMenu";
import VLCSidebarMenuItem from "./components/SidebarMenu/VLCSidebarMenuItem";
import VLCAlert from "./components/Alert/VLCAlert";
import VLCFromGroup from "./components/Form/VLCFromGroup";
import VLCInput from "./components/Form/VLCInput";
import VLCNumber from "./components/Form/VLCNumber";
import VLCTextarea from "./components/Form/VLCTextarea";
import VLCSwitch from "./components/Form/VLCSwitch";

export default {
  install(Vue, options) {
    Vue.component("vlc-layout", VLCLayout);
    Vue.component("vlc-sidebar-menu", VLCSidebarMenu);
    Vue.component("vlc-sidebar-menu-item", VLCSidebarMenuItem);
    Vue.component("vlc-alert", VLCAlert);
    Vue.component("vlc-form-group", VLCFromGroup);
    Vue.component("vlc-input", VLCInput);
    Vue.component("vlc-number", VLCNumber);
    Vue.component("vlc-textarea", VLCTextarea);
    Vue.component("vlc-switch", VLCSwitch);
  }
};