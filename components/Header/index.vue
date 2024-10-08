<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
const { logUserOut } = useAuthStore(); // use logUserOut action from auth store

const nav = useNav();
const cart = useCart();
const search = useSearch();

const handleCart = () => {
  if (!authenticated.value) {
    navigateTo("/account");
  } else {
    cart.value = !cart.value;
  }
};
</script>

<template>
  <header
    :class="{
      'fixed top-0 left-0 z-10 flex flex-col w-full h-auto gap-4 p-4 mb-32 lg:flex-row lg:bg-transparent lg:m-0': 1,
      'bg-white': nav,
    }"
  >
    <nav class="flex justify-between w-full h-auto lg:w-auto lg:h-fit">
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
        {{ !nav ? "Menu" : "Close" }}
      </button>
    </nav>

    <nav
      :class="{
        'top-0 gap-12 left-0 flex flex-col w-full  pb-16 lg:flex-row lg:flex lg:justify-between lg:gap-0 lg:p-0 ': 1,
        hidden: !nav,
      }"
    >
      <ul
        class="flex flex-col items-end justify-end w-full gap-4 lg:flex-row lg:justify-start lg:bg-white lg:border lg:rounded-full lg:border-black/10 lg:bg-opacity-20 lg:gap-0 lg:w-auto"
      >
        <HeaderContainer label="Shop All" path="/shop" />
        <HeaderContainer label="Men's" path="/shop/men" />
        <HeaderContainer label="Women's" path="/shop/women" />
        <HeaderContainer label="Local stores" path="/local-stores" />
        <HeaderContainer label="Contact" path="/contact" />
      </ul>
      <ul
        class="flex flex-col items-end gap-4 lg:flex-row lg:bg-white lg:border lg:rounded-full lg:border-black/10 lg:bg-opacity-20 lg:gap-0"
      >
        <li
          @click="search = !search"
          class="flex gap-2 items-center justify-center w-auto px-4 py-2 text-xs bg-white border rounded-full cursor-pointer border-black/10 bg-opacity-20 lg:bg-transparent lg:opacity-100 lg:border-none"
        >
          <img src="../../assets/search.svg" alt="" />
          <span> Search </span>
        </li>
        <li
          @click="handleCart"
          class="flex gap-2 items-center justify-center w-auto px-4 py-2 text-xs bg-white border rounded-full cursor-pointer border-black/10 bg-opacity-20 lg:bg-transparent lg:opacity-100 lg:border-none"
        >
          <img src="../../assets/bag.svg" alt="" />

          <span>Cart</span>
        </li>
        <HeaderContainer v-if="!authenticated" label="Account" path="/account">
          <img src="../../assets/user.svg" alt="" />
        </HeaderContainer>

        <HeaderContainer
          class="cursor-pointer text-[#B91C1C]"
          @click="logUserOut"
          v-if="authenticated"
          label="Logout"
        >
          <img src="../../assets/log-out.svg" alt="" />
        </HeaderContainer>
      </ul>
    </nav>
  </header>
</template>
