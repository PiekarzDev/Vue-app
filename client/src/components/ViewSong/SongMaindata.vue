<template>
<panel title="Song Maindata">
      <v-layout>
        <v-flex xs6 left>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genere">
            {{song.genere}}
          </div>

          <v-btn
          round
          class="teal"
          :to="{
            name: 'song-edit', 
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          round
          class="teal"
          @click="setBookmark">
          Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          round
          class="teal"
          @click="unsetBookmark">
          UnBookmark
        </v-btn>

        </v-flex>  

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
          {{song.album}}
        </v-flex>
        
       </v-layout>   
      </panel>   
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
    bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
          if (!this.isUserLoggedIn) {
      return
    }

    try {
      this.bookmark = (await BookmarksService.index({
        songId: this.song.id,
        userId: this.user.id
      })).data
    } catch (err) {
      console.log(err)
    }
   }
  },
  methods: {
    async setBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
          console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.left{
  font-size: 20px;
  margin: 5%;
}

.album-image{
  width: 85%;
  margin: 20px auto;
}

</style>