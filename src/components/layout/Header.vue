  if (!headerRef) return;
<script setup>
import { RouterLink } from "vue-router";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Navigation from "./header/Navigation.vue";

const headerRef = ref(null);
const headerHeight = ref("124px");

const smallHeaderRef = ref(null);

const largeHeaderObserver = new IntersectionObserver(observerCallback, {
  threshold: 0.5,
});

onMounted(() => {
  if (!headerRef || !smallHeaderRef) return;
  largeHeaderObserver.observe(headerRef.value);
});
function observerCallback(entries) {
  entries.forEach((entry) => {
    const header = entry.target;
    if (entry.isIntersecting) {
      smallHeaderRef.value.style.top = "-100%";
      headerHeight.value = "124px";
    } else {
      headerHeight.value = "40px";
      console.log(smallHeaderRef.value);
      smallHeaderRef.value.style.top = "0";
    }
  });
}
</script>

<template>
  <header ref="headerRef" :style="{ '--header-height': headerHeight }">
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/"
          ><img
            src="https://midas.venuslab.co/logo.png"
            alt="Midas Creative Footer Logo"
        /></RouterLink>
      </div>
      <Navigation color="#fff" />
    </div>
  </header>

  <header ref="smallHeaderRef" class="small-header">
    <div class="wrapper">
      <div class="logo-small">
        <RouterLink to="/"
          ><img
            src="https://midas.venuslab.co/logo.png"
            alt="Midas Creative Footer Logo"
        /></RouterLink>
      </div>
      <Navigation color="black" />
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

.small-header {
  height: 50px;
  background-color: #fff;
  color: #000;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  transition: top 1s ease;
  z-index: 100;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
    0 2px 2px rgba(0, 0, 0, 0.1);
}

.logo-small {
  width: 120px;
}

.logo-small img {
  width: 100%;
  height: auto;
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