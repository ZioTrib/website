<template>
  <v-parallax
    :src="require('@/assets/background.png')"
    :height="height">
    <v-row
      justify="center"
      style="margin-top: 5%"
    >
      <v-col
        lg="3"
        sm="6"
        xs="7"
        md="4">
        <v-card
          color="rgb(255, 255, 255, 0.5)"
          class="card_id"
          elevation="10">
          <v-row>
            <v-col>
              <v-avatar
                class="ma-7"
                color="grey lighten-2"
                size="205"
              >
                <img
                  :src="require('@/assets/avatar.jpg')"
                  alt="Daniele Tribuzio"
                >
              </v-avatar>
              <div class="text-h4 font-weight-thin">
                Daniele <br> Tribuzio
              </div>
              <hr style="
               height:2px;
                width:15%;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 20px;
                  margin-bottom: 20px;
                border-width:0;
                color:#F89915;
                background-color:#F89915">

              <div
                class="text-overline"
                style="
               margin-top: 20px;
               margin-bottom: 20px;">
                Data Science Student
              </div>

            </v-col>
          </v-row>
          <v-card-actions
            class="terziario justify-center">
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              class="mx-4 my-4"
              icon
              color="white"
              :href="icon.link"
              target="_blank">
              <v-icon size="30px">
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
      <v-col
        lg="6"
        sm="10"
        xs="7"
        md="7"
      >
        <v-card
          color="rgb(255, 255, 255, 0.0)"
          elevation="0"
          class="textcard text-center text-md-left text-lg-left">

          <div
            class=
              "text-lg-h1 text-md-h1 text-h2">
            Hello
          </div>
          <div class="text-h5 font-weight-thin">
            Here's who I am&nbsp;&amp; what I do
          </div>

          <v-btn class="my-5 mr-5 my-lg-5"
                 rounded
                 color="terziario"
                 dark
                 large
                 to="/portfolio"
          >
            Portfolio
          </v-btn>
          <v-btn class="my-10"
                 rounded
                 outlined
                 color="terziario"
                 to="/about"
                 large
          >
            About Me
          </v-btn>

          <div
            :class=
              "[`text-lg-body-1 text-justify text-md-body-1 text-body-1 ${color} mb-10`]">

            I am a master student of <strong> Data Science and Business Informatics </strong> at the University of Pisa with a degree in
            <strong>Business Economics</strong> who believes in the <strong>power of data</strong> and how it can
            improve the way we do things every day. I like to <strong>find solutions</strong> to problems, even if these are difficult.
            I feel confident in everything I do and <strong>I love to learn</strong> something new every day.


          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
/* eslint-disable vue/return-in-computed-property */
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    icons: [
      {icon: 'mdi-instagram', link: "https://www.instagram.com/danieletribuzio/"},
      {icon: 'mdi-facebook', link: "https://www.facebook.com/daniele.tribuzio/"},
      {icon: 'mdi-linkedin', link: "https://www.linkedin.com/in/daniele-tribuzio/"},
      {icon: 'mdi-github', link: "https://github.com/ZioTrib"}

    ],

  }),
  computed: {
    color() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'white--text'
        case 'sm':
          return 'white--text'
      }
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '1200'
        case 'sm':
          return '1000'
        case 'md':
          return '700'
        case "lg":
          return '700'
        case "xl":
          return '700'
      }
    },
  },
}
</script>

<style>
.card_id {
  backdrop-filter: blur(7px);
}

</style>
