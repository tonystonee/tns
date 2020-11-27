<template>
  <v-app-bar app dark class="actionBar pink accent-2 white--text">
    <div class="top">
    </div>
    <div class="d-flex align-center">
      <router-link :to="{ name: 'home'}">
        <h1>Thots and Shots</h1>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <!-- <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon> -->
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "ActionBar",
  data: () => ({})
};
</script>

<style>

.v-application a {
    color: white!important;
    text-decoration: none;
}
</style>