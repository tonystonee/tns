<template>
    <v-container class="player py-0">
        <instruction-dialog @check="playback" :tryAgain="tryAgain"></instruction-dialog>

        <div v-if="currentTrack">
            <v-row class="align-center flex-column">  
                <h2 class="px-0">Now Playing</h2>
                <v-row class="ma-0 pa-0">
                    <p class="user caption pb-3 pr-1 my-0 grey--text text--lighten-1">as {{username}} </p>
                </v-row>
                <v-card>
                    <v-img max-width="500" :src="currentTrack.item.album.images[0].url"></v-img>
                </v-card>
                <v-progress-linear
                class="my-4"
                indeterminate
                color="purple accent-3"
                rounded
                ></v-progress-linear>
                <h1 class="title">{{currentTrack.item.name}}</h1>
                <p class="subtitle grey--text text--lighten-1">{{currentTrack.item.artists[0].name}}</p>
            </v-row>
            <v-row class="mt-5 justify-space-around">
                <v-btn @click="playback" large color="purple" class="white--text">Restart</v-btn>
            </v-row>
        </div>

        <v-row class="align-center flex-column pt-5 mt-10" v-else>
            <v-card>
                <v-img max-width="500" min-width="100" aspect-ratio="1" width="500"></v-img>
            </v-card>
            <v-progress-linear
            class="my-4"
            indeterminate
            color="purple accent-3"
            rounded
            ></v-progress-linear>
        </v-row>
    </v-container>
</template>
<script>
import InstructionDialog from '@/components/InstructionDialog';
export default {
    props: {
        spotifyAPI: {
            type: Object,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            activeInterval: null,
            currentTrack: null,
            tryAgain: false,
            deviceActive: false,
            timer: null,
            // 60 seconds
            ms: 60000
        }
    },
    components: {
        InstructionDialog,
    },
    methods: {
        async $_next() {
            try {
                await this.spotifyAPI.skipToNext();
            } catch(xhr) {
                console.error(xhr);
                return;
            }
        },
        async playback() {
            this.tryAgain = false;
            let current;
            try {
                current = await this.spotifyAPI.getMyCurrentPlayingTrack();
            } catch(xhr) {
                console.error(xhr);
                return;
            }
            if (current) {
                this.currentTrack = current;
                try {
                    await this.spotifyAPI.seek(0);
                } catch(error) {
                    console.error(error)
                    return;
                }
                if (!current.is_playing) {
                    try {
                        await this.$spotifyAPI.play();
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
                this.timer = setInterval(() => this.$_next(), this.ms);
                this.active = true;
                this.deviceActive = true;
                console.log(this.currentTrack);
            }
            // either  song is not selected or is paused
            else {
                this.tryAgain = true;
                return;
            }

        },
    },
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