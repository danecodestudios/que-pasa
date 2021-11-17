<template>
  <v-container class="fluid contenedor">
    <v-row>
      <div class="col-md-8 video">
        <iframe
          class="embed-responsive-item video_iframe"
          :src="'https://www.youtube.com/embed/' + videoSelecte"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>

      <div class="col-md-4 lista-videos">
        <ul>
          <li v-for="video of videoList" :key="video">
            <a
              :disabled="dialog"
              :loading="dialog"
              @click="videoSeleccionado(video.id.videoId, (dialog = true))"
            >
              <v-dialog
                v-model="dialog"
                hide-overlay
                persistent
                width="150"
                class="dialog"
              >
                <v-progress-circular
                  indeterminate
                  :rotate="360"
                  :size="80"
                  :width="10"
                  :color="colorDialog"
                >
                </v-progress-circular>

                CARGANDO VIDEO
              </v-dialog>
              <v-card class="mx-auto tarjeta-video">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="video.snippet.thumbnails.high.url"
                >
                </v-img>
                <v-card-title class="titulo-video" v-html="video.snippet.title">
                </v-card-title>
                <small
                  ><i>{{ repro }}</i></small
                >
              </v-card>
            </a>
            <v-divider class="divisor" inset></v-divider>
          </li>
        </ul>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.contenedor {
  height: 550px;
}

.video iframe {
  border: 2px solid rgb(2, 223, 2);
  width: 100%;
  height: 500px;
}

.tarjeta-video {
  background: transparent;
}

.titulo-video {
  color: white;
  font-size: 1rem;
  text-align: initial;
}

.lista-videos {
  height: 510px;
  overflow: auto;
}

.lista-videos ul li {
  list-style: none;
}

.dialog{
  background-color: honeydew;
}

.divisor {
  background: white;
}

@media screen and (min-width: 240px) and (max-width: 575.98px) {
  .contenedor {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .video iframe {
    width: 100%;
    height: 300px;
    border: 2px solid rgb(2, 223, 2);
  }
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'Youtube',

  data() {
    return {
      videoList: [],
      embed: 'https://www.youtube.com/embed/ ',
      categorySelected: 'all',
      videoSelecte: 'wx34OanueoU',
      repro: '',
      dialog: false,
      colorDialog: '#360258',
    }
  },

  watch: {
    dialog(val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 1000)
    },
  },

  methods: {
    async getVideos() {
      const Url =
        await ' https://www.googleapis.com/youtube/v3/search?key=AIzaSyBI1sCbJ4jvvcA9LAbDmwyWqPAaE2qj8QI&channelId=UCipRgwMVfuR3KOF8tqd_jpg&part=snippet,id&order=date&maxResults=12'

      const res = await axios.get(Url)
      this.videoList = res.data.items
     
    },

    async videoSeleccionado(videoId, dialog) {
      this.videoSelecte = videoId
      this.dialog = dialog
    },
  },

  async mounted() {
    this.getVideos()
  },
}
</script>

