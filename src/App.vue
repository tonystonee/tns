<template>
  <v-app>
    <div v-if="logged_in">
      <v-app-bar class="white" app clipped-left elevation="0" rounded outlined >
        <v-container>
          <v-row>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img
              src="@/assets/logo.png"
              max-height="40"
              max-width="40"
              contain
            >
            </v-img>
          </v-row>
        </v-container>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
        <categories></categories>
      </v-navigation-drawer>

      <!-- Page -->
      <v-main class="main grey lighten-3" :class="{'px-5': $vuetify.breakpoint.smAndDown}" >
        <v-container>
          <v-row>
            <v-col cols="3" class="hidden-sm-and-down" ref="leftColumn">
              <v-card  elevation="10" class="side-nav" >
                <categories></categories>
              </v-card>
            </v-col>
            <v-col cols="12" md="8" class="py-0">
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-container>
        <debug></debug>
      </v-main>
    </div>

    <loading-sheet v-else></loading-sheet>
  </v-app>
</template>

<script>
import Categories from "./components/Categories";
import LoadingSheet from './components/LoadingSheet';
import Debug from './components/Debug';
import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => ({
      drawer: false,
  }),
  components: {
    Categories,
    Debug,
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
    this.initApp();
  }
};
</script>

<style lang="scss">
  .main{
    padding-left:0 !important
  }
  .v-btn{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  }
</style>
