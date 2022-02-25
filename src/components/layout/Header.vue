<script setup>
import Navigation from "./header/Navigation.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>logo</h1>
      <Navigation />
    </div>
  </header>
</template>


<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
    0 2px 2px rgba(255, 255, 255, 0.1);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

h1 {
    color: #fff;
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