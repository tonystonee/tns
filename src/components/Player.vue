<template>
    <v-container >
        <v-row v-if="deviceActive" class="justify-space-around">
            <v-col v-if="currentTrack">
                <v-img max-width="500" :src="currentTrack.item.album.images[0].url"></v-img>
            </v-col>
            <v-btn @click="playback" color="primary">Start</v-btn>
            <v-btn @click="pause" color="red" class="white--text">Pause</v-btn>
            <v-btn @click="next" color="pink" class="white--text">Next</v-btn>
        </v-row>
        <v-row class="justify-center" v-else>

            <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            >
                <v-card class="pink lighten-5">
                    <v-card-title class="headline">
                        Woops! Looks like you fucked up!
                    </v-card-title>
                    <v-card-text>Try again when a device is playing Spotify!</v-card-text>
                    <v-card-actions class="justify-center">

                    <v-btn
                        color="red"
                        class="white--text"
                        @click="checkDevices()"
                    >
                        Try Again
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-card class="pa-5 rounded-lg" elevation="10">
                <h1>Go to <span class="green--text">Spotify</span> and begin playing any song, album, or playlist!</h1>
                <h3 class="text--grey">Click DONE when your Spotify is playing!</h3>
                <v-btn class="my-5 primary" @click="checkDevices()">DONE</v-btn>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            currentTrack: null,
            dialog: false,
            deviceActive: false,
            activeInterval: null,
            timer: null,
            // 60 bs
            ms: 60000
        }
    },
    methods: {
        async checkDevices() {
            this.dialog = false;
            try {
                if(await this.$store.state.spotifyAPI.getMyCurrentPlayingTrack()) {
                    this.deviceActive = true;
                } else {
                    this.dialog = true;
                }
            } catch(xhr) {
                console.log(xhr);
                return;
            }
        },
        async next() {
            try {
                await this.$store.state.spotifyAPI.skipToNext();
            } catch(xhr) {
                console.error(xhr);
                return;
            }
        },
        async playback() {
            let current;
            try {
                current = await this.$store.state.spotifyAPI.getMyCurrentPlayingTrack();
            } catch(xhr) {
                console.error(xhr);
                return;
            }
            if (current) {
                console.log(current)
                this.currentTrack = current;
                try {
                    await this.$store.state.spotifyAPI.seek(0);
                } catch(error) {
                    console.error(error)
                    return;
                }
                if (!current.is_playing) {
                    try {
                        await this.$store.state.spotifyAPI.play();
                    } catch(error) {
                        console.error(error)
                        return;
                    }
                }

                // reset timer
                if(this.timer){
                    clearInterval(this.timer) 
                }
                // ten seconds
                this.timer = setInterval(() => this.next(), this.ms);
                this.active = true;
            }
            // either  song is not selected or is paused
            else {
                console.log('Select a song');
                return;
            }

        },
        async pause() {
            if(this.timer){
                clearInterval(this.timer) 
            }
            try {
                await this.$store.state.spotifyAPI.pause();
            } catch(xhr) {
                console.log(xhr);
                return;
            }
        }
    },
    mounted() {
        
    }
}
</script>