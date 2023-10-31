<script setup lang="ts"></script>
<template>
  <div class="flex flex-col w-screen h-screen md:h-auto">
    <div class="flex flex-col w-full h-2/3 md:flex-row md:h-screen">
      <NuxtLink
        to="/shop/men"
        class="bg-center bg-cover h-1/2 md:w-1/2 md:h-full bg-men"
      >
        <div
          class="w-full h-full p-4 transition-colors duration-200 ease-in bg-black/20 hover:bg-white/20"
        >
          <h3 class="text-[24px] text-white">Men's</h3>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/shop/women"
        class="bg-center bg-cover h-1/2 md:w-1/2 md:h-full bg-women"
      >
        <div
          class="w-full h-full p-4 transition-colors duration-200 ease-in bg-black/20 hover:bg-white/20"
        >
          <h3 class="text-[24px] text-white">Women's</h3>
        </div>
      </NuxtLink>
    </div>
    <NuxtLink
      to="/local-stores"
      class="h-1/3 md:h-[304px] bg-shop bg-center bg-cover"
    >
      <div
        class="w-full h-full p-4 transition-colors duration-200 ease-in bg-black/20 hover:bg-white/20"
      >
        <h3 class="text-[24px] text-white">Local stores</h3>
      </div>
    </NuxtLink>
  </div>
</template>
