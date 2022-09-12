<script lang="ts">
import { defineComponent } from "vue";
import Product from "./Product.vue";
export default defineComponent({
  data() {
    return {};
  },
  components: { Product },
});
</script>

<template lang="">
  <section class="products">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </section>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>
