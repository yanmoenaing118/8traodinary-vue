<script setup>
import FooterWrapper from "./footer/FooterWrapper.vue";
</script>

<template>
    <footer>
        <FooterWrapper />
        <div class="copy">Copyrigh MidasCratives &copy; 2022</div>
    </footer>
</template>


<style scoped>
footer {
    padding: 5vw 0 0 0;
    background-color: #101213;;
    color: #fff;
}

.copy {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 -1px 1px rgba(255,255,255,0.3);

}
</style>