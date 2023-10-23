<script setup lang="ts">
const nav = useNav();
const cart = useCart();
const search = useSearch();
</script>

<template>
  <header
    class="fixed top-0 left-0 z-10 flex flex-col w-full h-auto gap-12 p-4 mb-32 bg-white lg:flex-row lg:bg-transparent"
  >
    <nav class="flex justify-between w-full h-auto">
      <NuxtLink
        class="flex flex-col items-center justify-center w-auto h-auto px-4 py-2 text-xs bg-white border rounded-full border-black/10 bg-opacity-20"
        to="/"
      >
        <img src="../../assets/logo.svg" alt="" />
      </NuxtLink>
      <button
        class="flex flex-col items-center justify-center w-auto px-4 py-2 text-xs bg-white border rounded-full lg:hidden border-black/10 bg-opacity-20"
        @click="nav = !nav"
      >
        Menu
      </button>
    </nav>

    <nav
      v-if="nav"
      class="top-0 left-0 flex flex-col w-full gap-12 pb-16 lg:flex-row"
    >
      <ul class="flex flex-col items-end justify-end w-full gap-4 lg:flex-row">
        <HeaderContainer label="Shop All" path="/shop" />
        <HeaderContainer label="Men's" path="/shop/men" />
        <HeaderContainer label="Women's" path="/shop/women" />
        <HeaderContainer label="Local stores" path="/local-stores" />
        <HeaderContainer label="Contact" path="/contact" />
      </ul>
      <ul class="flex flex-col items-end gap-4 lg:flex-row">
        <li
          @click="search = !search"
          class="flex flex-col items-center justify-center w-auto px-4 py-2 text-xs bg-white border rounded-full cursor-pointer border-black/10 bg-opacity-20"
        >
          Search
        </li>
        <HeaderContainer label="Account" path="/account" />
        <li
          @click="cart = !cart"
          class="flex flex-col items-center justify-center w-auto px-4 py-2 text-xs bg-white border rounded-full cursor-pointer border-black/10 bg-opacity-20"
        >
          Cart
        </li>
      </ul>
    </nav>
  </header>
</template>
