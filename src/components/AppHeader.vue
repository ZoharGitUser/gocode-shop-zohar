<script setup lang="ts">
import type { PropType } from "vue";
import { reactive } from "vue";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

/*
export default defineComponent({
  data() {
    return { category: "" as string };
  },
  props: {
    categories: Object as PropType<string[]>,
  },
  emits: ["filterCategory"],
});
*/

const category = ref("" as string);

defineProps({
  categories: Array as PropType<string[]>,
});

const store = useCounterStore();
</script>

<template>
  <nav class="product-filter">
    <h1>Jackets</h1>
    <div>
      cart:
      <div v-for="item in store.cartItems">
        <div>{{ item.item.title }}</div>
        <button @click="store.incrementItemCount(item)">Increment Item</button>
        <div>items count: {{ item.quantity }}</div>
      </div>
    </div>
    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>
        <select @change="$emit('filterCategory')">
          <option v-for="category in categories" :key="category">
            {{ category }}
          </option>
          <!--<option value="/">2016</option>
          <option value="/">jacket</option>
          <option value="/">Jackets</option>
          <option value="/">layers</option>
          <option value="/">Obermeyer</option>
          <option value="/">Roxy</option>
          <option value="/">womens</option>-->
        </select>
      </div>

      <div class="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sort {
  display: flex;
  align-self: flex-end;
}

.collection-sort {
  display: flex;
  flex-direction: column;
}

.collection-sort:first-child {
  padding-right: 20px;
}
</style>

