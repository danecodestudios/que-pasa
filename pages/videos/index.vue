<template>
  <div>
    <v-container class="contenedor_videos">
      <h1>
        NUESTROS VIDEOS &nbsp;  &nbsp;  &nbsp;  &nbsp; RECUERDA SEGUIRNOS EN 
        <a
          style="color: red"
          href="https://www.youtube.com/channel/UCipRgwMVfuR3KOF8tqd_jpg"
          target="_blank"
          >
          <v-icon style="color: red; font-size: 3rem">mdi-youtube</v-icon>
          YOUTUBE
          </a>
          
      </h1>
      <v-row>
        <v-col
          class="col-12 col-md-6 col-lg-4 col-xl-3"
          v-for="video in lista_videos"
          :key="video.id.videoId"
        >
          <iframe
            class="video_iframe"
            :src="` ${url}${video.id.videoId} `"
            title="Videos Que Pasa News"
            frameborder="0"
            
            allowfullscreen
          ></iframe>
          <div class="titulo">
            <h6>{{ video.snippet.title }}</h6>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style scoped>
.contenedor_videos {
  background-color: #310158;
  margin-top: 30px;
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
import axios from 'axios'
export default {
  data() {
    return {
      lista_videos: [],
      url: 'https://www.youtube.com/embed/',
    }
  },

  async mounted() {
    try {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBI1sCbJ4jvvcA9LAbDmwyWqPAaE2qj8QI&channelId=UCipRgwMVfuR3KOF8tqd_jpg&part=snippet,id&order=date&maxResults=12'
      )

      this.lista_videos = res.data.items
    } catch (error) {
      err = error
    }
  },
}
</script>