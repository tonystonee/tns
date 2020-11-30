<template>
  <v-app>
    <action-bar> </action-bar>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import ActionBar from "./components/ActionBar";
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    ActionBar,
    Home
  },

  data: () => ({
    //
  })
};
</script>

<style>
  .v-btn{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  }
</style>
