<template>
    <div>
        <v-navigation-drawer
            class="nav-drawer lighten-5 "
            v-model="drawer"
            fixed
            clipped
            width="230"
            hide-overlay
            app
        >
            <v-list dense class="pa-0">
                <v-app-bar flat  class="darken-2 hidden-lg-and-up title-tile">
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mx-1"></v-app-bar-nav-icon>
                    <v-icon class="mx-0">fas fa-play-circle</v-icon>
                    <v-toolbar-title class="title ml-1 mr-5 align-center ">
                        <router-link :to="{name: 'Home'}" >Thots n Shots &nbsp;</router-link>
                    </v-toolbar-title>
                </v-app-bar>
            <v-list-item-group
                v-model="selectedItem"
                color="primary"
            >
                <v-list-item
            
                v-for="(item, i) in items"
                :key="i"
                :to="`/category/${item.id}`"
                >
                <v-list-item-content >
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            class="darken-2"
            dense
            flat
            fixed
            clipped-left
            app
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-icon class="ml-2 mr-0 navicon">fas fa-play-circle</v-icon>
            <v-toolbar-title class="title ml-2 mr-5 align-center ">
                <router-link :to="{name: 'Home'}" >Thots n Shots &nbsp;</router-link>
                <span v-if="category" class="subheading">{{category}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="mr-2" v-if="this.$store.state.user">{{this.$store.state.user.display_name}}</span>
        </v-app-bar>
    </div>
</template>

<script>
    import Category from '@/mixins/category';
    export default {
        name: 'Navbar',
        mixins: [Category],
        props: {
            source: String,
        },
        data: () => ({
            selectedItem: 1,
            drawer: null,
            items: [],
        }), 
        methods: {
            getCategories: async function() {
                let data;
                try {
                    data = await this.$store.state.spotifyAPI.getCategories();
                } catch(xhr) {
                    console.error(xhr)
                    return;
                }
                console.log(data)
                this.items = data.categories.items.map(category => {
                    return {
                        id: category.id,
                        name: category.name
                    }
                });
            },
        },
        mounted() {
            this.getCategories();
        }
    };
</script>


<style lang="scss">
.title{
    a{
        text-decoration: none;
    }
}
.nav-drawer{
    .title-tile{
        display: flex;
        flex-direction: column;
        align-content: center;
        height: 48px;
        .v-toolbar__content{
            padding: 0;
            .title{
                font-size: 16px !important;
            }
        }
    }
    .primary--text{
        background-image: none;
        color: inherit !important;
    }
}
</style>