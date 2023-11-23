<script setup lang="ts">
import axios from "axios";
const form = useForm();
const isAuth = useAuth();
const err = ref("");
const router = useRouter();
const reqForm = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  try {
    const response = await axios.post(
      "https://pulse-api-one.vercel.app/auth/login",
      reqForm.value
    );
    if (response.data) {
      localStorage.setItem("token", response.data);
      console.log(response.data);
      isAuth.value = true;

      router.push("/");
    }
  } catch (error: any) {
    err.value = error.response.data;
    console.log(error.response.data);
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
      <p>{{ reqForm }}</p>
      <input
        v-model="reqForm.password"
        placeholder="Password"
        type="password"
        required
        class="w-full px-5 py-3 border rounded-full focus:outline-dark-20 font-secondary"
      />
    </div>
    <p>{{ err }}</p>
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
