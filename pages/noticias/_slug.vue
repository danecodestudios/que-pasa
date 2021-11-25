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
              <div class="cat">
                {{ fetchedData.one_call.categories_list[0].name }}
              </div>
              <h1 class="titulo-h1">{{ fetchedData.title.rendered }}</h1>
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

        <div class="col-12 col-md-3">
          <figure class="figure-pauta">
            <img
              class="img-pauta"
              src="@/static/isla-baru.jpg"
              alt="FAMILY TOUR BAQ"
            />
            <figcaption class="fig-caption_pauta">
              <marquee behavior="" direction=""
                >FAMILY TOUR BAQ - PASADIAS ISLA BARU TODO INCLUIDO</marquee
              >
            </figcaption>
          </figure>

          <figure class="figure-pauta">
            <div >
              <!-- <script type="text/javascript">
                  atOptions = {
                    'key' : 'af3266b8b39aa4e67a6f261e8901df1e',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                  };
                  document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://pubfruitlesswording.com/af3266b8b39aa4e67a6f261e8901df1e/invoke.js"></scr' + 'ipt>');
                </script> -->

                <iframe  key="af3266b8b39aa4e67a6f261e8901df1e" height="250" width="100%"  format = 'iframe'>
                  <src' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://pubfruitlesswording.com/af3266b8b39aa4e67a6f261e8901df1e/invoke.js"></src' + 'ipt>
                </iframe>
            
                
            </div>
          </figure>
        </div>
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
    return { fetchedData }
  },








  head() {
    return {
      title: this.fetchedData.title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.fetchedData.title.rendered,
        },
        // Open Graph
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'posts',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.quepasanews.info/noticias/${this.fetchedData.slug}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.fetchedData.title.rendered,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.fetchedData.title.rendered,
        },

        {
          hid: 'og:image',
          property: 'og:image',
          content: this.fetchedData.one_call.featured_list.source_url,
        },

        // Twitter
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://www.quepasanews.info/noticias/${this.fetchedData.slug}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.fetchedData.title.rendered,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.fetchedData.title.rendered,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.fetchedData.one_call.featured_list.source_url,
        },

        // Facebook
        {
          hid: 'facebook:url',
          name: 'facebook:url',
          content: `https://www.quepasanews.info/noticias/${this.fetchedData.slug}`,
        },
        {
          hid: 'facebook:title',
          name: 'facebook:title',
          content: this.fetchedData.title.rendered,
        },
        {
          hid: 'facebook:description',
          name: 'facebook:description',
          content: this.fetchedData.title.rendered,
        },
        {
          hid: 'facebook:image',
          name: 'facebook:image',
          content: this.fetchedData.one_call.featured_list.source_url,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://www.quepasanews.info/noticias/${this.fetchedData.slug}`,
        },
      ],
    }
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

.titulo-h1 {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 42px;
  padding: 40px 5px;
  font-weight: 600;
}

.imagen-caja {
  margin-top: 25px;
}

.tarjeta {
  background-color: rgb(255, 255, 255);
  border-radius: 13px;
  position: relative;
  bottom: 70px;
  box-shadow: -8px 4px 17px 6px rgba(0, 0, 0, 0.185);
}

.img_posts {
  width: 100% !important;
  max-height: 700px;
  border-radius: 2px;
  image-resolution: from-image 300dpi;
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

/* ========= PAUTAS ================ */

.figure-pauta {
  border: thin 2px #03e403 solid;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 100%;
  margin: auto;
}

.img-pauta {
  width: 100%;
  max-height: 350px;
}

.fig-caption_pauta {
  background-color: #250167;
  border-radius: 5px;
  color: #fff;
  padding: 1px;
  text-align: center;
  font-weight: 700;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 1rem;
}

/* ================================= */

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
    margin-top: 5px;
    image-resolution: from-image 300dpi;
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

  .titulo-h1 {
    padding: 20px 10px;
    font-size: 28px;
    font-weight: 700;
    line-height: 35px;
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

  .figure-pauta {
    margin-bottom: 10px;
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