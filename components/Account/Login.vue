<script setup lang="ts">
const form = useForm();
</script>
<template>
  <form
    class="flex flex-col max-w-[352px] w-full gap-8 items-center justify-center"
  >
    <H2>Login</H2>
    <div class="flex flex-col w-full gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </div>
    <Button>Login</Button>
    <div class="w-full h-[1px] bg-dark-20" />
    <div class="flex flex-col items-center justify-center gap-2 text-dark-60">
      <p>
        Don’t have an account?
        <span
          @click="form = 'register'"
          class="underline cursor-pointer font-secondary bold"
          >Create one.</span
        >
      </p>

      <p class="cursor-pointer" @click="form = 'forgetPass'">
        Forgot your password?
      </p>
    </div>
  </form>
</template>
