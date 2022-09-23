<template>
  <div class="flex justify-center pt-4">
    <form
      @submit.prevent="pushData()"
      ref="form"
      class="w-full rounded-md border border-gray-100 bg-botnight p-4"
    >
      <textarea
        name="tweet"
        id="tweet"
        class="h-[100px] w-full rounded-md bg-cadnium/30 p-4 text-white"
        v-model="myInput"
        ref="focusMe"
        @blur="blurEventHandler()"
        placeholder="What's happening?"
      />

      <div class="flex justify-between">
        <div>
          <p class="text-white" ref="form">{{ this.myInput.length }}/10</p>
        </div>
        <div>
          <button
            class="mr-2 rounded-md bg-red-500 px-4 py-2 text-white"
            v-if="btnCancel"
            @click.prevent="closeForm()"
          >
            Cancel
          </button>
          <button
            class="rounded-md bg-green-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-500"
            :disabled="this.myInput.length > 10 || this.myInput == ''"
          >
            Tweet
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { nextTick } from "vue";

export default {
  data() {
    return {
      myInput: "",
    };
  },
  emits: ["tweets", "blur", "closeForm"],
  mounted() {
    this.focusOnTextarea();
  },
  updated() {
    nextTick(() => {
      this.focusOnTextarea();
    });
  },
  methods: {
    pushData() {
      this.$emit("tweets", this.myInput, this.indexComment);
      this.$refs.form.reset();
      return (this.myInput = "");
    },
    blurEventHandler() {
      this.$emit("blur", this.myInput);
    },
    closeForm() {
      this.$emit("closeForm");
    },
    focusOnTextarea() {
      const focusMeRef = this.$refs.focusMe;
      focusMeRef.focus();
    },
  },
  props: {
    btnCancel: {
      type: Boolean,
      default: false,
    },
    indexComment: {
      type: Number,
    },
  },
};
</script>
