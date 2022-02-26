<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div>
      <strong>{{ item.title }}</strong>
  </div>
</template>

<style scoped>
div {
  height: 400px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
strong {
    font-size: 24px;
    font-weight: bold;
}
</style>