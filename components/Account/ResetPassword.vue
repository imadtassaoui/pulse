<script setup lang="ts">
const form = useForm();
</script>
<template>
  <form
    class="flex flex-col max-w-[352px] w-full gap-8 items-center justify-center"
  >
    <H2 class="text-center">reset password</H2>
    <div class="flex flex-col w-full gap-4">
      <p class="text-center text-dark-60">
        We will send you an email to reset your password
      </p>
      <Input type="email" placeholder="Email" />
    </div>
    <Button>submit</Button>
    <div class="w-full h-[1px] bg-dark-20" />
    <div class="flex flex-col items-center justify-center gap-2 text-dark-60">
      <p @click="form = 'login'">Cancel</p>
    </div>
  </form>
</template>
