<template>
  <v-app>
    <action-bar> </action-bar>
    <v-main>
      <v-container fluid height="100%">
        <v-alert type="error" v-if="error">
          {{error}}
        </v-alert>
        <debug 
        :user="user" 
        :access_token="access_token"
        :refresh_token="refresh_token"
        v-if="access_token">
        </debug>
        <v-btn
          v-if="!access_token"
          elevation="3"
          raised
          x-large
          rounded
          class="purple my-5 white--text"
          :href = login_uri
        >
          Sign in with Spotify
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ActionBar from "./components/ActionBar";
import Debug from './components/Debug';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => ({
    error: ""
  }),
  components: {
    ActionBar, 
    Debug,
  },
  computed: {
    ...mapGetters([
      'access_token',
      'endpoint',
      'refresh_token',
      'spotifyAPI',
      'user',
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
    $_initSpotifyAPI(access_token) {
      const SpotifyWebApi = require('spotify-web-api-js');
      const spotifyAPI = new SpotifyWebApi();
      spotifyAPI.setAccessToken(access_token);
      this.$store.dispatch('setSpotifyAPI', spotifyAPI);
    },
    async $_setUser() {
      let user;
      try {
        user = await this.spotifyAPI.getMe();
      } catch(xhr) {
        console.log(xhr)
        return;
      }
      this.$store.dispatch('setUser', user);
    },
    initAccessToken() {
      if (this.$store.state.access_token && this.$store.state.refresh_token) {
        this.$_initSpotifyAPI(this.$store.state.access_token);
        this.$_setUser();
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

<style>
  .v-btn{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  }
</style>
