<template>
  <img
    :src="avatar_url"
    alt="avatar_image"
    class="bg-rounded-full rounded-full border border-white bg-cover p-1"
  />
</template>

<script>
export default {
  props: {
    avatar_url: String,
  },
};
</script>
