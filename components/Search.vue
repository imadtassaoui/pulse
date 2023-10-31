<script setup lang="ts">
const search = useSearch();
</script>
<template>
  <div
    v-if="search"
    class="fixed top-0 left-0 z-10 flex flex-col w-screen h-screen bg-white/50"
  >
    <div
      class="flex items-center w-full gap-6 p-8 bg-white border-b border-black/10"
    >
      <img src="../assets/search.svg" alt="" class="h-6" />
      <input
        placeholder="Search"
        type="text"
        class="text-3xl focus:outline-none"
        spellcheck="false"
        autofocus
      />
    </div>
    <div @click="search = !search" class="w-full h-full" />
  </div>
</template>
