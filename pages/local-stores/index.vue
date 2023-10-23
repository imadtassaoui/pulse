<sctipt>

</sctipt>

<template>
  <div class="flex flex-col w-full h-screen md:flex-row">
    <NuxtLink
      to="/"
      class="w-full bg-center bg-cover md:w-1/3 h-1/3 md:h-full bg-shop1"
    >
      <div
        class="flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ease-in bg-black/50 hover:bg-black/30"
      >
        <h2 class="text-2xl text-white">new york, us</h2>
        <p class="text-2xl capitalize text-dark-20">view in map</p>
      </div>
    </NuxtLink>
    <NuxtLink
      to="/"
      class="w-full bg-center bg-cover md:w-1/3 h-1/3 md:h-full bg-shop2"
    >
      <div
        class="flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ease-in bg-black/50 hover:bg-black/30"
      >
        <h2 class="text-2xl text-white">london, uk</h2>
        <p class="text-2xl capitalize text-dark-20">view in map</p>
      </div>
    </NuxtLink>
    <NuxtLink
      to="/"
      class="w-full bg-center bg-cover md:w-1/3 h-1/3 md:h-full bg-shop3"
    >
      <div
        class="flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ease-in bg-black/50 hover:bg-black/30"
      >
        <h2 class="text-2xl text-white">tokyo, jp</h2>
        <p class="text-2xl capitalize text-dark-20">view in map</p>
      </div>
    </NuxtLink>
  </div>
</template>
