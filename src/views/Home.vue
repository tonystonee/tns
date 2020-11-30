<template>
  <div class="home">
    <playlists :playlists="playlists"></playlists>
  </div>
</template>

<script>
import Playlists from "@/components/Playlists";
export default {
  name: "Home",
  data: () => ({
    playlists: [],
  }), 
  components: {
    Playlists
  },
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
};
</script>
