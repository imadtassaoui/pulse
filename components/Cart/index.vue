<script setup lang="ts">
const cart = useCart();
</script>

<template>
  <div
    v-if="cart"
    class="fixed top-0 left-0 z-10 flex flex-col w-screen h-screen bg-white/50"
  >
    <div @click="cart = !cart" class="w-[calc(100%-420px)] h-full" />
    <div
      class="fixed justify-between top-0 right-0 flex flex-col max-w-[420px] w-full h-screen bg-white border-l border-black/10 slideRight"
    >
      <div class="flex flex-col px-6 gap-8 w-full py-8 h-full">
        <div class="flex justify-between w-full">
          <H2>Cart</H2>
          <img
            class="cursor-pointer"
            @click="cart = !cart"
            src="../../assets/cross.svg"
            alt=""
          />
        </div>
        <div
          class="flex flex-col w-full gap-4 overflow-y-scroll h-auto overflow-auto"
        >
          <CartElement />
          <div class="w-full h-[1px] bg-dark-20" />
          <CartElement />
          <div class="w-full h-[1px] bg-dark-20" />
          <CartElement />
          <div class="w-full h-[1px] bg-dark-20" />
          <CartElement />
          <div class="w-full h-[1px] bg-dark-20" />
        </div>
      </div>
      <div
        class="flex z-20 w-full flex-col gap-4 pb-8 bg-white h-fit items-end"
      >
        <div class="h-[1px] bg-dark-20 w-full" />
        <div class="flex justify-between px-6 w-full">
          <h3>total</h3>
          <p>€190</p>
        </div>
        <div class="px-6 w-full">
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  </div>
</template>
