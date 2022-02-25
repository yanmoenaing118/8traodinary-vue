<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { RouterLink } from "vue-router";
import fetchJSON from "../../lib/fetchJSON";

const list = ref([]);

onMounted(async () => {
  const result = await fetchJSON("works.json");
  console.log(result);
  list.value = result;
});
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <RouterLink :to="{ name: 'work_details', params: { id: item.id } }">{{
        item.title
      }}</RouterLink>
    </li>
  </ul>
</template>