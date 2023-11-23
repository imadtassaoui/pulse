// export default defineNuxtRouteMiddleware((to, from) => {
//   if (process.client) {
//     const auth = localStorage.getItem("token");
//     if (to.path === "/account" && auth) {
//       return navigateTo("/");
//     }
//   }
// });
