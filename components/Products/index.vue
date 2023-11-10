<script setup>
const props = defineProps({
  headline: {
    type: String,
    required: true,
  },
  filter: Boolean,
  type: String,
  category: String,
});

let state = reactive({
  activeCategory: ref("ALL"),
  categories: ["ALL", "T-SHIRT", "HOODIES", "SHORTS", "HATS"],
  products: [],
  pending: ref(false),
});

const fetchData = async () => {
  const endpoint = `http://localhost:8000/products/${props.type}${
    state.activeCategory !== "ALL" ? `/${state.activeCategory}` : ""
  }`;
  const { data, pending } = await useFetch(endpoint, { lazy: true });
  console.log(toRaw(await data.value));
  state.products = toRaw(await data.value);
  state.pending = pending;
};

watchEffect(() => {
  fetchData();
});

const products = computed(() => state.products);
const pending = computed(() => state.pending);

onUpdated(() => {
  console.log(state.activeCategory);
});
</script>

<template>
  <div class="flex flex-col gap-8 px-4 py-8 bg-white lg:py-16">
    <H2>{{ headline }}</H2>
    <div class="flex flex-col gap-6">
      <ProductsFilter
        v-if="filter"
        :categories="state.categories"
        @changeActive="
          async (payload) => {
            state.activeCategory = await payload;
          }
        "
        :activeCategory="state.activeCategory"
      />
      <div class="flex flex-wrap gap-2">
        <h3 v-if="pending">Loading ...</h3>
        <ProductsElement v-for="product in products" :product="product" />
      </div>
    </div>
  </div>
</template>
