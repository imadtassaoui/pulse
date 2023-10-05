<script setup lang="ts"></script>
<template>
  <header class="fixed z-10 flex-col gap-24 p-4 mb-32 bg-white">
    <nav class="flex justify-between w-full mt-12">
      <HeaderContainer>
        <NuxtLink to="/">Home</NuxtLink>
      </HeaderContainer>
      <HeaderContainer>
        <NuxtLink class="">Menu</NuxtLink>
      </HeaderContainer>
    </nav>
    <nav class="top-0 left-0 flex flex-col w-screen h-screen gap-12 bg-white">
      <HeaderContainer>
        <ul class="flex flex-col justify-end gap-4">
          <li><NuxtLink to="/shop">Shop All</NuxtLink></li>
          <li><NuxtLink to="/shop/men">Men's</NuxtLink></li>
          <li><NuxtLink to="/shop/women">Women's</NuxtLink></li>
          <li><NuxtLink to="/local-stores">Local stores</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </HeaderContainer>
      <HeaderContainer>
        <ul class="flex flex-col gap-4">
          <li>Search</li>
          <li><NuxtLink to="/account">Account</NuxtLink></li>
          <li>Cart</li>
        </ul>
      </HeaderContainer>
    </nav>
  </header>
</template>
