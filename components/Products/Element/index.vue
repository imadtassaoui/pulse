<script setup lang="ts"></script>

<template>
  <NuxtLink
    to="/shop"
    class="flex flex-col gap-2 w-full md:w-[calc(50%-4px)] lg:w-[calc(25%-6px)]"
  >
    <div class="w-auto h-[488px] group overflow-hidden relative">
      <img
        class="w-full absolute left-0 top-0"
        src="../../../assets/hoodie2.png"
        alt=""
      />
      <img
        class="w-full absolute left-0 top-0 group-hover:opacity-0 transition-opacity duration-200 ease-in"
        src="../../../assets/hoodie1.png"
        alt=""
      />
    </div>
    <div class="flex flex-col">
      <h3>LVCIDIA Hoodie</h3>
      <p>€95</p>
    </div>
  </NuxtLink>
</template>
