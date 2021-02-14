<template>
    <textarea v-bind="getAttributes"
              class="vlc-textarea"
              @input="inputEvent"
    />
</template>

<script>
  import FormControls from "./FormControls";
  
  export default {
    name: "ATBLTextarea",
    mixins: [
      FormControls
    ]
  }
</script>