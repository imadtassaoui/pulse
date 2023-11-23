<script setup lang="ts">
defineProps({
  submit: Boolean,
});
</script>
<template>
  <button type="submit" class="w-full py-3 text-white bg-black rounded-full">
    <slot />
  </button>
</template>
