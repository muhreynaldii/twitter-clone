<template>
  <div class="mt-2 flex w-full flex-row rounded-lg bg-botnight px-4 py-4">
    <div class="w-[10%] sm:w-[5%]">
      <Avatar
        :avatar_url="feed.avatar_url"
        :isLarge="feed.isLarge"
        class="h-12 w-12"
      />
    </div>
    <div class="ml-2 w-[90%] pl-2 sm:w-[95%]">
      <h3 class="text-white">
        {{ feed.fullname
        }}<span class="pl-2 text-sm text-green-400">{{ feed.username }}</span>
      </h3>
      <p class="text-melsun">
        {{ feed.tweet }}
      </p>
      <Icons
        :like="feed.like"
        :retweet="feed.retweet"
        :heart="feed.heart"
        :delete="feed.delete"
        :index="indexTweet"
        :funcRetweet="funcRetweet"
        :deleteData="deleteData"
        :toggleLike="toggleLike"
      />
      <button
        class="mt-2 mb-2 w-full cursor-pointer rounded-lg border border-white/70 bg-rush/50 px-2 text-start text-white"
        @click="onShowReply"
        v-show="feed.reply === true"
      >
        Reply
      </button>
      <div class="flex flex-col-reverse">
        <tweet-card
          v-for="(comment, index) in feed.comments"
          :feed="comment"
          :key="comment.id"
          :indexTweet="index"
          @delete="deleteComment(this.indexTweet, index)"
          class="rounded-xl bg-cadnium/30"
        />
        <div v-if="hasChildren">
          <tweet-form
            :btnCancel="true"
            @closeForm="handleCloseForm"
            v-show="feed.reply === false"
            @tweets="handleComment"
            :indexComment="this.indexTweet"
            @blur="handleBlur"
            class="pb-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import Icons from "./Icons.vue";

export default {
  emits: ["delete", "comment", "deleteComment"],
  props: { feed: Object, indexTweet: Number },
  computed: {
    hasChildren() {
      const { comments } = this.feed;
      return comments && comments.length >= 0;
    },
  },
  components: {
    Avatar,
    Icons,
  },
  methods: {
    deleteData(indexTweet) {
      this.$emit("delete", indexTweet);
    },
    deleteComment(indexComment, index) {
      this.$emit("deleteComment", indexComment, index);
    },
    handleComment(tweet, indexComment) {
      this.$emit("comment", tweet, indexComment);
      this.onShowReply();
    },
    onShowReply() {
      this.feed.reply = !this.feed.reply;
    },
    handleCloseForm() {
      this.onShowReply();
    },
    funcRetweet() {
      this.feed.retweet++;
    },
    toggleLike() {
      this.feed.heart = !this.feed.heart;
      if (this.feed.heart === true) {
        this.feed.like++;
      } else {
        this.feed.like--;
      }
    },
    handleBlur(myInput) {
      if (myInput.length == 0) {
        this.onShowReply();
      }
    },
  },
};
</script>
