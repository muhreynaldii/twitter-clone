<template>
  <div class="h-full w-full bg-melsun pb-4">
    <Navbar />
    <div class="container mx-auto px-10">
      <tweet-form @tweets="addTweet" />
      <h2 class="mt-2 text-lg font-medium text-botnight">Feeds</h2>
      <div class="flex flex-col-reverse">
        <tweet-card
          @comment="handleComment"
          v-for="(feed, index) in this.tweets"
          :feed="feed"
          :indexTweet="index"
          @delete="handleDelete"
          @deleteComment="handleDeleteComment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import user1 from "./assets/user1.jpg";
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
        avatar_url: user1,
      },
      tweets: [
        {
          id: 1,
          fullname: "Molly Hudson",
          username: "@mollyhudson",
          avatar_url: user2,
          tweet:
            "Ullam nulla tortor, porta a mi vehicula, egestas commodo tellus. Vivamus viverra arcu eu diam ultrices egestas",
          like: 10,
          retweet: 4,
          reply: true,
          heart: false,
          isLarge: true,
          comments: [
            {
              id: 1,
              fullname: "Molly Hudson",
              username: "@mollyhudson",
              avatar_url: user2,
              tweet:
                "Aliquam in arcu eu dolor egestas sollicitudin. Curabitur ornare eget eros ut sollicitudin",
              like: 72,
              retweet: 12,
              heart: false,
            },
          ],
        },
        {
          id: 2,
          fullname: "Alex Connely",
          username: "@alex",
          avatar_url: user3,
          tweet:
            "Suspendisse et lorem finibus, eleifend mauris eget, luctus neque. Nulla non lectus sed orci congue semper at sed leo.",
          like: 13,
          retweet: 2,
          reply: true,
          heart: false,
          isLarge: true,
          comments: [
            {
              id: 1,
              fullname: "Alex Connely",
              username: "@alex",
              avatar_url: user3,
              tweet:
                "Quisque pellentesque, nisl eget tristique pharetra, neque turpis molestie mauris, vel vulputate enim turpis in massa.",
              like: 23,
              retweet: 8,
              heart: false,
            },
            {
              id: 2,
              fullname: "Ujang Maman",
              username: "@ujangmaman",
              avatar_url: user4,
              tweet:
                "In auctor consectetur lectus et imperdiet. Ut consequat dolor in efficitur pulvinar. ",
              like: 100,
              retweet: 40,
              heart: false,
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
        reply: true,
        delete: true,
        heart: false,
        isLarge: true,
        comments: [],
      });
    },
    handleDelete(indexTweet) {
      this.tweets.splice(indexTweet, 1);
    },
    handleDeleteComment(indexComment, index) {
      this.tweets[indexComment].comments.splice(index, 1);
    },
    handleComment(tweet, indexComment) {
      this.tweets[indexComment].comments.push({
        id: this.tweets[indexComment].comments.length + 1,
        fullname: this.user.fullname,
        username: this.user.username,
        avatar_url: this.user.avatar_url,
        tweet: tweet,
        like: 0,
        retweet: 0,
        delete: true,
        heart: false,
      });
    },
  },
};
</script>

<style></style>
