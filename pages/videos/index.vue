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
  padding: 20px;
  border-radius: 5px;
}

.contenedor_videos h1 {
  color: #00f900;
  font-size: 1.8rem;
  padding: 20px;
}

.titulo {
  margin-top: 5px;
}

.titulo h6 {
  margin-top: 5px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
}

.titulo h6:hover {
  color: #00f900;
  cursor: pointer;
}

.video_iframe {
  width: 100%;
  height: 230px;
  border: 2px solid #00f900;
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