<script setup>
import { onMounted } from "@vue/runtime-core";
import Banner from "./../components/banner/Banner.vue";
import Works from "./../components/work/Works.vue";


onMounted(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
</script>

<template>
  <Banner
    title="Our Works"
    background="https://images.unsplash.com/photo-1603573608528-62d6902517c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
  />

  <Works />
</template>
