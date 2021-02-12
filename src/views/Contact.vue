<template>
  <v-parallax
    :src="require('@/assets/background.png')"
    :height="750">
    <v-row justify="center"
           style="margin-top: 5%">
      <v-col lg="8" md="9" sm="10" xs="10">
        <div class="text-lg-h1 text-md-h1 text-h2 text-center black--text mb-10">
          Let's keep in touch
        </div>
        <v-card
          elevation="10"
          color="rgb(255,255,255,0.5)"
          class="card_id"
        >
          <v-col cols="12"
                 class="text-left"
          >
            <div
              class="text-h5 text-center font-weight-thin mt-10"
            >
              I'm looking for <strong> new opportunities </strong> and I am willing to <strong> accept any
              challenge </strong>. <br>
              If you are interested, my inbox is always open!
            </div>
            <div class="text-center">
              <v-btn class="mx-2 my-10"
                     rounded
                     dark
                     large
                     color="terziario"
                     href="mailto:Tribuzio.Daniele@gmail.com"

              >
                <v-icon class=mr-2>
                  mdi-email-edit-outline
                </v-icon>
                Send me an E-mail
              </v-btn>
              <v-btn class="mx-2 my-10"
                     rounded
                     large
                     dark
                     color="terziario"
                     href="https://t.me/DanieleTribuzio"

              >
                <v-icon class=mr-2>
                  mdi-telegram
                </v-icon>
                Send me a message
              </v-btn>
            </div>
          </v-col>
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
    sizeIcon() {
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
    marginIcon() {
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
