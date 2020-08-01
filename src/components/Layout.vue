<template>
  <div class="layout">
    <div class="layout-sidebar">
        sidebar
    </div>
    <div class="layout-content">
        <div class="layout-header">
            header`
        </div>
        <div class="layout-body">
            body
        </div>
        <div v-if="$slots.footer"
             class="layout-footer"
        >
            footer
        </div>
    </div>
  </div>
</template>

<script>
  import "../scss/index.scss";
  export default {
    props: {
    },

    methods: {
    }
  };
</script>