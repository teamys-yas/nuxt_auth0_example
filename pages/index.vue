<template>
  <div>
    <super-secret-div v-if="$auth.loggedIn" />
    <div class="content">
      <h1>{{ $auth.loggedIn ? "ログインしたよ" : "SIGN INを押してね" }}</h1>
      <v-card class="left" v-if="$auth.loggedIn">
        <v-card-title>$auth.user</v-card-title>
        <v-card-text>
          {{ $auth.user }}
        </v-card-text>
        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import SuperSecretDiv from "~/components/SuperSecretDiv";

export default {
  components: {
    SuperSecretDiv
  },
  async asyncData({ params }) {
    console.log("test");
  },
  beforeMount() {
    console.log(this.$auth);
  }
};
</script>

<style scoped>
.content {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}
.left {
  text-align: left;
}
</style>
