<script setup>
const props = defineProps({
    title: String,
    background: String
})
</script>

<template>
    <section >
        <img :src="background" alt="bannder background" />
        <h1>{{title}}</h1>
    </section>
</template>


<style scoped>
section {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

h1 {
    font-size: 75px;
    font-weight: bold;
    color: #fff;
}
</style>