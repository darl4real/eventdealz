<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="event.tab"
    ></textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'event'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
