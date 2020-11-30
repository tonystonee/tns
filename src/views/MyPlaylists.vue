<template>
  <playlists :playlists="playlists"></playlists>
</template>

<script>
import Playlists from "@/components/Playlists";
export default {
  name: 'MyPlaylists',
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