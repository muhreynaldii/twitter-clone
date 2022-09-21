<template>
  <div class="flex justify-center pt-4">
    <form
      @submit.prevent="pushData()"
      ref="form"
      class="w-full rounded-md border border-gray-100 p-4"
    >
      <textarea
        name="tweet"
        id=""
        class="h-[100px] w-full rounded-md bg-gray-700 p-4 text-white"
        v-model="myInput"
        ref="focusMe"
      />
      <div class="flex justify-between">
        <div>
          <p class="text-white" ref="form">{{ this.myInput.length }}/10</p>
        </div>
        <div>
          <button
            class="mr-2 rounded-md bg-red-500 px-4 py-2 text-white"
            v-if="btnCancel"
            @click.prevent="$emit('closeForm')"
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
export default {
  data() {
    return {
      myInput: "",
    };
  },
  emits: ["tweets", "closeForm"],
  computed: {
    length() {
      return this.myInput.length;
    },
  },
  mounted() {
    this.$refs.focusMe.focus();
  },
  methods: {
    pushData() {
      this.$emit("tweets", this.myInput, this.number);
      this.$refs.form.reset();
      return (this.myInput = "");
    },
  },
  props: {
    btnCancel: {
      type: Boolean,
      default: false,
    },
    number: {
      type: Number,
    },
  },
};
</script>
