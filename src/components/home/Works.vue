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

</style>