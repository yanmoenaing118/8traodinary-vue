<script setup>
import { onMounted } from "@vue/runtime-core";
import Capabilities from "./../components/home/Capabilities.vue";
import Works from "./../components/home/Works.vue";

const capabilities = [
  {
    id: 1,
    title: "branding",
    description:
      "It’s more than just a logo, font, and colours! Without strong branding that lays the foundation for your marketing activities, you'll just be more white noise to the average consumer.",
  },
  {
    id: 2,
    title: "Consultancy",
    description:
      "Feeling stumped on where to start or go next? Let us help connect the dots with our expert insights and data-driven methodology.",
  },
  {
    id: 3,
    title: "Creative",
    description:
      "Be it through on-ground activations, digital or out-of-home media, we get your business to where it needs to be, the 8traordinary way.",
  },
  {
    id: 4,
    title: "Digital",
    description:
      "Transform your customer experience from touchpoints to journeys with digital solutions such as a high-converting website, mobile app, voice, VR, AR, or through interactive games.",
  },
  {
    id: 5,
    title: "Content",
    description:
      "From concept to production, we craft influential content and execute them impeccably. Our in-house creators have a natural affinity for words, images, and numbers. Need stunning visuals or copywriting that converts? We've got you covered.",
  },
  {
    id: 6,
    title: "Social",
    description:
      "Reach, engage and sell on Facebook, Instagram, LinkedIn, TikTok and other social media platforms. We do the work, you enjoy the results - full account management & content creation inclusive.",
  },
];

const works = [
  {
    id: 1,
    title: "Urban Beauty",
  },
  {
    id: 2,
    title: "Midea",
  },
  {
    id: 3,
    title: "San Lwin",
  },
  {
    id: 4,
    title: "Good brother's chemical company limited",
  },
];


onMounted(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
</script>

<template>
  <section class="hero">
    <div class="video-bg">
      <video
        src="https://midas-api.venuslab.co/storage/video_thumbnails/00cdb98d-5d8b-4c68-8bb6-c898a0eec529.mp4"
        autoplay
        loop
        muted
      ></video>
    </div>
  </section>
  <Capabilities :list="capabilities" />
  <Works :list="works" />
</template>

<style scoped>
.hero {
  height: 100vh;
  margin-top: -124px;
}
.video-bg {
  height: 100%;
}
.video-bg {
  width: 100%;
  height: 100vh;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
</style>