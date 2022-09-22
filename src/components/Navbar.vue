<template>
  <nav class="sticky top-0 h-[50px] w-full bg-botnight">
    <div
      class="container mx-auto flex w-full items-center justify-between px-2 md:px-10"
    >
      <div>
        <h1 class="text-xs font-bold text-white sm:text-base md:text-lg">
          Simple Twitter Clone With Vue
        </h1>
      </div>
      <div class="flex h-full items-center justify-center">
        <div class="px-1">
          <p class="md:text-md text-base text-white">
            {{ provideUser.fullname }}
          </p>
          <p class="md:text-md pr-2 text-base text-melsun">
            {{ provideUser.username }}
          </p>
        </div>
        <Avatar
          :avatar_url="provideUser.avatar_url"
          class="flex h-12 w-12 items-center justify-center"
        />
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
