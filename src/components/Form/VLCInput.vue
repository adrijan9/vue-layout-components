<template>
  <input v-bind="getAttributes"
         class="vlc-input"
         @input="inputEvent"
  />
</template>

<script>
  import FormControls from "./FormControls";
  
  export default {
    name: "vlc-input",
    mixins: [
        FormControls
    ],
    props: {
      type: {
        type: String,
        default: "text",
        validator (value) {
          return [
            "text",
            "password",
            "email",
            "button",
            "checkbox",
            "color",
            "date",
            "datetime-local",
            "file",
            "hidden",
            "image",
            "month",
            "number",
            "radio",
            "range",
            "reset",
            "search",
            "submit",
            "tel",
            "time",
            "url",
            "week"
          ].indexOf(value) !== -1;
        }
      }
    }
  }
</script>