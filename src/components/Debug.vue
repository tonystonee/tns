<template>
    <div v-if="access_token">
        <v-card
            elevation="2"
            outlined
            class="pa-2 pink lighten-5 my-5 rounded-lg"
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
            class="pa-2 cyan lighten-5 my-5 rounded-lg"
        >
            <v-card-title class="headline">
            Refresh Token
            </v-card-title>
            <v-sheet light>
            <v-card-text class="v-card-text subtitle-2">{{this.refresh_token}}</v-card-text>
            </v-sheet>
        </v-card>
        <v-card
            elevation="2"
            outlined
            class="pa-2 yellow lighten-5 my-5 rounded-lg"
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
        <v-btn @click="refreshAccessToken" class="pink accent-2 white--text">
        Refresh Access Token 
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'DebugModule',
    props: {
        access_token: String,
        refresh_token: String,
        user: Object,
    }
}
</script>