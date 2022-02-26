<script setup>
import Item from "./CapabilityItem.vue";

const props = defineProps({
  list: Array,
});
</script>


<template>
  <section>
    <div class="wrapper">
      <h1>Our Capabilities</h1>
      <div class="grid">
        <Item v-for="item in list" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>


<style scoped>
section {
  padding: var(--section-p) 0;
}

.wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
}

h1 {
  font-weight: bolder;
  font-size: 75px;
  text-align: center;
  padding: var(--space-11) 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: var(--space-11);
  align-items: start;
}
</style>