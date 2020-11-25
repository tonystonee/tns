<template>
  <v-container>
    
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({

  }),
  mounted() {
    if (this.$store.state.code_verifier) {
      console.log('verifier avalible');
    }
  },
};
</script>
