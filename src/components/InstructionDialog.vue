<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <v-card class="dialog purple darken-4 pa-5">
        <v-card-title class="justify-center">
          <p class="display-2">{{tryAgain ? 'Woops! You fucked up!' : 'Power Hour 🎉' }}</p>
        </v-card-title>
        <v-card-text class="tryAgain" v-if="tryAgain">
            Make sure one of your devices is playing spotify and try again.
        </v-card-text>
        <v-card-text v-else>
            <ol class="display-1">
                <li>Go to Spotify on your device of choice.</li>
                <li>Begin playing any song, playlist, or album.</li>
                <li>When playin, press START!!</li>
            </ol>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="light-blue darken-1"
            @click.stop="close"
            x-large
          >
            START
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    name: 'InstructionDialog',
    props: {
        tryAgain: {
            type: Boolean,
            required: true
        }
    },
    data () {
      return {
        dialog: true,
      }
    },
    watch: {
        tryAgain(val) {
            if(val) {
                this.dialog = true;
            }
        }
    },
    methods: {
        close() {
            this.dialog = false;
            this.$emit('check');
        },
    }
}
</script>

<style scoped lang="scss">
    .dialog{
        font-family: 'Montserrat', sans-serif !important;
    }
    ol.display-1, .tryAgain{
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 300 !important;
    }
</style>