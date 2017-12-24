<template>
<panel title="YouTube Video">

    <youtube
      :video-id="ytId"
      :player-width="500"
      :player-hight="700">
    </youtube>
 
</panel>

</template>

<script>

export default {

  props: [
    'ytId'
  ]
}
</script>

<style scoped>

</style>