<template>
  <div class="h-[2000px] w-full bg-gray-800">
    <Navbar />
    <div class="container mx-auto px-10">
      <tweet-form @tweets="addTweet" />
      <h2 class="mt-2 text-lg font-medium text-white">Feeds</h2>
      <tweet-card
        @comment="handleComment"
        v-for="(feed, index) in this.tweets"
        :feed="feed"
        :index="index"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import image from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";

export default {
  components: { Navbar },
  data() {
    return {
      user: {
        fullname: "Muhammad Reynaldi",
        username: "@muhreynaldii",
        avatar_url: image,
      },
      tweets: [
        {
          id: 1,
          fullname: "Molly Hudson",
          username: "@mollyhudson",
          avatar_url: user2,
          tweet:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          like: 10,
          retweet: 4,
          reply: "false",
          heart: "false",
          comments: [
            {
              id: 1,
              fullname: "Molly Hudson",
              username: "@mollyhudson",
              avatar_url: user2,
              tweet:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
              like: 10,
              retweet: 4,
              heart: "false",
            },
          ],
        },
        {
          id: 2,
          fullname: "Alex Connely",
          username: "@alex",
          avatar_url: user3,
          tweet:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          like: 23,
          retweet: 8,
          reply: "false",
          heart: "false",
          comments: [
            {
              id: 1,
              fullname: "Alex Connely",
              username: "@alex",
              avatar_url: user3,
              tweet:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
              like: 23,
              retweet: 8,
              heart: "false",
            },
          ],
        },
      ],
    };
  },
  provide() {
    return {
      provideUser: this.user,
    };
  },
  methods: {
    addTweet(tweet) {
      this.tweets.unshift({
        id: this.maxId + 1,
        fullname: this.user.fullname,
        username: this.user.username,
        avatar_url: this.user.avatar_url,
        tweet: tweet,
        like: 0,
        retweet: 0,
        reply: "false",
        heart: "false",
        delete: true,
        comments: [],
      });
    },
    handleDelete(index) {
      this.tweets.splice(index, 1);
    },
    handleComment(tweet, number) {
      this.tweets[number].comments.push({
        id: this.tweets[number].comments.length + 1,
        fullname: this.user.fullname,
        username: this.user.username,
        avatar_url: this.user.avatar_url,
        tweet: tweet,
        like: 0,
        retweet: 0,
        delete: true,
        heart: "false",
      });
    },
    computed: {
      maxId() {
        return Math.max(...this.tweets.map((tweet) => tweet.id), 0);
      },
    },
  },
};
</script>

<style></style>
