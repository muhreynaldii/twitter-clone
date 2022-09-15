<template>
  <nav class="w-full h-[50px] bg-green-700 sticky">
    <div
      class="w-full flex justify-between container px-10 items-center mx-auto"
    >
      <div>
        <h1 class="font-bold text-lg text-white">
          Simple Twitter Clone With Vue
        </h1>
      </div>
      <div class="flex">
        <div>
          <p class="text-white">{{ provideUser.fullname }}</p>
          <p class="text-green-400">{{ provideUser.username }}</p>
        </div>
        <img :src="provideUser.avatar_url" alt="" class="pl-2" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  inject: ["provideUser"],
};
</script>
