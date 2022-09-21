import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { ProductType, ProductInCartType } from "@/types/Product";

export const useCounterStore = defineStore("counter", () => {
  const cartItems = reactive<ProductInCartType[]>([]);
  function addToCart(item: ProductInCartType) {
    cartItems.push(item);
  }
  function incrementItemCount(item: ProductInCartType) {
    item.quantity++;
  }

  return { cartItems, addToCart, incrementItemCount };
});

