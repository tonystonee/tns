<template>
  <v-app-bar app dark class="actionBar">
    <div class="top">
    </div>
    <div class="d-flex align-center">
      <router-link :to="{ name: 'Home'}">
        <h1>Thots and Shots</h1>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      :to="{ name: 'MyPlaylists'}"
      text
      v-if="this.$store.state.user"
    >
      <span class="mr-2">{{this.$store.state.user.display_name}}</span>
        <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "ActionBar",
  data: () => ({})
};
</script>

<style lang="scss">
.actionBar {
  h1 {
    font-family: 'Montserrat', sans-serif;  
  }
}
.v-application a {
    color: white!important;
    text-decoration: none;
}
</style>