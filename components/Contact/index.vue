<script setup lang="ts">
const form = useForm();
</script>
<template>
  <form
    class="flex flex-col max-w-[352px] w-full gap-8 items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <H2 class="text-center">contact</H2>
      <p class="text-center text-dark-60">We will email you back ASAP</p>
    </div>
    <div class="flex flex-col w-full gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="email" placeholder="Subject" />
      <textarea
        class="w-full px-5 py-3 border rounded-3xl h-[145px] max-h-[145px] focus:outline-dark-20 font-secondary"
        type="email"
        placeholder="Message"
      />
    </div>
    <Button>send</Button>
    <p class="text-[#F90000]">There was an error sending your message.</p>
  </form>
</template>
