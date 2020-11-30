<template>
<div class="playlists">
  <v-item-group v-if="playlists.length > 0">
    <v-container>
      <v-row>
        <v-col
          v-for="playlist in playlists"
          :key="playlist.id"
          cols="6"
          sm="4"
          md="4"
          lg="3"
        >
          <v-item>
            <v-sheet>
              <v-card
                dark
                :to="`/playlist/${playlist.id}`"
                class="playlist"
              >
                <v-img    
                  :src="playlist.images[0].url"
                >
                </v-img>
                <v-card-title class="playlist_name">{{playlist.name}}</v-card-title>
                <v-card-subtitle>{{playlist.owner.display_name}}</v-card-subtitle>
              </v-card>
            </v-sheet>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <v-container class="loading d-flex justify-center align-center" v-else>
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'MyPlaylists',
  data: () => ({
    playlists: [],
  }), 
  methods: {
    loadPlaylists: async function() {
      let data;
      try {
        data = await this.$store.state.spotifyAPI.getUserPlaylists();
      } catch(xhr) {
        console.error(xhr);
        return;
      }
      this.playlists = data.items;
    },
  },
  mounted() {
    this.loadPlaylists();
  }
}
</script>

<style lang="scss" scoped>
  .playlist{
    cursor: pointer;
    .playlist_name{
      font-size: 14px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
</style>