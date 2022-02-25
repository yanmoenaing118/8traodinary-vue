<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    

    <div class="wrapper">
     

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/works">Works</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';


header {
 
}

.logo {
 
}



nav {

}

nav a.router-link-exact-active {
  
}

nav a.router-link-exact-active:hover {

}

nav a {

}

nav a:first-of-type {

}

</style>
