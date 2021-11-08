<template>
  <div>
    <div class="imagen-caja">
      <v-container>
        <v-row>
          <v-col class="md-4 col-mobile"> </v-col>
          <img
            class="img_posts"
            :src="fetchedData.one_call.featured_list.source_url"
            alt=""
          />
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
              <div class="cat">{{ fetchedData.one_call.categories_list[0].name }}</div>
              <h1 class="titulo">{{ fetchedData.title.rendered }}</h1>
            </div>

            <hr style="color: black" />

            <div class="card-body">
              <div
                class="contenido"
                v-html="fetchedData.content.rendered"
              ></div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
// import moment from 'moment'

require('moment/locale/es-mx')

export default {
  async asyncData({ params, $axios }) {
    const res = await $axios.$get(
      `https://losmaster.xyz/wp-json/wp/v2/posts?slug=${params.slug}`
    )
    let fetchedData = res[0]
    console.log(fetchedData)
    return { fetchedData }
  },


      head () {
        return {
          title: this.fetchedData.title.rendered,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: '¿Que Pasa? News .info | Ver Mas '
            },
            // Open Graph
            { 
              hid: 'og:url', 
              property: 'og:url', 
              content: `https://www.quepasanews.info/${this.fetchedData.slug}` 
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: this.fetchedData.title.rendered
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content: '¿Que Pasa? News .info | Ver Mas '
            },

             {
                hid: 'og:image',
                property: 'og:image',
                content: this.fetchedData.one_call.featured_list.source_url
            },

            // Twitter
            { 
              hid: 'twitter:url', 
              name: 'twitter:url', 
              content: `https://www.quepasanews.info/${this.fetchedData.slug}` 
            },
            {
              hid: 'twitter:title',
              name: 'twitter:title',
              content: this.fetchedData.title.rendered
            },
            {
              hid: 'twitter:description',
              name: 'twitter:description',
              content: '¿Que Pasa? News .info | Ver Mas  '
            }
          ],
          link: [{ hid: 'canonical', rel: 'canonical', href: `https://www.quepasanews.info/${this.fetchedData.slug}` }]
        }
      }



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