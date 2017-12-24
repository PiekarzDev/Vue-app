<template>
<panel title="Tab">
<textarea readonly  v-model="song.tab"></textarea>
</panel>
</template>

<script>

export default {

  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea{
  height: 235px;
  width: 90%;
}
</style>