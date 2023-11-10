<script setup lang="ts">
// const activeCategory = useState("activeCategory", () => "ALL");
defineProps({
  categories: {
    type: Array<string>,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
});
// onUnmounted(() => {
//   activeCategory.value = "ALL";
// });
</script>

<template>
  <div class="flex gap-4 flex-col lg:flex-row lg:gap-12">
    <h3>filter</h3>
    <div class="flex flex-wrap gap-x-5 gap-y-2">
      <h4
        v-for="category in categories"
        @click="$emit('changeActive', category)"
        :class="{
          'text-dark-30 cursor-pointer': activeCategory !== category,
          'text-black': activeCategory === category,
        }"
      >
        {{ category }}
      </h4>
    </div>
  </div>
</template>
