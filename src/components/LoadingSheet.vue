<template>
    <v-main>
      <v-container fluid fill-height class="loading_sheet">
        <v-row justify="center">
          <div class="d-flex flex-column  align-center">
            <v-img src="@/assets/logo.png" max-width="100" position="center" class="d-flex justify-center">
            </v-img>
            <v-progress-linear class="mt-5 progress_bar purple lighten-5" rounded indeterminate></v-progress-linear>
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
    background: rgb(0,116,166);
    background: linear-gradient(0deg, rgba(0,116,166,1) 47%, rgba(0,175,130,1) 100%);
    .progress_bar{
      width: 400px;
      max-width: 90%;
    }
  }
</style>