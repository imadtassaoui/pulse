<script setup lang="ts">
import axios from "axios";
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore());

const router = useRouter();
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
    if (response.data) {
      await authenticateUser(reqForm.value);

      if (authenticated.value) {
        navigateTo("/");
      }
    }
  } catch (error: any) {
    err.value = error.response.data;
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
        type="text"
        v-model="reqForm.username"
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
      <input
        placeholder="Email"
        required
        type="email"
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
    <p class="text-[#B91C1C]">{{ err }}</p>
    <Button>register</Button>
    <div class="w-full h-[1px] bg-dark-20" />
    <div class="flex flex-col items-center justify-center gap-2 text-dark-60">
      <p @click="form = 'login'" class="cursor-pointer">Return to login</p>
    </div>
  </form>
</template>
