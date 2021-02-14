<template>
  <div class="vlc-form-group">
    <label v-if="label"
           :for="labelFor"
           :class="labelClass"
           v-html="label"
    />
    <slot></slot>
    <span v-if="message"
          :class="[
            'vlc-form-group-message',
            messageType
          ]"
    >
      <i v-if="messageIcon !== false" :class="icon"></i> {{ message }}
    </span>
  </div>
</template>

<script>
  export default {
    name: "VLCFromGroup",
    props: {
      label: {
        type: String,
        required: true
      },
      labelFor: {
        type: String,
        default: null
      },
      labelClass: {
        type: String,
        default: ""
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: null
      },
      messageType: {
        type: String,
        default: "danger"
      },
      messageIcon: {
        type: String,
        default: null
      }
    },
    computed: {
      icon: function () {
        if (this.messageIcon) {
          return this.messageIcon;
        }
        
        let icon;
        
        switch (this.messageType) {
          case "danger":
            icon = "icon-exclamation";
            break;
          case "success":
            icon = "icon-checked";
            break;
          case "warning":
            icon = "icon-warning";
            break;
        }
        
        return icon;
      }
    }
  }
</script>