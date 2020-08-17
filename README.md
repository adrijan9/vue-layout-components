[![npm](https://img.shields.io/npm/v/vue-layout-components.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-layout-component)
[![npm](https://img.shields.io/npm/l/vue-layout-components.svg?style=for-the-badge)](LICENSE)

# Vue Layout Components
Simple two sides layout with small icon sidebar, header, and body perfect for application.

# Installation

Using npm:
```shell
$ npm i vue-layout-components
```

# Usage
#### Register Styles
```shell
@import "~vue-layout-components/src/scss";
```
#### Register Components:
```shell
import VueLayoutComponents from "vue-layout-components";

Vue.use(VueLayoutComponents);
```
#### Using Components:
```shell
<layout title="Dashboard">
    <template #sidebar>
      <sidebar-menu-item title="First item"
                         icon="fa fa-eye"
      >
        <h2>Sub menu body content</h2>
      </sidebar-menu-item>
    </template>

    Default slot is for the body.
</layout>
```

# Api

# Layout
### Props
| Prop   |      Description      | Type | Default |
|:----------:|:-------------:|:-------------:|:-------------:|
| title |  Shows title in layout header | String | null |
| icon |    Shows icon before header title  | String | null |
| sidebar-logo-url | Url for left sidebar logo link | String | '/' |
| sidebar-logo-image | Image url for left sidebar logo | String | null |
| close-on-esc | Close any sub menu item on pressing escape | Boolean | true |
  
### Slots
| Slot   |      Description      |
|:----------:|:-------------:|
| default |  Adds content in the body |
| sidebar | Adds sidebar-menu-item in left small sidebar |

# Sidebar Menu Item
### Props
| Prop   |      Description      | Type | Default |
|:----------:|:-------------:|:-------------:|:-------------:|
| title |  Shows title in the sidebar item. This is required prop. | / | / |
| icon |    Shows icon on top before the title  | String | null |
| href | This can be user if you dont want to have sidebar submenu for this item but direct link | String | null |
| to | If you are using $router then you can use to prop for adding redirect with the router | String | null |
| submenu-size | On every item submenu sidebar you cna change size. (sizes: small, medium, half-screen and full-screen) | Boolean | 'small' |
### Slots
| Slot   |      Description      |
|:----------:|:-------------:|
| default |  Adds content in the sidebar item body |

## License

This project is licensed under the terms of the [MIT license](LICENSE).

## Browsers support

| <img src="https://www.freepnglogos.com/uploads/internet-explorer-png-logo/file-internet-explorer-9-icon-svg--wikimedia-commons-10.png" alt="IE" width="24px" height="24px" /> <br/> IE | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /></br> Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /></br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /></br>iOS Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" /></br>Opera |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| Not Tested| Yes | Yes | Not Tested | No Tested | No Tested | Yes