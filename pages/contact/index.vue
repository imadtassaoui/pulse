<script setup lang="ts">
const form = useForm();
</script>

<template>
  <div class="flex flex-col-reverse w-full h-screen lg:flex-row">
    <div
      class="flex items-center justify-center w-full h-full px-4 lg:w-1/2 lg:h-full"
    >
      <Contact />
    </div>
    <div
      class="bg-cover md:h-[360px] h-[148px] w-full lg:w-1/2 lg:h-full bg-contact"
    />
  </div>
</template>
