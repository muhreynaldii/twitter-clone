<template>
  <div v-if="isLarge">
    <img
      :src="avatar_url"
      alt="avatar_image"
      class="h-9 w-9 rounded-full border border-white bg-cover p-[3px] lg:h-12 lg:w-12"
    />
  </div>
  <div v-else>
    <img
      :src="avatar_url"
      alt="avatar_image"
      class="h-7 w-7 rounded-full border border-white bg-cover p-[3px] lg:h-10 lg:w-10"
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
