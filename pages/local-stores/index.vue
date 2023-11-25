<script setup lang="ts">
useHead({
  title: "Local Stores — Pulse Apparel ©",
  meta: [
    {
      name: "description",
      content:
        "Find a Pulse Apparel local store near you. Explore our physical stores to shop our latest collections and experience our stylish and comfortable clothing in person.",
    },
  ],
});
</script>

<template>
  <div class="flex flex-col w-full h-screen md:flex-row">
    <NuxtLink
      to="https://www.google.com/maps/place/Pulse+Clothing/@41.4055433,1.9769274,11.5z/data=!4m10!1m2!2m1!1spulse+clothing!3m6!1s0x12a499ead7f82349:0x7c18b0e73cb5e915!8m2!3d41.4090402!4d2.1327491!15sCg5wdWxzZSBjbG90aGluZ1oQIg5wdWxzZSBjbG90aGluZ5IBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11kj6x3pvr?entry=ttu"
      class="w-full bg-center bg-cover md:w-1/3 h-1/3 md:h-full bg-shop1"
      target="_blank"
    >
      <div
        class="flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ease-in bg-black/50 hover:bg-black/30"
      >
        <h2 class="text-2xl text-white">new york, us</h2>
        <p class="text-2xl capitalize text-dark-20">view in map</p>
      </div>
    </NuxtLink>
    <NuxtLink
      to="https://www.google.com/maps/place/Pulse+Clothing/@41.4055433,1.9769274,11.5z/data=!4m10!1m2!2m1!1spulse+clothing!3m6!1s0x12a499ead7f82349:0x7c18b0e73cb5e915!8m2!3d41.4090402!4d2.1327491!15sCg5wdWxzZSBjbG90aGluZ1oQIg5wdWxzZSBjbG90aGluZ5IBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11kj6x3pvr?entry=ttu"
      class="w-full bg-center bg-cover md:w-1/3 h-1/3 md:h-full bg-shop2"
      target="_blank"
    >
      <div
        class="flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ease-in bg-black/50 hover:bg-black/30"
      >
        <h2 class="text-2xl text-white">london, uk</h2>
        <p class="text-2xl capitalize text-dark-20">view in map</p>
      </div>
    </NuxtLink>
    <NuxtLink
      to="https://www.google.com/maps/place/Pulse+Clothing/@41.4055433,1.9769274,11.5z/data=!4m10!1m2!2m1!1spulse+clothing!3m6!1s0x12a499ead7f82349:0x7c18b0e73cb5e915!8m2!3d41.4090402!4d2.1327491!15sCg5wdWxzZSBjbG90aGluZ1oQIg5wdWxzZSBjbG90aGluZ5IBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11kj6x3pvr?entry=ttu"
      class="w-full bg-center bg-cover md:w-1/3 h-1/3 md:h-full bg-shop3"
      target="_blank"
    >
      <div
        class="flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ease-in bg-black/50 hover:bg-black/30"
      >
        <h2 class="text-2xl text-white">tokyo, jp</h2>
        <p class="text-2xl capitalize text-dark-20">view in map</p>
      </div>
    </NuxtLink>
  </div>
</template>
