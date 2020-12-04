<template>
    <v-container fluid fill-height class="loading_sheet align-center">
        <v-row class="justify-center">  
          <v-progress-circular
            :size="70"
            :width="7"
            color="purple accent-3"
            indeterminate
          ></v-progress-circular>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'LoadingSheet',
}
</script>

<style lang="scss" scoped>
  .loading_sheet{
    .progress_bar{
      width: 400px;
      max-width: 90%;
    }
  }
</style>