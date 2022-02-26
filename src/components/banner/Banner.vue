<script setup>
const props = defineProps({
  title: String,
  background: String,
});
</script>

<template>
  <section>
    <img :src="background" alt="bannder background" />
    <h1>{{ title }}</h1>
  </section>
</template>


<style scoped>
section {
  margin-top: -124px;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  animation-name: animateImg;
  animation-duration: 1s;
}

h1 {
  font-size: 75px;
  font-weight: bold;
  color: #fff;

  animation-name: animateH1;
  animation-duration: 1s;
}

@keyframes animateH1 {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes animateImg {
  from {
    transform: scale(1.1);
  }

  to {
    transform: scale(1);
  }
}
</style>