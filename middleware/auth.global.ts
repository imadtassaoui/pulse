import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const sessionToken = useCookie("token"); // get token from cookies

  // fetch verification endpoint
  const { status }: any = await useFetch(
    "https://pulse-api-one.vercel.app/auth/token",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        sessionToken: sessionToken.value,
      },
    }
  );

  const validToken = status.value === "success";

  if (validToken) {
    authenticated.value = true; // update the state to authenticated
  } else {
    sessionToken.value = null; // clear the token cookie
    authenticated.value = false; // update the state to authenticated
  }

  // if token exists and url is /login redirect to homepage
  if (validToken && to?.name === "account") {
    abortNavigation();
    return navigateTo("/");
  }
});
