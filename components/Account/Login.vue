<script setup lang="ts">
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore());
const form = useForm();
const err = ref("");
const router = useRouter();
const reqForm = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  await authenticateUser(reqForm.value);

  if (authenticated.value) {
    navigateTo("/");
  }

  if (!authenticated.value) {
    err.value = "Invalid credentials";
  }
};
</script>
<template>
  <form
    @submit.prevent="handleLogin"
    class="flex flex-col max-w-[352px] w-full gap-8 items-center justify-center"
  >
    <H2>Login</H2>
    <div class="flex flex-col w-full gap-4">
      <input
        v-model="reqForm.email"
        placeholder="Email"
        type="email"
        required
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
      <input
        v-model="reqForm.password"
        placeholder="Password"
        type="password"
        required
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
    </div>
    <p class="text-[#B91C1C]">{{ err }}</p>
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

      <!-- <p class="cursor-pointer" @click="form = 'forgetPass'">
        Forgot your password?
      </p> -->
    </div>
  </form>
</template>
