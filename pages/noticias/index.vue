<template>
  <div>
    <v-toolbar elevation="1" dense flat outlined class="fondo-morado-1">
      <v-toolbar-title> ULTIMAS NOTICIAS </v-toolbar-title>

      <marquee class="news-movie" behavior="" direction=""
        ><span class="" v-for="(data, index) of posts" :key="data + '_' + index"
          ><v-icon class="icon-circle">mdi-circle-double</v-icon>
          <NuxtLink :to="'/noticias/' + data.slug">
            {{ data.title.rendered }}</NuxtLink
          ></span
        ></marquee
      >
    </v-toolbar>

    <v-container>
      <v-carousel
        hide-delimiter-background
        show-arrows-on-hover
        :height="height"
        cycle
        :interval="intervalo"
        :show-arrows="false"
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          class="w-100"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <div class="destacados-contain">
      <Destacados />
    </div>

    <!-- <v-card>
      <v-tabs background-color="fondo-morado text-white" center-active dark>
        <v-tab v-for="cat in categorias" :key="cat">{{ cat.name }}</v-tab>
      </v-tabs>
    </v-card> -->

    <v-container class="noticias-contain_block1">
      <v-row>
        <v-col class="col-12 col-md-8">
          <v-row>
            <v-col
              class="col-12 col-md-6"
              v-for="(post, index) of posts1"
              :key="post.id + '_' + index"
            >
              <Noticias
                :id="post.id"
                :imagen="post.one_call.featured_list.source_url"
                :categoria="post.one_call.categories_list[0].name"
                :titulo="post.title.rendered"
                :hyf="moment(post.date).fromNow('es-us')"
                :slug="post.slug"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col class="col-md-4"></v-col>
      </v-row>
    </v-container>

   <v-container>
      <v-carousel
        hide-delimiter-background
        show-arrows-on-hover
        :height="height"
        cycle
        :interval="intervalo"
        :show-arrows="false"
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          class="w-100"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </v-container>

   <v-container class="noticias-contain_block1">
      <v-row>
        <v-col class="col-12 col-md-8">
          <v-row>
            <v-col
              class="col-12 col-md-6"
              v-for="(post, index) of posts1"
              :key="post.id + '_' + index"
            >
              <Noticias
                :id="post.id"
                :imagen="post.one_call.featured_list.source_url"
                :categoria="post.one_call.categories_list[0].name"
                :titulo="post.title.rendered"
                :hyf="moment(post.date).fromNow('es-us')"
                :slug="post.slug"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col class="col-md-4"></v-col>
      </v-row>
    </v-container>

    <!-- <Videos /> -->
  </div>
</template>

<style scoped>
/* ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ */

.destacados-contain {
  margin-bottom: 30px;
  margin-top: 30px;
}

.noticias-contain_block1 {
  margin: auto;
  margin-top: 10px;
}

/* ????????????????????????????? */
.news-movie span {
  padding-left: 50px;
}

.news-movie a {
  color: white;
}

.news-movie a:hover {
  color: #d1069e;
  text-decoration: underline;
}

.icon-circle {
  color: #00f968;
  font-weight: 600;
  text-align: center;
}

.v-toolbar__content {
  align-items: center;
}

.v-toolbar__title {
  overflow: unset !important;
  text-overflow: unset;
  padding-right: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #000000;
  padding: 15px;
  border: solid #d1069e 2px;
  border-radius: 5px;
}

@media screen and (min-width: 240px) and (max-width: 575.98px) {
  .v-toolbar__title {
    font-size: 0.9rem;
    font-weight: 600;
    padding: 15px 3px;
    position: relative;
    right: 5px;
  }

  .news-movie_contain {
    padding: 0px !important ;
    position: sticky;
    z-index: inherit;
    top: -5px;
  }
}
</style>


<script>
import Noticias from '~/components/Noticia.vue'
import Destacados from '@/pages/destacados/index.vue'
// import Videos from '@/pages/videos/index.vue'
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  components: {
    Noticias,
    Destacados,
  },

  data() {
    return {
      posts1: [],
      posts2: [],
      categorias: [],
      moment: moment,
      intervalo: 3000,
      items: [
        {
          src: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1645994532/logos-la-esquina-radio/barner-hys/Banner-hys-01_tf3zas.jpg',
        },
        {
          src: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1645994530/logos-la-esquina-radio/barner-hys/Banner-hys-02_v3jv5o.jpg',
        },
        {
          src: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1645994530/logos-la-esquina-radio/barner-hys/Banner-hys-03_kpfikv.jpg',
        },
        {
          src: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1645994531/logos-la-esquina-radio/barner-hys/Banner-hys-04_eojrek.jpg',
        },
        {
          src: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1645994530/logos-la-esquina-radio/barner-hys/Banner-hys-05_k2qgn9.jpg',
        },
        {
          src: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1645994530/logos-la-esquina-radio/barner-hys/Banner-hys-06_xd8rli.jpg',
        },
      ],
    }
  },

  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 50
        case 'sm':
          return 90
        case 'md':
          return 110
        case 'lg':
          return 145
        case 'xl':
          return 210
      }
    },
  },

  async mounted() {
    try {
      // ================= PETICION LISTA DE TODOS LOS POSTS  ==================================
      const res = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/posts?per_page=4'
      )

      const res2 = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/posts?per_page=4'
      )

      const resCat = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/categories'
      )
      this.posts1 = res.data
      this.posts2 = res2.data
      this.categorias = resCat.data
    } catch (error) {
      err = error
    }
  },
}
</script>
