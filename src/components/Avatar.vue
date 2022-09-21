<template>
  <div v-if="isLarge">
    <img
      :src="avatar_url"
      alt="avatar_image"
      class="h-12 w-12 rounded-full border border-white bg-cover p-[3px]"
    />
  </div>
  <div v-else>
    <img
      :src="avatar_url"
      alt="avatar_image"
      class="h-10 w-10 rounded-full border border-white bg-cover p-[3px]"
    />
  </div>
</template>

<script>
export default {
  props: {
    avatar_url: String,
    isLarge: Boolean,
  },
};
</script>
