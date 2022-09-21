<script setup lang="ts">
import Product from "./Product.vue";

import type { PropType } from "vue";
import type { ProductType } from "../types/Product";

/*
export default defineComponent({
  props: {
    productsList: Object as PropType<ProductType[]>,
  },
  components: { Product },
});
*/

defineProps({
  productsList: Object as PropType<ProductType[]>,
});
</script>

<template>
  <section class="products">
    <Product
      v-for="(product, index) in productsList"
      :product="product"
      :key="product.id"
    />
  </section>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>
