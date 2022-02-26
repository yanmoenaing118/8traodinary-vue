<script setup>
import {RouterLink} from "vue-router";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Navigation from "./header/Navigation.vue";

const headerRef = ref(null);
const headerHeight = ref("124px");

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.5
});

onMounted(() => {
  if(!headerRef) return;
  observer.observe(headerRef.value);
})

function observerCallback(entries) {
  entries.forEach(entry => {
    const header = entry.target;
    if( entry.isIntersecting) {
      headerHeight.value = '124px';
    } else {
      headerHeight.value = '40px';
    }
  })
}

</script>

<template>
  <header ref="headerRef" :style="{  '--header-height': headerHeight }">
    <div class="wrapper">
      <div class="logo">
         <RouterLink to="/"><img src="https://midas.venuslab.co/logo.png" alt="Midas Creative Footer Logo"></RouterLink>
      </div>
      <Navigation />
    </div>
  </header>
</template>


<style scoped>
header {
  width: 100%;
  height: var(--header-height);
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
    0 2px 2px rgba(255, 255, 255, 0.1);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
}



.wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>