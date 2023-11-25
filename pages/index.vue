<script setup lang="ts">
useHead({
  title: "Pulse Apparel © — Fashion for Every Beat",
  meta: [
    {
      name: "description",
      content:
        "Discover the latest trends in fashion at Pulse Apparel. Explore our stylish and comfortable clothing for every occasion.",
    },
  ],
});
</script>

<template>
  <div class="snap-y">
    <Hero />
    <Products headline="new arrivals" type="UNISEX" :elementNumber="8" />
    <Cta />
  </div>
</template>
