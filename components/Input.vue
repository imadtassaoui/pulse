<script setup lang="ts">
defineProps({
  vModel: String,
});
</script>
<template>
  <input
    placeholder="Email"
    required
    class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
  />
</template>
