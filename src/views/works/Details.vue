<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import fetchJSON from "../../lib/fetchJSON";
import { useRouter, useRoute } from 'vue-router'

const route = useRoute();
const details = ref(null)


onMounted(async () => {
    const result = (await fetchJSON("../works.json")).find(item => item.id == route.params.id); 
    
    details.value = result;
})

</script>

<template>
    <div v-if="!details">loading...</div>
    <article v-else>
        <h1>{{details.title}}</h1>
        <p>{{details.body}}</p>
    </article>
</template>