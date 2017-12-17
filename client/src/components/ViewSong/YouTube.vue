<template>
<panel title="YouTube Video">
<youtube  :video-id="ytId"
      :player-width="800"
      :player-height="330"></youtube>
</panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  props: [
    'ytId'
  ]
}
</script>

<style scoped>

</style>