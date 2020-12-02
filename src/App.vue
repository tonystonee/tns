<template>
  <v-app>
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

    <v-main class="main grey lighten-3" :class="{'px-5': $vuetify.breakpoint.smAndDown}" >
      <v-container>
        <v-row>
          <v-col cols="3" class="hidden-sm-and-down">
            <v-card rounded elevation="1" class="side-nav">
              <categories></categories>
            </v-card>
          </v-col>
          <v-col cols="12" md="8" class="py-0">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Categories from "./components/Categories";
// import ActionBar from "./components/ActionBar";
// import NavDrawer from './components/NavDrawer';
// import Debug from './components/Debug';
// import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => ({
      drawer: false,
  }),
  components: {
    Categories,
    // Debug,
  },
  // computed: {
  //   ...mapGetters([
  //     'access_token',
  //     'endpoint',
  //     'refresh_token',
  //     'spotifyAPI',
  //     'user',
  //   ]),
  //   login_uri() {
  //     return `${this.endpoint}/login`;
  //   },
  //   refresh_uri() {
  //     return `${this.endpoint}/refresh_token`;
  //   },
  // },
  // methods: {
  //   $_checkParams() {
  //     const params = this.$_getHashParams();
  //     if (Object.entries(params).length !== 0) {
  //       if ("access_token" in params && "refresh_token" in params) {
  //         this.$store.dispatch('setAccessToken', params.access_token);
  //         this.$store.dispatch('setRefreshToken', params.refresh_token);
  //         this.initAccessToken();
  //       } else if ("error" in params) {
  //         this.error = params.error;
  //       } else {
  //         this.error = "Missing access and/or refresh token";
  //       }
  //     }
  //   },
  //   $_getHashParams() {
  //     var hashParams = {};
  //       const r = /([^&;=]+)=?([^&;]*)/g,
  //       q = window.location.hash.substring(1);
  //       let e = r.exec(q);
  //       if(e) {
  //         do {
  //           hashParams[e[1]] = decodeURIComponent(e[2]);
  //           e = r.exec(q);
  //         }
  //         while ( e );
  //       }
  //     return hashParams;
  //   },
  //   $_initSpotifyAPI(access_token) {
  //     const SpotifyWebApi = require('spotify-web-api-js');
  //     const spotifyAPI = new SpotifyWebApi();
  //     spotifyAPI.setAccessToken(access_token);
  //     this.$store.dispatch('setSpotifyAPI', spotifyAPI);
  //   },
  //   async $_setUser() {
  //     let user;
  //     try {
  //       user = await this.spotifyAPI.getMe();
  //     } catch(xhr) {
  //       console.log(xhr)
  //       return;
  //     }
  //     this.$store.dispatch('setUser', user);
  //   },
  //   initAccessToken() {
  //     if (this.$store.state.access_token && this.$store.state.refresh_token) {
  //       this.$_initSpotifyAPI(this.$store.state.access_token);
  //       this.$_setUser();
  //     } else {
  //       this.error = '';
  //       this.$_checkParams();
  //     }
  //   },
  // },
  // mounted() {
  //   this.initAccessToken();
  // }
};
</script>

<style>
  .main{
    padding-left:0 !important
  }
  .v-btn{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  }
</style>
