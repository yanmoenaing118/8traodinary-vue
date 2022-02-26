<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
</script>


<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style scoped>
</style>