<template>
  <div class="flex space-x-4 text-white">
    <button>
      <OnLike
        v-show="heart === true"
        @click="toggleLike(index), activeIcon === 'OnLike'"
      />
      <OffLike
        v-show="heart === false"
        @click="toggleLike(index), activeIcon === 'OffLike'"
      />
      <component :is="activeIcon === 'OnLike'" />
    </button>
    {{ like }}
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
    {{ retweet }}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      v-if="delete"
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
</template>

<script>
import OffLike from "./OffLike.vue";
import OnLike from "./OnLike.vue";

export default {
  components: {
    OffLike,
    OnLike,
  },
  props: {
    like: Number,
    retweet: Number,
    heart: Boolean,
    delete: Boolean,
    index: Number,
    funcRetweet: Function,
    deleteData: Function,
    toggleLike: Function,
  },
  data() {
    return {
      activeIcon: "OffLike",
    };
  },
};
</script>
