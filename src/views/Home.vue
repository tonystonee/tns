<template>
  <!-- <div class="home">
    <playlists :playlists="playlists"></playlists>
  </div> -->
  <v-row>
    <v-col
    v-for="(item, i) in 20"
    :key="i"
    cols="6"
    sm="4"
    md="4"
    lg="3"
    >
    <v-item-group>
      <v-item>
          <div>

              <v-img
              elevation="24"
              class="rounded-circle mx-2"  
              src="https://mosaic.scdn.co/300/ab67616d0000b273175c577a61aa13d4fb4b6534ab67616d0000b273908afd2dae7320208da889fdab67616d0000b273e89541ec125fcc0792749fddab67616d0000b273ee0f38410382a255e4fb15f4"
              >
              </v-img>
              <v-card-title class="playlist_name pa-1">I miss the person tou porteayed to me</v-card-title>
              <v-card-subtitle class="pa-1">anthony dionise</v-card-subtitle>
          </div>
      </v-item>
    </v-item-group>
    </v-col>
</v-row>
</template>

<script>
// import Playlists from "@/components/Playlists";
export default {
  name: "Home",
  // data: () => ({
  //   playlists: [],
  // }), 
  // components: {
  //   Playlists
  // },
  // methods: {
  //   loadPlaylists: async function() {
  //     let data;
  //     try {
  //       data = await this.$store.state.spotifyAPI.getUserPlaylists();
  //     } catch(xhr) {
  //       console.error(xhr);
  //       return;
  //     }
  //     this.playlists = data.items;
  //   },
  // },
  // mounted() {
  //   this.loadPlaylists();
  // }
};
</script>
