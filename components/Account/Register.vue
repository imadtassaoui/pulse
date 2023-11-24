<script setup lang="ts">
import axios from "axios";
const form = useForm();
const err = ref("");
const reqForm = ref({
  username: "",
  email: "",
  password: "",
});

const handleRegister = async () => {
  try {
    const response = await axios.post(
      "https://pulse-api-one.vercel.app/auth/register",
      reqForm.value
    );
    console.log(response.data);
  } catch (error: any) {
    err.value = error.response.data;
    console.log(error.response.data);
  }
};
</script>
<template>
  <form
    @submit.prevent="handleRegister"
    class="flex flex-col max-w-[352px] w-full gap-8 items-center justify-center"
  >
    <H2>register</H2>
    <div class="flex flex-col w-full gap-4">
      <input
        placeholder="Name"
        required
        v-model="reqForm.username"
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
      <input
        placeholder="Email"
        required
        v-model="reqForm.email"
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
      <input
        placeholder="Password"
        required
        v-model="reqForm.password"
        type="password"
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
    </div>
    <p>{{ err }}</p>
    <Button>register</Button>
    <div class="w-full h-[1px] bg-dark-20" />
    <div class="flex flex-col items-center justify-center gap-2 text-dark-60">
      <p @click="form = 'login'" class="cursor-pointer">Return to login</p>
    </div>
  </form>
</template>
