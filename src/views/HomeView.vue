<script setup>
</script>

<template>
<section>
    <div class="video-bg">
        <video src="https://midas-api.venuslab.co/storage/video_thumbnails/00cdb98d-5d8b-4c68-8bb6-c898a0eec529.mp4" autoplay loop></video>
    </div>
</section>
</template>

<style scoped>
section {
  height: 100vh;
}
.video-bg {
    width: 100%;
      height: 100vh;
}

video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}



</style>