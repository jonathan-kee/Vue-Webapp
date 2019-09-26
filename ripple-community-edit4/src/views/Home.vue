<template>
  <!-- <HelloWorld /> -->
  <v-container pa-0>
    <v-parallax id="parallax-ripple" dark height="600" src="/ripple-effect.jpg">
      <v-row align="center" justify="start">
        <v-card></v-card>
        <h1 class="display-3 mb-4 secondary--text">
          Mental Health & Self Help
          <br />Wisdom & Inspiration
          <br />Lifestyle & Well Being
        </h1>
      </v-row>
    </v-parallax>
    <v-row justify="center">
      <h1 class="display-3">What do we do?</h1>
    </v-row>
    <v-row justify="center">
      <img src="/whatdowedo.png" width="50%" />
    </v-row>
    <v-carousel>
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- <v-row justify="center">
      <v-card><img src="/logo.webp"></v-card>
    </v-row>-->
  </v-container>
</template>

<style>
/* #parallax-ripple img {
    height: 100%
  } */
</style>

<script>
// import HelloWorld from '../components/HelloWorld'
// @ is an alias tp /src
import store from "@/store.js";
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      destinations: store.destinations,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  }
};
</script>
