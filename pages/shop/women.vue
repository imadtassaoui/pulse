<script setup lang="ts">
useHead({
  title: "Women's Collection — Pulse Apparel ©",
  meta: [
    {
      name: "description",
      content:
        "Explore the latest trends in women's fashion at Pulse Apparel. Discover our stylish and comfortable women's clothing for every occasion.",
    },
  ],
});
</script>

<template>
  <div>
    <div
      class="w-full h-[148px] lg:h-[220px] bg-modelWoman bg-cover sticky top-0 -z-10"
    />
    <Products headline="Women's" filter type="F" />
  </div>
</template>
