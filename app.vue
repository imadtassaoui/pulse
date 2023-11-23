<script setup lang="ts">
const isAuth = useAuth();
const router = useRouter();

onBeforeMount(() => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    isAuth.value = true;
  } else {
    isAuth.value = false;
  }
});
</script>

<template class="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
  <Header />
  <NuxtPage />
  <Cart />
  <Search />
  <Footer />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
