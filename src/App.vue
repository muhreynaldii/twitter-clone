<template>
  <div class="h-[2000px] w-full bg-gray-800">
    <Navbar />
    <div class="container mx-auto px-10">
      <tweet-form @tweets="addTweet" />
      <h2 class="mt-2 text-lg font-medium text-white">Feeds</h2>
      <div class="flex flex-col-reverse">
        <tweet-card
          @comment="handleComment"
          v-for="(feed, index) in this.tweets"
          :feed="feed"
          :index="index"
          @delete="handleDelete"
          @deleteComment="handleDeleteComment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import image from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";
import user4 from "./assets/user4.jpg";

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
          isLarge: true,
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
          isLarge: true,
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
            {
              id: 2,
              fullname: "Ujang Maman",
              username: "@ujangmaman",
              avatar_url: user4,
              tweet:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
              like: 100,
              retweet: 40,
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
      this.tweets.push({
        id: this.tweets[this.tweets.length - 1].id + 1,
        fullname: this.user.fullname,
        username: this.user.username,
        avatar_url: this.user.avatar_url,
        tweet: tweet,
        like: 0,
        retweet: 0,
        reply: "false",
        delete: true,
        heart: "false",
        isLarge: true,
        comments: [],
      });
    },
    handleDelete(index) {
      this.tweets.splice(index, 1);
    },
    handleDeleteComment(number, index) {
      this.tweets[number].comments.splice(index, 1);
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
  },
};
</script>

<style></style>
