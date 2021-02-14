<template>
  <div v-if="show" :class="['alert', `${type ? type : ''}`]">
    <div class="alert-message">
      <slot></slot>
    </div>
    <div v-if="dismissible"
         class="alert-operations"
    >
      <button class="close"
              @click="dismiss"
      >
        <i class="icon-close"></i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VLCAlert",
    props: {
      show: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: null
      },
      dismissible: {
        type: Boolean,
        default: false
      }
    },
    emits: [
      "dismiss"
    ],
    methods: {
      dismiss () {
        this.$emit("dismiss");
      }
    }
  }
</script>