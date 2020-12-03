<template>
  <v-app>
      <v-container  v-if="logged_in" fluid fill-height class="main_container align-start grey lighten-4" >
        <!-- <player></player> -->
        <demo-page></demo-page>
        <!-- <debug></debug> -->
      </v-container>
    <loading-sheet v-else></loading-sheet>
  </v-app>
</template>

<script>
import DemoPage from './components/DemoPage';
import LoadingSheet from './components/LoadingSheet';
// import Player from './components/Player';
// import Debug from './components/Debug';
import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => ({
      drawer: false,
  }),
  components: {
    // Debug,
    DemoPage, 
    // Player,
    LoadingSheet
  },

  computed: {
    ...mapGetters([
      'access_token',
      'endpoint',
      'refresh_token',
      'spotifyAPI',
      'user',
    ]),
    logged_in() {
      // return !!this.user;
      return true;
    },
    login_uri() {
      return `${this.endpoint}/login`;
    },
    refresh_uri() {
      return `${this.endpoint}/refresh_token`;
    },
  },
  methods: {
    $_setTokens(params) {
      if ("access_token" in params && "refresh_token" in params) {
        this.$store.dispatch('setAccessToken', params.access_token);
        this.$store.dispatch('setRefreshToken', params.refresh_token);
        this.initApp();
      } else if ("error" in params) {
        console.error(params.error);
      } else {
        console.error('Unknown Error')
      }
    },
    login() {
      const params = this.$_getHashParams();
      
      // No tokens in query
      if (Object.entries(params).length === 0) {
        window.location.href = `${this.endpoint}/login`;
      } 
      // Redirected back home with tokens
      else {
        this.$_setTokens(params);
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
    initApp() {
      // check if logged in
      if (this.$store.state.access_token && this.$store.state.refresh_token) {
        // declare spotify API and User Objects
        this.$_initSpotifyAPI(this.$store.state.access_token);
        this.$_setUser();
      } else {
        this.login();
      }
    },
  },
  mounted() {
    // this.initApp();
  }
};
</script>

<style lang="scss" scoped>
  .main_container{
    max-height: 100%;
  }
</style>