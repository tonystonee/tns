<template>
  <v-container fluid height="100%">
    <v-alert type="error" v-if="error">
      {{error}}
    </v-alert>

      <v-btn
        v-if="!access_token"
        elevation="3"
        raised
        x-large
        rounded
        class="my-5 green"
        :href = login_uri
      >
        Sign in with Spotify
      </v-btn>

      <div v-if="access_token">
        <v-card
          elevation="2"
          outlined
          class="pa-2 pink lighten-5 my-5"
        >
          <v-card-title class="headline">
            Access Token
          </v-card-title>
          <v-card-text>{{this.access_token}} </v-card-text>
        </v-card>
        <v-card
          elevation="2"
          outlined
          class="pa-2 cyan lighten-5 my-5 "
        >
          <v-card-title class="headline">
            Refresh Token
          </v-card-title>
          <v-card-text class="v-card-text">{{this.refresh_token}}</v-card-text>
      </v-card>
      <v-btn @click="refreshAccessToken" class="green my-3">
        Refresh Access Token 
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  name: "HelloWorld",
  data: () => ({
    error: ""
  }),
  computed: {
    ...mapGetters([
      'access_token',
      'endpoint',
      'refresh_token'
    ]),
    login_uri() {
      return `${this.endpoint}/login`;
    },
    refresh_uri() {
      return `${this.endpoint}/refresh_token`;
    },
  },
  methods: {
    $_checkParams() {
      const params = this.$_getHashParams();
      if (Object.entries(params).length !== 0) {
        if ("access_token" in params && "refresh_token" in params) {
          this.$store.dispatch('setAccessToken', params.access_token);
          this.$store.dispatch('setRefreshToken', params.refresh_token);
          this.initAccessToken();
        } else if ("error" in params) {
          this.error = params.error;
        } else {
          this.error = "Missing access and/or refresh token";
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
        this.$_checkParams();
      }
    },
    async refreshAccessToken() {
      let pkg;
      try {
        pkg = await axios.get(this.refresh_uri, {
          params: {
            refresh_token: this.refresh_token
          }
        });
      } catch(xhr) {
        this.error = xhr;
        return;
      }
      const access_token = pkg.data.access_token;
      this.$store.dispatch('setAccessToken', access_token);
    },
  },
  mounted() {
    this.initAccessToken();
  }
};
</script>

