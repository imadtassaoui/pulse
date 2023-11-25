<script setup lang="ts">
const form = useForm();

useHead({
  title: "Account — Pulse Apparel ©",
  meta: [
    { name: "description", content: "Manage your Pulse Apparel account. " },
    // Add other meta tags as needed
  ],
});
</script>

<template>
  <div class="flex flex-col-reverse w-full h-screen lg:flex-row">
    <div
      class="flex items-center justify-center w-full h-full px-4 lg:w-1/2 lg:h-full"
    >
      <AccountLogin v-if="form === 'login'" />
      <AccountRegister v-if="form === 'register'" />
      <AccountResetPassword v-if="form === 'forgetPass'" />
    </div>
    <div
      class="bg-cover md:h-[360px] h-[148px] w-full lg:w-1/2 lg:h-full bg-account"
    />
  </div>
</template>
