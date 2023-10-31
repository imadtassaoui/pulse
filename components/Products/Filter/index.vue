<script setup lang="ts">
const activeColor = "text-black";
const activeFilter = useState("activeFilter", () => "all");

const filters = ["all", "t-shirt", "hoodies", "shorts", "hats"];
</script>

<template>
  <div class="flex gap-4 flex-col lg:flex-row lg:gap-12">
    <h3>filter</h3>
    <div class="flex flex-wrap gap-x-5 gap-y-2">
      <h4
        v-for="filter in filters"
        @click="activeFilter = filter"
        :class="{
          'text-dark-30 cursor-pointer': activeFilter !== filter,
          'text-black': activeFilter === filter,
        }"
      >
        {{ filter }}
      </h4>
    </div>
  </div>
</template>
