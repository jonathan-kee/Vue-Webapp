<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="primary--text">RIPPLE</span>
        <span class="font-weight-light">COMMUNITY</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
      >
        <span class="mr-2">Self Care</span>
      </v-btn>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
      >
        <span class="mr-2">Suicide Prevention</span>
      </v-btn>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
      >
        <span class="mr-2">Support Group</span>
      </v-btn>
      <v-btn
        text
        href="#/forum"
      >
        <span class="mr-2">Forum</span>
      </v-btn>
      <v-btn
        text
        href="#/about"
      >
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
      >
        <span class="mr-2">Contact Us</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
    dark
    padless
    >
    <v-card
      flat
      tile
      class="teal lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Ripple Community</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  })
}
</script>
