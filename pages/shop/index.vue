<script setup lang="ts">
useHead({
  title: "Shop All — Pulse Apparel ©",
  meta: [
    {
      name: "description",
      content:
        "Explore the complete collection of stylish and comfortable clothing at Pulse Apparel. Shop all the latest trends for every occasion.",
    },
  ],
});
</script>

<template>
  <div>
    <div
      class="w-full h-[148px] lg:h-[220px] bg-models bg-cover sticky top-0 -z-10"
    />
    <Products headline="Shop all" filter type="UNISEX" />
  </div>
</template>
