<template>
    <v-main>
      <v-container fluid fill-height class="loading_sheet">
        <v-row justify="center">
          <div>
            <v-container juatify-end>
              <v-img src="@/assets/logo.png" max-width="100">
              </v-img>
            </v-container >
            <v-progress-linear class="mt-5 progress_bar" rounded indeterminate></v-progress-linear>
          </div>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
export default {
    name: 'LoadingSheet',
}
</script>

<style lang="scss" scoped>
  .loading_sheet{
    background: rgb(0,66,102);
    background: linear-gradient(242deg, rgba(0,66,102,1) 58%, rgba(0,50,144,1) 100%);
    .progress_bar{
      width: 400px;
    }
  }
</style>