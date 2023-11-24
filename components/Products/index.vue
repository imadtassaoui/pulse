<script setup lang="ts">
const productId = computed(() => useRoute().params.id);

const props = defineProps({
  headline: {
    type: String,
    required: true,
  },
  filter: Boolean,
  type: String,
  category: String,
  elementNumber: Number,
});

let state = reactive({
  activeCategory: ref("ALL"),
  categories: ["ALL", "T-SHIRT", "HOODIES", "SHORTS"],
  products: [],
  pending: ref(false),
});

const fetchData = async () => {
  const endpoint = `https://pulse-api-one.vercel.app/products/${props.type}${
    state.activeCategory !== "ALL" ? `/${state.activeCategory}` : ""
  }`;
  const { data, pending } = await useFetch(endpoint, { lazy: true });
  if (productId.value) {
    // remove the product with the id from the array
    data.value = data.value.filter(
      (product) => product._id !== productId.value
    );
  }
  if (data.value && props.elementNumber) {
    state.products = toRaw(await data.value).slice(0, props.elementNumber);
  } else {
    state.products = toRaw(await data.value);
  }
  state.pending = pending;
};

watchEffect(() => {
  if (process.client) {
    fetchData();
  }
});

const products = computed(() => state.products);
const pending = computed(() => state.pending);
</script>

<template>
  <div class="flex flex-col gap-8 px-4 py-8 bg-white lg:py-16 min-h-screen">
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
      <h3 v-if="pending">Loading ...</h3>
      <div class="flex flex-wrap gap-2">
        <ProductsElement v-for="product in products" :product="product" />
      </div>
    </div>
  </div>
</template>
