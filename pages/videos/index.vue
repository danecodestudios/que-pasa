<template>
  <div class="contenedor_videos">
    <Youtube />
  </div>
</template>

 


<style scoped>
@import '@/static/css/bootstrap.css';

.contenedor_videos {
  background-image: url(@/static/fondo-video.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  border-radius: 5px;
}

@media screen and (min-width: 240px) and (max-width: 575.98px){
  .contenedor_videos{
    padding: 50px 0px;
    background-size: contain;
  }
}
</style>

<script>
import Youtube from '@/components/Videos/Youtube.vue'

export default {
  components: {
    Youtube,
  },
}
</script>