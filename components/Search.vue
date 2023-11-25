<script setup lang="ts">
import { ClientOnly } from "#build/components";

const search = useSearch();
const searchTerm = ref("");
const nav = useNav();

const redirectToSearch = () => {
  if (searchTerm.value !== "") {
    search.value = false;
    nav.value = false;
    navigateTo(`/search/${searchTerm.value}`);
    searchTerm.value = "";
  }
};
</script>
<template>
  <div
    v-if="search"
    class="fixed top-0 left-0 z-10 flex flex-col w-screen h-screen bg-white/50"
  >
    <div
      class="flex items-center w-full gap-6 p-8 bg-white border-b border-black/10 slideDown"
    >
      <img src="../assets/search.svg" alt="" class="h-6" />
      <input
        placeholder="Search"
        v-model="searchTerm"
        type="text"
        class="text-3xl z-10 focus:outline-none w-full"
        spellcheck="false"
        autofocus
        @keyup.enter="redirectToSearch"
      />
    </div>
    <div @click="search = !search" class="w-full h-full" />
  </div>
</template>
<style></style>
