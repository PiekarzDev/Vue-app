<template>
<panel title="Search" class="mt-3">
    
    <v-text-field
    label=" NAME/ARTIST/ALBUM OR GENRE "
    v-model="search"
    ></v-text-field>
    
</panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    'this.$route.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
</style>
