<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Item from "./WorkItem.vue";


const props = defineProps({
    list: Array
})
const modules = [Pagination];


</script>


<template>
  <section>
    <h1>Let our work speak</h1>

    <div class="works">
      <Swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="item in list" :key="item.id">
          <Item :item="item" />
        </SwiperSlide>

        
      </Swiper>
    </div>
    <div class="all">
      <button>View all works</button>
    </div>
  </section>
</template>


<style scoped>
section {
  background-color: black;
  padding: var(--section-p) 0;
}

h1 {
  font-weight: bolder;
  font-size: 75px;
  text-align: center;
  padding: var(--space-11) 0;
  color: #fff;
}

.works {
    width: 100%;
}

.all {
  display: flex;
  justify-content: center;
  padding: var(--space-11) 0;
}
button {
  background-color: #d64021;
  border: none;
  color: #fff;
  padding: var(--space-8) var(--space-11);
  border-radius: 30px;
  font-size: 1.4rem;
  cursor: pointer;
}

button:focus {
  border: 1px solid #fff;
}
</style>