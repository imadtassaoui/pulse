<script setup lang="ts">
const nav = useNav();
defineProps({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink @click="nav = false" :to="path"
    ><li
      class="flex gap-2 items-center justify-center w-auto px-4 py-2 text-xs bg-white border rounded-full border-black/10 bg-opacity-20 lg:bg-transparent lg:opacity-100 lg:border-none"
    >
      <slot />
      <span>{{ label }}</span>
    </li></NuxtLink
  >
</template>
