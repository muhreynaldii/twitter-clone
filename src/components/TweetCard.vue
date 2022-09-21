<template>
  <div class="mt-2 flex w-full flex-row rounded-md bg-gray-700 p-2">
    <div class="w-[5%]">
      <Avatar :avatar_url="feed.avatar_url" class="h-12 w-12" />
    </div>
    <div class="w-[95%] pl-2">
      <h3 class="text-white">
        {{ feed.fullname
        }}<span class="pl-2 text-green-700">{{ feed.username }}</span>
      </h3>
      <p class="text-gray-400">
        {{ feed.tweet }}
      </p>
      <div class="flex space-x-4 text-white">
        <div @click="toggleLike(index)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="cursor-pointer"
            v-if="feed.heart"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path
              d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
              fill="rgba(47,204,113,1)"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            v-else
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path
              d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
              fill="rgba(47,204,113,1)"
            />
          </svg>
        </div>
        {{ feed.like }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="cursor-pointer"
          @click="funcRetweet"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"
            fill="rgba(47,204,113,1)"
          />
        </svg>
        {{ feed.retweet }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          v-if="feed.delete"
          class="cursor-pointer"
          @click="deleteData(index)"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"
            fill="rgba(231,76,60,1)"
          />
        </svg>
      </div>
      <button
        class="mt-2 mb-2 w-full cursor-pointer rounded-lg border border-white/70 bg-slate-600 px-2 text-start text-white"
        @click="onShowReply"
        v-if="feed.reply"
      >
        Reply
      </button>
      <KeepAlive>
        <div v-if="hasChildren">
          <tweet-form
            :btnCancel="true"
            @closeForm="closeForm"
            v-if="!feed.reply"
            @tweets="handleComment"
            :number="index"
          />
        </div>
      </KeepAlive>
      <div>
        <tweet-card
          v-for="(comment, index) in feed.comments"
          :feed="comment"
          :key="comment.id"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  emits: ["delete", "comment"],
  props: { feed: Object, index: Number },
  computed: {
    hasChildren() {
      const { comments } = this.feed;
      return comments && comments.length > 0;
    },
  },
  components: {
    Avatar,
  },
  methods: {
    deleteData(index) {
      this.$emit("delete", index);
    },
    onShowReply() {
      console.log(this.feed.reply);
      this.feed.reply = !this.feed.reply;
    },
    funcRetweet() {
      this.feed.retweet++;
    },
    closeForm() {
      this.onShowReply();
    },
    toggleLike() {
      this.feed.heart = !this.feed.heart;
      if (this.feed.heart == false) {
        this.feed.like++;
      } else {
        this.feed.like--;
      }
    },
    handleComment(tweet, number) {
      this.$emit("comment", tweet, number);
      this.onShowReply();
    },
  },
};
</script>
