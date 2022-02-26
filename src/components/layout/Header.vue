  if (!headerRef) return;
<script setup>
import { RouterLink } from "vue-router";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Navigation from "./header/Navigation.vue";

const headerRef = ref(null);
const headerHeight = ref("124px");

const smallHeaderRef = ref(null)
const showSmallHeader = ref(false);

const largeHeaderObserver = new IntersectionObserver(observerCallback("lg"), {
  threshold: 0.5,
});

const smallHeaderObserver = new IntersectionObserver(observerCallback("sm"), {
  threshold: 0.5,
});

onMounted(() => {
  if(!headerRef || !smallHeaderRef) return;
  // largeHeaderObserver.observe(headerRef.value);
  smallHeaderObserver.observe(smallHeaderRef.value);
});

function observerCallback(which) {
  return which === "lg"
    ? largeHeaderObserverCallback
    : smallHeaderObserverCallback;
}

function largeHeaderObserverCallback(entries) {
  entries.forEach((entry) => {
    const header = entry.target;
    if (entry.isIntersecting) {
      headerHeight.value = "124px";
    } else {
      headerHeight.value = "40px";
    }
  });
}

function smallHeaderObserverCallback(entries) {
  entries.forEach(entry => {
    const header = entry.target;
    if(entry.isIntersecting) {
      
    }
  })

}

const temp = `  <header  ref="headerRef" :style="{  '--header-height': headerHeight }">
    <div class="wrapper">
      <div class="logo">
         <RouterLink to="/"><img src="https://midas.venuslab.co/logo.png" alt="Midas Creative Footer Logo"></RouterLink>
      </div>
      <Navigation />
    </div>
  </header>`;
</script>

<template>
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
  top: 0;
  left: 0;
  width: 100%;
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