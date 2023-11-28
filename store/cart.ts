import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export interface CartItem {
  product: string;
  size: string;
  quantity: number;
  totalPrice: number;
  name: string;
  image: string;
  _id: string;
}

export interface Cart {
  _id: string;
  userId: string;
  totalPrice: number;
  items: CartItem[];
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as Cart[],
    loading: false,
  }),
  actions: {
    async fetchUserCart() {
      const token = useCookie("token");
      if (!token.value) {
        return undefined;
      }
      try {
        const { data, pending, error }: any = await useFetch(
          "https://pulse-api-one.vercel.app/cart",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.value}`,
            },
          }
        );

        this.loading = pending;

        if (data.value) {
          this.cart = data.value;
          //   console.log(data.value);
        }

        if (error.value) {
          throw new Error(error.value);
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
        // Handle the error appropriately, depending on your use case
        return undefined;
      }
    },
    clearCart() {
      this.cart = []; // or any other logic to reset the cart state
    },
    async addToCart(productId: string, size: string, quantity: number) {
      const token = useCookie("token");
      if (!token.value) {
        return undefined;
      }
      try {
        const { data, pending, error }: any = await useFetch(
          "https://pulse-api-one.vercel.app/cart",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.value}`,
            },
            body: {
              productId,
              size,
              quantity,
            },
          }
        );

        this.loading = pending;

        if (data.value) {
          this.cart = data.value;
          //   console.log(data.value);
        }

        if (error.value) {
          throw new Error(error.value);
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
        // Handle the error appropriately, depending on your use case
        return undefined;
      }
    },
    async removeFromCart(productId: string, size: string) {
      const token = useCookie("token");
      if (!token.value) {
        return undefined;
      }
      try {
        const { data, pending, error }: any = await useFetch(
          "https://pulse-api-one.vercel.app/cart",
          {
            method: "delete",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.value}`,
            },
            body: {
              productId,
              size,
            },
          }
        );

        this.loading = pending;

        if (data.value) {
          this.cart = data.value;
          //   console.log(data.value);
        }

        if (error.value) {
          throw new Error(error.value);
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
        // Handle the error appropriately, depending on your use case
        return undefined;
      }
    },
    async incrementCartElementQuantity(productId: string, size: string) {
      const token = useCookie("token");
      if (!token.value) {
        return undefined;
      }
      try {
        const { data, pending, error }: any = await useFetch(
          "https://pulse-api-one.vercel.app/cart/increase",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.value}`,
            },
            body: {
              productId,
              size,
            },
          }
        );

        this.loading = pending;

        if (data.value) {
          this.cart = data.value;
          //   console.log(data.value);
        }

        if (error.value) {
          throw new Error(error.value);
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
        // Handle the error appropriately, depending on your use case
        return undefined;
      }
    },
    async decrementCartElementQuantity(productId: string, size: string) {
      const token = useCookie("token");
      if (!token.value) {
        return undefined;
      }
      try {
        const { data, pending, error }: any = await useFetch(
          "https://pulse-api-one.vercel.app/cart/decrease",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.value}`,
            },
            body: {
              productId,
              size,
            },
          }
        );

        this.loading = pending;

        if (data.value) {
          this.cart = data.value;
          //   console.log(data.value);
        }

        if (error.value) {
          throw new Error(error.value);
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
        // Handle the error appropriately, depending on your use case
        return undefined;
      }
    },
  },
});
