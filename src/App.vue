<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-list
      rounded>
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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="white"
      height="70"
    >
      <v-row
        align="center"
      >
        <v-toolbar-title>Daniele Tribuzio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-col v-for="item in menu" :key="item.link"
          >
            <v-btn
              color="terziario"
              text
              rounded
              flat
              :to="item.root">
              <v-icon class=mr-2> {{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-col>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-md-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-toolbar-items>
      </v-row>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer>
      <v-card
        flat
        tile
        class="normal text-center"
      >
        <v-row>
          <v-card-text>
            <h2>Follow Me</h2>
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              class="mx-4 my-4"
              icon
              :href="icon.link"
              target="_blank">
              <v-icon size="40px">
                {{ icon.icon }}
              </v-icon>
            </v-btn>
            <v-divider></v-divider>
          </v-card-text>
          <v-col>
            <v-card-text class=" pt-0">
              <h3>
                About this website
              </h3>
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
              Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
              a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
              augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
              vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text class=" pt-0">
              <h3>
                Site links
              </h3>
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
              Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
              a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
              augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
              vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
            </v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-text class="">
          © {{ new Date().getFullYear() }} <strong>Daniele Tribuzio </strong> All rights reserved
        </v-card-text>
      </v-card>
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
  }),
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
