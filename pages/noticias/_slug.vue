<template>
  <div>
    <div class="imagen-caja">
      <v-container>
        <v-row>
          <v-col class="md-4 col-mobile"> </v-col>
          <img class="img_posts" :src="imagen" alt="" />
          <v-col class="md-4 col-mobile"> </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3"></div>

        <div class="col-12 col-md-6">
          <div class="container tarjeta">
            <div class="card-head">
              <div class="cat">{{ categoria }}</div>
              <h1 class="titulo">{{ titulo }}</h1>
            </div>

            <hr style="color: black" />

            <div class="card-body">
              <div class="contenido" v-html="contenido"></div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'


require('moment/locale/es-mx')

export default {
  data() {
    return {
      posts: {},
      imagen: '',
      titulo: '',
      contenido: '',
      categoria: '',
      moment: moment,
    }
  },


head() {
  return {
    title: this.title,
    meta: [
    
      {
        property: "article:published_time",
        content: this.posts.date,
      },
      {
        property: "article:modified_time",
        content: this.posts.date_gmt,
      },
      {
        property: "article:tag",
        content: this.posts.tags ? this.posts.tags.toString() : "",
      },
      { name: "twitter:label1", content: "Written by" },
      { name: "twitter:data1", content: "Bob Ross" },
      { name: "twitter:label2", content: "Filed under" },
      {
        name: "twitter:data2",
        content: this.posts.tags ? this.posts.tags.toString() : "",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://bobross.com/articles/${this.$route.params.slug}`,
      },
    ],
  };
},


  async mounted() {
    try {
      // ================= PETICION LISTA DE TODOS LOS POSTS  ==================================
      const url = 'https://losmaster.xyz/wp-json/wp/v2/posts?slug='
      const res = await axios.get(`${url}${this.$route.params.slug}`)
      this.posts = res.data

      // =======================================================================
      this.imagen = res.data[0].one_call.featured_list.source_url
      this.titulo = res.data[0].title.rendered
      this.contenido = res.data[0].content.rendered

      // ================= PETICION CATEGORIA  ==================================
      let _id = res.data[0].categories[0]
      const resCategorias = await axios.get(
        `${'https://losmaster.xyz/wp-json/wp/v2/categories/'}${_id}`
      )
      this.categoria = resCategorias.data.name

      console.log(this.categoria)
    } catch (error) {}
  },
}
</script>

<style scoped="true" lang="css">
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import '@/static/css/bootstrap.css';

/* ============================= */

.row {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.titulo {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 50px;
  padding-top: 60px;
  text-align: unset;
  width: 100%;
  color: black;
}
.imagen-caja {
  margin-top: 25px;
  
}
.tarjeta {
  background-color: rgb(255, 255, 255);
  border-radius: 13px;
  position: relative;
  bottom: 70px;
  box-shadow: -8px 4px 17px 6px rgba(193, 193, 193, 0.082);
}

.img_posts {
  width: 100% !important;
  max-height: 700px;
  border-radius: 2px;
}
.cat {
  background-color: #250167;
  text-transform: uppercase;
  top: -18px;
  position: absolute;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
}

/* MEDIDA CELULAR PEQUEÑO (XS)  */
@media screen and (min-width: 240px) and (max-width: 575.98px) {
  .col-mobile {
    display: none;
  }

  .container {
    margin: 0;
    padding: 0;
  }
  .imagen-caja {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom: 5px groove #310158;
    width: 100%;
  }
  .cat {
    background-color: #250167;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    top: -48px;
    position: absolute;
    color: white;
    padding: 5px 20px;
    border-radius: 4px;
  }

  .titulo {
    font-size: 1.8rem;
    font-weight: 900;
    text-align: justify;
  }

  .tarjeta {
    background-color: rgb(255, 255, 255);
    border-radius: 13px;
    box-shadow: rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px;
    position: relative;
    top: 0;
  }

  .titulo {
    padding: 1px 5px;
  }
}
/* MEDIDA CELULAR  MEDIANO (M Y L)  */
@media screen and (min-width: 576px) and (max-width: 767.98px) {
}
/* MEDIDA CELULAR  TABLET (S)  */
@media screen and (min-width: 768px) and (max-width: 991.98px) {
}
@media (min-width: 992px) and (max-width: 1199.98px) {
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
}
</style>