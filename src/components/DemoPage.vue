<template>
    <v-container class="player py-0">
        <v-row class="align-center flex-column">  
            <h2 class="pb-3">Now Playing</h2>
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
            <p class="subtitle grey--text text--darken-3">21 Savage</p>
        </v-row>
        <v-row class="mt-5 justify-space-around">
            <v-btn large color="purple" class="white--text">Start</v-btn>
            <v-btn large color="pink" class="white--text">Pause</v-btn>
            <v-btn large color="light-blue" class="white--text">Next</v-btn>
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
        h1, h2{
            font-family: 'Montserrat', sans-serif;
        }
        .v-btn{
            font-family: 'Raleway', sans-serif;
        }
    }
</style>