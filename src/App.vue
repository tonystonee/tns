<template>
  <v-app>
      <v-main id="main">
        <v-container  v-if="logged_in" fluid fill-height class="align-start" >
          <player></player>
          <!-- <debug></debug> -->
        </v-container>
        <loading-sheet v-else></loading-sheet>
      </v-main>
  </v-app>
</template>

<script>
// import DemoPage from './components/DemoPage';
import LoadingSheet from './components/LoadingSheet';
import Player from './components/Player';
// import Debug from './components/Debug';
export default {
  name: "App",
  data: () => ({
    access_token: "",
    endpoint: 'http://localhost:8888',
    refresh_token: "",
    spotifyAPI: null,
    user: null,
  }),
  components: {
    // Debug,
    Player,
    LoadingSheet
  },
  computed: {
    logged_in() {
      return !!this.user;
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
        this.access_token = params.access_token;
        this.refresh_token = params.refresh_token;
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
      this.spotifyAPI = spotifyAPI;
    },
    async $_setUser() {
      let user;
      try {
        user = await this.spotifyAPI.getMe();
      } catch(xhr) {
        console.log(xhr)
        return;
      }
      this.user = user;
    },
    initApp() {
      // check if logged in
      if (this.access_token && this.refresh_token) {
        // declare spotify API and User Objects
        this.$_initSpotifyAPI(this.access_token);
        this.$_setUser();
      } else {
        this.login();
      }
    },
  },
  mounted() {
    this.initApp();
  }
};
</script>

<style lang="scss" scoped>
  #main{
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,1) 47%, rgba(30,0,112,1) 100%);
    }
</style>