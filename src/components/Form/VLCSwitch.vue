<template>
  <div :class="['vlc-switch', color, size]">
    <label>
      <input type="checkbox" @click="toggle" :class="{'checked': checked}">
      <span class="slider" :class="{round: rounded}"></span>
    </label>
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script>
  import FormControls from "./FormControls";
  
  export default {
    name: "vlc-switch",
    mixins: [
      FormControls
    ],
    props: {
      value: {},
      input: {},
      label: {
        type: String,
        default: null
      },
      rounded: {
        type: Boolean,
        default: false
      },
      onValue: {
        default: true
      },
      offValue: {
        default: false
      },
      color: {
        type: String,
        default: "blue",
        validator(value){
          return [
            "black",
            "red",
            "green",
            "yellow",
            "blue"
          ].indexOf(value) !== -1;
        }
      },
      size: {
        type: String,
        default: null,
        validator(value){
          return [
            "small"
          ].indexOf(value) !== -1;
        }
      }
    },
    computed: {
      checked () {
        return this.value === this.onValue;
      }
    },
    methods: {
      toggle (event) {
        this.update(event.target.checked ? this.onValue : this.offValue);
      }
    }
  }
</script>