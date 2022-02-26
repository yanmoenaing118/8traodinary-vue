<script setup>
import { onMounted } from "@vue/runtime-core";
import Banner from "./../components/banner/Banner.vue";


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
    title="About us"
    background="https://images.unsplash.com/photo-1581782615834-1a0706be94c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  />
</template>

<style>
</style>
