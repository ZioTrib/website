<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      relative
      right
      app
      temporary
    >
      <v-list
        rounded>
        <v-list-item-group v-model="group"
                           active-class="terziario--text">
          <v-list-item
            v-for="item in menu"
            :key="item.link"
            :to="item.root"
            link
          >
            <v-list-item-icon class="text-button text-center">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-button text-left">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
              href="https://github.com/ZioTrib/cv/raw/main/CV_Tribuzio_Daniele.pdf"
              link
          >
            <v-list-item-icon class="text-button text-center">
              <v-icon>mdi-pdf-box</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-button text-left">Download CV</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="white"
      height="70"
    >
      <v-row
        align="center"
      >
        <v-toolbar-title class="text-h font-weight-thin ma-2">Daniele Tribuzio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-col v-for="item in menu" :key="item.link"
          >
            <v-btn
              color="terziario"
              text
              rounded
              :to="item.root">
              <v-icon class=mr-2> {{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-col>
          <v-col>
          <v-btn
              dark
              color="terziario"
              rounded
          href="https://github.com/ZioTrib/cv/raw/main/CV_Tribuzio_Daniele.pdf">
            <v-icon class=mr-2>mdi-pdf-box</v-icon>
            Download CV
          </v-btn>
          </v-col>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-md-and-up">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-toolbar-items>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>


    <v-footer
      padless
      color="white"
    >
      <v-row style="margin-top: 10px">
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-col
          xl="2"
          lg="2"
          md="6"
          sm="5"
          xs="5">
          <div class="font-weight-thin black--text text-subtitle-2 text-center">
            <strong> Contact me </strong>
          </div>
          <v-btn
            icon
            color="terziario"
            href="mailto:Tribuzio.Daniele@gmail.com"
            target="_blank">
            <v-icon size="20px">
              mdi-email-edit-outline
            </v-icon>
          </v-btn>
          <v-btn
            icon
            color="terziario"
            target="_blank"
            href="https://t.me/DanieleTribuzio"
          >
            <v-icon size="20px">
              mdi-telegram
            </v-icon>
          </v-btn>
        </v-col>
<!--        <v-spacer class="hidden-sm-and-down"></v-spacer>-->
        <v-col
          xl="2"
          lg="2"
          md="6"
          sm="7"
          xs="7"
        >
          <div class="font-weight-thin black--text text-subtitle-2 text-center">
            <strong>Follow me</strong> <br>
          </div>
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            icon
            color="terziario"
            :href="icon.link"
            target="_blank">
            <v-icon size="20px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-col>
<!--        <v-col
          class="text-center"
          cols="12"
        >
          <div class="font-weight-thin black&#45;&#45;text text-subtitle-2 text-center">
            © {{ new Date().getFullYear() }} <strong> Daniele Tribuzio </strong> All rights reserved
          </div>
          <div class=" mt-2 font-weight-thin black&#45;&#45;text text-subtitle-2 text-center">
            This website is built entirely using the <strong> Vue.js framework</strong> and the <strong>Vuetify.js
            framework</strong>.
          </div>
          <v-icon>
            mdi-vuejs
          </v-icon>
          <v-icon>
            mdi-vuetify
          </v-icon>
        </v-col>-->
        <v-spacer class="hidden-sm-and-down"></v-spacer>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    menu: [
      {icon: "mdi-home-roof", title: "Home", root: "/"},
      {icon: "mdi-briefcase-outline", title: "Portfolio", root: "/portfolio"},
      {icon: "mdi-account-circle-outline", title: "About Me", root: "/about"},
      {icon: "mdi-email-edit-outline", title: "Contact Me", root: "/contact"}
    ],

    icons: [
      {icon: 'mdi-instagram', link: "https://www.instagram.com/danieletribuzio/"},
      {icon: 'mdi-facebook', link: "https://www.facebook.com/daniele.tribuzio/"},
      {icon: 'mdi-linkedin', link: "https://www.linkedin.com/in/daniele-tribuzio/"},
      {icon: 'mdi-github', link: "https://github.com/ZioTrib"}

    ],
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
};

</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
