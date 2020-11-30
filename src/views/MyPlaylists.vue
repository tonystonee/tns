<template>
  <div class="me">

  </div>
</template>

<script>
export default {
  name: 'MyPlaylits',
  mounted() {
  this.spotifyAPI.getUserPlaylists()
  .then(function(data) {
    console.log('User playlists', data);
  }, function(err) {
    console.error(err);
  });
  }
}
</script>