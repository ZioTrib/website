<template>
  <v-parallax
    :src="require('@/assets/background.png')"
    height=750>
    <v-row
      align="center"
      justify="center">
      <v-col cols="12">
        <div class="text-lg-h1 text-h3 font-weight-thin text-center black--text">
          <v-icon lm="10" color="black" :size="iconSize">
            mdi-connection
          </v-icon>
          <br>
          Error 404
          <br> Page Not Found, Sorry!
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "PageNotFound",

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    iconSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '60'
        case 'sm':
          return '60'
        case 'md':
          return '60'
        case "lg":
          return '100'
        case "xl":
          return '100'
      }
    }
  }
}
</script>

<style scoped>

</style>
