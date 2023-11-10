<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="`/shop/${product._id}`"
    class="flex flex-col gap-2 w-full md:w-[calc(50%-4px)] lg:w-[calc(25%-6px)]"
  >
    <div class="w-auto group overflow-hidden relative">
      <img
        class="w-full left-0 top-0"
        src="../../../assets/hoodie2.png"
        alt=""
      />
      <img
        class="w-full m-auto top-0 left-0 absolute group-hover:opacity-0 transition-opacity duration-200 ease-in"
        src="../../../assets/hoodie1.png"
        alt=""
      />
    </div>
    <div class="flex flex-col">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}€</p>
    </div>
  </NuxtLink>
</template>
