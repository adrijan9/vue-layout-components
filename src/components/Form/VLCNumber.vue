<template>
  <VLCInput v-bind="getAttributes"
            :value="value"
            @update="update"
  />
</template>

<script>
  import FormControls from "./FormControls";
  import VLCInput from "./VLCInput";
  
  export default {
    name: "vlc-number",
    mixins: [
      FormControls
    ],
    components: {
      VLCInput
    },
    props: {
      type: {
        type: String,
        default: "number",
        validator: function (value) {
          return ["number"].indexOf(value) !== -1;
        }
      }
    }
  }
</script>