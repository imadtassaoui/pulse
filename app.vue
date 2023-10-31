<script setup lang="ts"></script>

<template>
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
