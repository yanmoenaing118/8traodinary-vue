<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/works">Works</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  height: 100%;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  height: 100%;
}

li {
  height: 100%;
}

a {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 var(--space-7);
  text-decoration: none;
  color: #fff;
}

a:hover {
    border-bottom: 2px solid #fff;
}


</style>