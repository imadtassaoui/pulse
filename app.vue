<script setup lang="ts">
const router = useRouter();

// Temporary solution until page refresh bug is fixed
const messages = [
  `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
  `NotFoundError: The object can not be found here.`, // safari
];
if (typeof window !== "undefined") {
  window.addEventListener("error", (ev) => {
    if (messages.includes(ev.message)) {
      ev.preventDefault();
      window.location.reload();
    }
  });
}
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
