<template>
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
</template>

<script>
export default {
    name: 'Categories',
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
    }),
    mounted() {
        
    }
}
</script>