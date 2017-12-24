<template>
<panel title="Lyrics">
<textarea readonly  v-model="song.lyrics"></textarea>
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
  width: 80%;
}
</style>