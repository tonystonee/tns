<template>
  <v-container>
    <v-alert type="error" v-if="error">
      {{error}}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    error: ""
  }),
  methods: {
    $_checkParams() {
      const params = this.$_getHashParams();
      console.log(params)
      if (Object.entries(params).length !== 0) {
        if ("access_token" in params && "reresh_token" in params) {
          this.$store.state.access_token = params.access_token;
          this.$store.state.refresh_token = params.refresh_token;
          this.initAccessToken();
        } else if ("error" in params) {
          this.error = params.error;
        } else {
          this.error = "Missing access or refresh token";
        }
      }
    },
    $_getHashParams() {
      var hashParams = {};
        const r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        let e = r.exec(q);
        if(e) {
          do {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
          }
          while ( e );
        }
      return hashParams;
    },
    initAccessToken() {
      if (this.$store.state.access_token && this.$store.state.refresh_token) {
        console.log("verifier avalible");
      } else {
        this.error = '';
        this.$store.state.access_token, this.$store.state.refresh_token = '';
        this.$_checkParams();
      }
    }
  },
  mounted() {
    this.initAccessToken();
  }
};
</script>
