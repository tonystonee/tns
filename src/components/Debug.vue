<template>
    <div v-if="access_token">
        <v-card
            elevation="2"
            outlined
            class="pa-2 pink darken -5 my-5 rounded-lg"
        >
            <v-card-title class="headline">
            Access Token
            </v-card-title>
            <v-sheet light>
            <v-card-text class="subtitle-2">{{this.access_token}} </v-card-text>
            </v-sheet>
        </v-card>
        <v-card
            elevation="2"
            outlined
            class="pa-2 cyan dearken-5 my-5 rounded-lg"
        >
            <v-card-title class="headline">
            Refresh Token
            </v-card-title>
            <v-sheet light>
            <v-card-text class="v-card-text subtitle-2">{{this.refresh_token}}</v-card-text>
            </v-sheet>
        </v-card>
        <v-btn @click="refreshAccessToken" class="pink accent-2 white--text">
        Refresh Access Token 
        </v-btn>
        <v-card
            elevation="2"
            outlined
            class="pa-2 yellow darken-5 my-5 rounded-lg"
        >
            <v-card-title class="headline">
            User
            </v-card-title>
            <v-sheet light>
            <v-card-text class="v-card-text subtitle-2 text-wrap">
                <pre>
    {{JSON.stringify(this.user, undefined, 2)}}
                </pre>
            </v-card-text>
            </v-sheet>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
    name: 'DebugModule',
    props: {
        access_token: String,
        refresh_token: String,
        user: Object,
    },
    computed: mapState([
        // map this.count to store.state.count
        'endpoint',
    ]),
    methods: {
        async refreshAccessToken() {
            let pkg;
            try {
                pkg = await axios.get(`${this.endpoint}/refresh_token`, {
                    params: {
                        refresh_token: this.refresh_token
                    }
                });
            } catch(xhr) {
                console.log(xhr)
                this.error = xhr;
                return;
            }
            const access_token = pkg.data.access_token;
            console.log(access_token)
            this.$store.dispatch('setAccessToken', access_token);
        },
    }
}
</script>