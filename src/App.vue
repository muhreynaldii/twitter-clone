<template>
  <div class="bg-gray-800 h-screen">
    <Navbar />
    <TweetForm />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import image from "./assets/vue.svg";
import TweetForm from "./components/TweetForm.vue";
export default {
  components: { Navbar, TweetForm },
  data() {
    return {
      user: {
        fullname: "Muhammad Reynaldi",
        username: "@muhreynaldii",
        avatar_url: image,
      },
    };
  },
  provide() {
    return {
      provideUser: this.user,
    };
  },
};
</script>

<style></style>
