<script setup lang="ts">
const form = useForm();
</script>
<template>
  <form
    class="flex flex-col max-w-[352px] w-full gap-8 items-center justify-center"
  >
    <H2>register</H2>
    <div class="flex flex-col w-full gap-4">
      <Input type="text" placeholder="First name" />
      <Input placeholder="Last Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </div>
    <Button>register</Button>
    <div class="w-full h-[1px] bg-dark-20" />
    <div class="flex flex-col items-center justify-center gap-2 text-dark-60">
      <p @click="form = 'login'" class="cursor-pointer">Return to login</p>
    </div>
  </form>
</template>
