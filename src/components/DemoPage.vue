<template>
    <v-container class="player py-0">
        <v-row class="align-center flex-column">  
            <h2 class="px-0">Now Playing</h2>
            <v-row class="ma-0 pa-0">
                <p class="user caption pb-3 pr-1 my-0 grey--text text--lighten-1">as Jimmy Netrod </p>
                <!-- <v-img src="@/assets/spotify_favicon.png" max-width="10" contain class="align-center"></v-img> -->
            </v-row>
            <v-card>
                <v-img max-width="500" src="https://i.scdn.co/image/ab67616d0000b273280689ecc5e4b2038bb5e4bd"></v-img>
            </v-card>
            <v-progress-linear
            class="my-4"
            indeterminate
            color="purple accent-3"
            rounded
            ></v-progress-linear>
            <h1 class="title">ball w/o you, baby girl 🤫</h1>
            <p class="subtitle grey--text text--lighten-1">21 Savage</p>
        </v-row>
        <v-row class="mt-5 justify-space-around">
            <v-btn large color="purple" class="white--text  ">Start</v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            alert: false,
        }
    }
}
</script>
<style lang="scss">
    .player {
        h1{
            font-family: 'Montserrat', sans-serif;
            font-weight: normal !important;
        }
        h2{
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
        }
        .v-btn{
            font-family: 'Raleway', sans-serif;
        }
    }
</style>