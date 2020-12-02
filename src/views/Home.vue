<template>
  <div class="home">
    <demo-playlists ></demo-playlists>
  </div>
</template>

<script>
import DemoPlaylists from "@/components/DemoPlaylists";
export default {
  name: "Home",
  // data: () => ({
  //   playlists: [],
  // }), 
  components: {
    DemoPlaylists
  },
 methods: {
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
  },
  // mounted() {
  //   this.loadPlaylists();
  // }
};
</script>
