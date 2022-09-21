<template>
  <nav class="sticky top-0 h-[50px] w-full bg-green-700">
    <div
      class="container mx-auto flex w-full items-center justify-between px-10"
    >
      <div>
        <h1 class="text-lg font-bold text-white">
          Simple Twitter Clone With Vue
        </h1>
      </div>
      <div class="flex">
        <div class="px-2">
          <p class="text-white">{{ provideUser.fullname }}</p>
          <p class="pr-2 text-green-400">{{ provideUser.username }}</p>
        </div>
        <Avatar :avatar_url="provideUser.avatar_url" class="h-12 w-12" />
      </div>
    </div>
  </nav>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  components: { Avatar },
  inject: ["provideUser"],
};
</script>
