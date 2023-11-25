<script setup lang="ts">
//get keyword from url
const keyword = computed(() => useRoute().params.keyword);
const notFound = ref(false);

useHead({
  title: `${
    keyword.value.charAt(0).toUpperCase() + keyword.value.slice(1)
  } search — Pulse Apparel ©`,
  meta: [
    {
      name: "description",
      content: `Explore the latest results for ${keyword.value} search at Pulse Apparel. Discover stylish and comfortable clothing for every occasion.`,
    },
  ],
});

interface Product {
  sizes: {
    XXL: number;
    XL: number;
    L: number;
    M: number;
    S: number;
    XS: number;
  };
  _id: string;
  name: string;
  price: number;
  oldPrice?: number; // Optional field
  category: "T-SHIRT" | "HOODIES" | "PANTS" | "SHORTS" | "HATS";
  gender: "M" | "F" | "UNISEX";
  images: string[];
  details: string;
  fabricAndFit: string;
  __v: number;
}

interface State {
  products: Product[];
  pending: Ref<boolean>;
}

let state = reactive<State>({
  products: [],
  pending: ref(false),
});

const fetchData = async () => {
  const endpoint = `https://pulse-api-one.vercel.app/search/${keyword.value}}`;
  try {
    const { data, pending } = await useFetch<{ value: Product[] }>(endpoint, {
      lazy: true,
    });

    if (data !== null && data.value) {
      state.products = toRaw(data.value);
      if (state.products.length === 0) notFound.value = true;

      console.log(state.products);
    }

    state.pending = pending;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const products = computed(() => state.products);
const pending = computed(() => state.pending);

watchEffect(() => {
  if (process.client) {
    fetchData();
  }
});
</script>

<template>
  <div>
    <!-- <div
      class="w-full h-[148px] lg:h-[220px] bg-modelSearch bg-cover sticky top-0 -z-10"
    /> -->
    <div
      class="flex flex-col gap-8 px-4 pt-24 pb-8 bg-white lg:py-16 min-h-screen"
    >
      <H2>Search for ({{ keyword }})</H2>
      <div class="flex flex-col gap-6">
        <h3 v-if="pending">Loading ...</h3>
        <div class="flex flex-wrap gap-2">
          <ProductsElement v-for="product in products" :product="product" />
        </div>
        <div v-if="notFound" class="flex flex-col gap-4 items-start">
          <h3 class="text-2xl">No products found</h3>
          <h4
            @click="navigateTo('/shop')"
            color="black"
            class="underline cursor-pointer"
          >
            ← Discover products
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
