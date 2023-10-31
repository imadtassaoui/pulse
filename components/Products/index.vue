<script setup lang="ts">
const props = defineProps({
  headline: {
    type: String,
    required: true,
  },
  filter: {
    type: Boolean,
  },
  type: {
    type: String,
  },
});
</script>

<template>
  <div class="flex flex-col gap-8 px-4 py-8 bg-white lg:py-16">
    <H2>{{ headline }}</H2>
    <div class="flex flex-col gap-6">
      <ProductsFilter v-if="filter" />
      <div class="flex flex-wrap gap-2">
        <ProductsElement />
        <ProductsElement />
        <ProductsElement />
        <ProductsElement />
        <ProductsElement v-if="type !== 'filtered'" />
        <ProductsElement v-if="type !== 'filtered'" />
        <ProductsElement v-if="type !== 'filtered'" />
        <ProductsElement v-if="type !== 'filtered'" />
        <ProductsElement v-if="type !== 'filtered'" />
        <ProductsElement v-if="type !== 'filtered'" />
        <ProductsElement v-if="type !== 'filtered'" />
      </div>
    </div>
  </div>
</template>
