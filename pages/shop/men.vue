<script setup lang="ts">
useHead({
  title: "Men's Collection — Pulse Apparel ©",
  meta: [
    {
      name: "description",
      content:
        "Discover the latest trends in men's fashion at Pulse Apparel. Explore our stylish and comfortable men's clothing for every occasion.",
    },
  ],
});
</script>

<template>
  <div>
    <div
      class="w-full h-[148px] lg:h-[220px] bg-modelMan bg-cover sticky top-0 -z-10"
    />
    <Products headline="Men's" filter type="M" />
  </div>
</template>
