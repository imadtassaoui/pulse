<script setup lang="ts">
const form = useForm();
const reqForm = ref({
  email: "",
  subject: "",
  message: "",
});
const success = ref(false);
const onSubmit = async () => {
  await setTimeout(() => {
    success.value = true;
    reqForm.value = {
      email: "",
      subject: "",
      message: "",
    };
  }, 2000);
};
</script>
<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col max-w-[352px] w-full gap-8 items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <H2 class="text-center">contact</H2>
      <p class="text-center text-dark-60">We will email you back ASAP</p>
    </div>
    <div class="flex flex-col w-full gap-4">
      <input
        v-model="reqForm.email"
        placeholder="Email"
        type="email"
        required
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
        autocomplete="email"
      />
      <input
        v-model="reqForm.subject"
        placeholder="Subject"
        type="text"
        required
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
      <textarea
        class="w-full px-5 py-3 border rounded-3xl h-[145px] max-h-[145px] focus:outline-dark-20 font-secondary"
        placeholder="Message"
        v-model="reqForm.message"
        required
      />
    </div>
    <Button @onclick="onSubmit">send</Button>
    <p v-if="success" class="text-[#00f908]">
      Your message was sent successfully
    </p>
  </form>
</template>
