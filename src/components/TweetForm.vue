<template>
  <div class="pt-4 flex justify-center">
    <form class="border border-gray-100 rounded-md p-4">
      <textarea
        name="tweet"
        id=""
        class="w-[950px] h-[100px] bg-gray-700 text-white rounded-md p-4"
        v-model="myInput"
        ref="focusMe"
      />
      <div class="flex justify-between">
        <p class="text-white">{{ length }}/10</p>
        <button
          class="bg-green-500 text-white rounded-md px-4 py-2 disabled:bg-gray-500 disabled:cursor-not-allowed"
          :disabled="this.myInput.length > 10"
        >
          Tweet
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myInput: "",
      length: 0,
    };
  },
  computed: {
    length() {
      return this.myInput.length;
    },
  },
  mounted() {
    this.$refs.focusMe.focus();
  },
};
</script>
