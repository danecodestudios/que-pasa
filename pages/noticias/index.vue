<template>
  <div>
    <v-card>
      <v-tabs background-color="purple darken-4 text-white" center-active dark>
        <v-tab v-for="post in categorias" :key="post">{{ post.name }}</v-tab>
      </v-tabs>
    </v-card>

    <v-container>
      <v-row>
        <v-col
          class="col-12 col-md-6 col-lg-4 col-xl-3"
          v-for="(post, index) of posts"
          :key="post.id + '_' + index"
        >
          <Noticias
            :id="post.id"
            :imagen="post.one_call.featured_list.source_url"
            :titulo="post.title.rendered"
            :categoria="post.one_call.categories_list[0].name"
            :hyf="moment(post.date).fromNow('es-us')"
            :slug="post.slug"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Noticias from '@/components/Noticias.vue'
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  components: {
    Noticias,
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
      const res = await axios.get('https://losmaster.xyz/wp-json/wp/v2/posts')
      const resCat = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/categories'
      )
      this.posts = res.data
      console.log(this.posts)
      this.categorias = resCat.data
    } catch (error) {
      err = error
    }
  },
}
</script>