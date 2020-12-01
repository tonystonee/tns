<template>
  <v-app>
    <v-app-bar app elevation="0" rounded outlined>
      <v-container>
        <v-img
          src="@/assets/logo.png"
          max-height="40"
          max-width="40"
          contain
        >
        </v-img>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3" class="hidden-sm-and-down">
            <v-card rounded elevation="1">
                <v-list
                  dense
                  class="pa-0"
                >
                  <v-list-item-group
                    v-model="item"
                    color="pink"
                  >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" md="8" class="pa-0">
            <v-row>
                <v-col
                v-for="(item, i) in 20"
                :key="i"
                cols="6"
                sm="4"
                md="4"
                lg="3"
                >
                <v-item>
                    <v-sheet>
                      <v-card
                          class="playlist"
                          rounded 
                      >
                          <v-img    
                          src="https://mosaic.scdn.co/300/ab67616d0000b273175c577a61aa13d4fb4b6534ab67616d0000b273908afd2dae7320208da889fdab67616d0000b273e89541ec125fcc0792749fddab67616d0000b273ee0f38410382a255e4fb15f4"
                          >
                          </v-img>
                          <v-card-title class="playlist_name pa-1">I miss the person tou porteayed to me</v-card-title>
                          <v-card-subtitle class="pa-1">anthony dionise</v-card-subtitle>
                      </v-card>
                    </v-sheet>
                </v-item>
                </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import ActionBar from "./components/ActionBar";
// import NavDrawer from './components/NavDrawer';
// import Debug from './components/Debug';
// import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => ({
      item: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    // error: ""
  }),
  // components: {
  //   // ActionBar, 
  //   Debug,
  //   NavDrawer
  // },
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
  .v-btn{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  }
</style>
