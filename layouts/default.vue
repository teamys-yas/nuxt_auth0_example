<template>
  <v-app id="inspire">
    <v-main>
      <navbar />
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
