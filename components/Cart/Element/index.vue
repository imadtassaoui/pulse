<script setup lang="ts">
import { CartItem } from "~/store/cart";
import { useCartStore } from "~/store/cart";

const {
  removeFromCart,
  incrementCartElementQuantity,
  decrementCartElementQuantity,
} = useCartStore(); // use authenticateUser action from  auth store

const props = defineProps({
  item: {
    type: Object as PropType<CartItem>,
    required: true,
  },
});

const handleRemoveFromCart = async () => {
  await removeFromCart(props.item.product as string, props.item.size);
};

const handleIncrement = async () => {
  await incrementCartElementQuantity(
    props.item.product as string,
    props.item.size
  );
};

const handleDecrement = async () => {
  await decrementCartElementQuantity(
    props.item.product as string,
    props.item.size
  );
};
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <div class="flex w-full gap-2">
      <img :src="item.image" alt="" class="w-1/3 h-[136px] object-cover" />
      <div class="flex flex-col justify-between w-2/3 h-full">
        <div class="flex justify-between">
          <h3>{{ item.name }} ({{ item.size }})</h3>
          <p>€{{ item.totalPrice }}</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex gap-2">
            <span class="cursor-pointer" @click="handleDecrement">-</span>
            {{ item.quantity }}
            <span class="cursor-pointer" @click="handleIncrement">+</span>
          </div>
          <p
            @click="handleRemoveFromCart"
            class="font-primary text-[12px] cursor-pointer"
          >
            remove
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
