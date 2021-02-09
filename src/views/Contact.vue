<template>
  <v-parallax
    :src="require('@/assets/background.png')"
    :height="750">
    <v-row
      style="margin-top: 5%"
      justify="center"
    >
      <v-col lg="8" md="9" sm="10" xs="10">
      <v-card
        color="rgb(255,255,255,0)"
        class="card_id"
      >
        <v-card-text
          class="text-lg-h2 text-md-h2 text-h3"
        >
          Let's keep in touch
        </v-card-text>
        <div
          class="text-h5 font-weight-thin mt-10 mx-5"
        >
          I'm looking for new opportunities and I am willing to accept any challenge. <br>
          If you are interested, my inbox is always open!
        </div>
        <v-btn class="my-10"
               rounded
               dark
               x-large
               color="terziario"
               href="mailto:Tribuzio.Daniele@gmail.com"

        >
          <v-icon class=mr-2>
            mdi-email-edit-outline
          </v-icon>
          Send me an E-mail
        </v-btn>
        <v-card-actions
          class="terziario justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            :class="[`mx-${marginIcon} my-4`]"
            icon
            color="white"
            :href="icon.link"
            target="_blank">
            <v-icon :size="sizeIcon">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
/* eslint-disable vue/return-in-computed-property */
export default {
name: "Contact",
  data: () => ({
    icons: [
      {icon: 'mdi-instagram', link: "https://www.instagram.com/danieletribuzio/"},
      {icon: 'mdi-facebook', link: "https://www.facebook.com/daniele.tribuzio/"},
      {icon: 'mdi-linkedin', link: "https://www.linkedin.com/in/daniele-tribuzio/"},
      {icon: 'mdi-github', link: "https://github.com/ZioTrib"}

    ],
  }),
  computed: {
    sizeIcon () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '30px'
        case 'sm':
          return '30px'
        case 'md':
          return '40px'
        case 'lg':
          return '40px'
        case 'xl':
          return '40px'
      }
    },
    marginIcon () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '2'
        case 'sm':
          return '2'
        case 'md':
          return '10'
        case 'lg':
          return '10'
        case 'xl':
          return '10'
      }
    },
  }
}
</script>

<style scoped>

</style>
