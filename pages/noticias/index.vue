<template>
  <div>
    <v-container class="news-movie_contain">
      <v-toolbar elevation="1" dense flat outlined class="fondo-morado-1">
        <v-toolbar-title> ULTIMAS NOTICIAS </v-toolbar-title>

        <marquee class="news-movie" behavior="" direction=""
          ><span
            class=""
            v-for="(data, index) of posts"
            :key="data + '_' + index"
            ><v-icon class="icon-circle">mdi-circle-double</v-icon>
            <NuxtLink :to="'/noticias/' + data.slug">
              {{ data.title.rendered }}</NuxtLink
            ></span
          ></marquee
        >
      </v-toolbar>
    </v-container>

    <!-- <v-container class="destacados-contain">
      <Destacados />
    </v-container> -->

    <!-- <v-card>
      <v-tabs background-color="fondo-morado text-white" center-active dark>
        <v-tab v-for="cat in categorias" :key="cat">{{ cat.name }}</v-tab>
      </v-tabs>
    </v-card> -->

    <v-container class="noticias-contain_block1">
      <v-row>
        <v-col
          class="col-12 col-md-6 col-lg-4 col-xl-3"
          v-for="(post, index) of posts"
          :key="post.id + '_' + index"
        >
          <Noticias
            :id="post.id"
           
            :titulo="post.title.rendered"
            
            :hyf="moment(post.date).fromNow('es-us')"
            :slug="post.slug"
          />
        </v-col>
      </v-row>
    </v-container>

    <Videos />
  </div>
</template>

<style scoped>



/* ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ */

.destacados-contain{
  margin-bottom: 30px;
  margin-top: 30px;
}

.noticias-contain_block1{
  margin: auto;
  margin-top: 20px;

}

/* ????????????????????????????? */
.news-movie span {
  padding-left: 50px;
}

  

.news-movie a {
  color: white;
}

.news-movie a:hover {
  color: rgba(31, 250, 2, 0.87);
  text-decoration: underline;
}

.icon-circle {
  color: #00f900;
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
  color: white;
  background-color: #00f900;
  padding: 15px;
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

  .news-movie_contain{
    padding:0px !important ;
    position: sticky;
    z-index: inherit;
    top: -5px;    
  }




}
</style>


<script>
import Noticias from '~/components/Noticia.vue'
import Destacados from '@/pages/destacados/index.vue'
import Videos from '@/pages/videos/index.vue'
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  components: {
    Noticias,
    Destacados,
    Videos
  },

  data() {
    return {
      posts: [],
      categorias: [],
      moment: moment,
    }
  },

  async mounted() {
    try {
      // ================= PETICION LISTA DE TODOS LOS POSTS  ==================================
      const res = await axios.get(
        'https://quepasanews.azurewebsites.net/wp-json/wp/v2/posts?per_page=12'
      )
      const resCat = await axios.get(
        'https://quepasanews.azurewebsites.net/wp-json/wp/v2/categories'
      )
      this.posts = res.data
      this.categorias = resCat.data
    } catch (error) {
      err = error
    }
  },
}
</script>