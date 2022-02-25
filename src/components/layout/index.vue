<script setup>
import Header from "./Header.vue"
import Footer from "./Footer.vue";
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