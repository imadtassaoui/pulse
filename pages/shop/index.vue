<script setup lang="ts">
const { data } = await useFetch("http://localhost:8000/products/");
const products = toRaw(data.value);
console.log(products);
</script>

<template>
  <div>
    <div
      class="w-full h-[148px] lg:h-[220px] bg-models bg-cover sticky top-0 -z-10"
    />
    <Products headline="Shop all" filter type="UNISEX" />
  </div>
</template>
