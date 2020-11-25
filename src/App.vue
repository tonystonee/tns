<template>
  <v-app>
    <action-bar> </action-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import ActionBar from "./components/ActionBar";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    ActionBar,
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
