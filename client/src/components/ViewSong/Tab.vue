<template>
<panel title="Tab">
<textarea readonly  v-model="song.tab"></textarea>
</panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
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