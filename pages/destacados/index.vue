<template>
  <v-container>
    <v-row class="justify-center">
      <div class="pa-1">
        <NuxtLink :to="'/destacados/' + slugUno">
          <v-card class="mx-auto card-1">
            <v-img class="white--text align-end imagen-1" :src="imagenUno">
              <v-card-title class="tituloUno">{{ tituloUno }}</v-card-title>
            </v-img>
          </v-card>
        </NuxtLink>
      </div>

      <div class="pa-1">
        <NuxtLink :to="'/destacados/' + slugDos">
          <v-card class="mx-auto card-2">
            <v-img
              class="white--text align-end"
              height="245px"
              :src="imagenDos"
            >
              <v-card-title class="tituloDos">{{ tituloDos }}</v-card-title>
            </v-img>
          </v-card>
        </NuxtLink>

        <NuxtLink :to="'/destacados/' + slugTres">
          <v-card class="mx-auto card-3">
            <v-img
              class="white--text align-end"
              height="245px"
              :src="imagenTres"
            >
              <v-card-title class="tituloTres">{{ tituloTres }}</v-card-title>
            </v-img>
          </v-card>
        </NuxtLink>
      </div>
    </v-row>
  </v-container>
</template>


    <style scoped>
.card-1 {
  max-width: 800px;
}
.card-2 {
  margin-bottom: 10px;
  max-width: 500px;
}

.card-3 {
  max-width: 500px;
}

.imagen-1 {
  height: 500px;
}

.tituloUno {
  background-image: linear-gradient(
    transparent 0%,
    rgba(44, 1, 114, 0.795) 80%
  );
  font-size: 2rem;
}
.tituloDos {
  background-image: linear-gradient(
    transparent 0%,
    rgba(44, 1, 114, 0.795) 80%
  );
  font-size: 1.5rem;
}

.tituloTres {
  background-image: linear-gradient(
    transparent 0%,
    rgba(44, 1, 114, 0.795) 80%
  );
  font-size: 1.5rem;
}

@media screen and (min-width: 240px) and (max-width: 575.98px) {
  .card-1 {
    max-width: 350px;
  }

  .card-2 {
    margin-bottom: 10px;
    max-width: 350px;
  }

  .card-3 {
    max-width: 350px;
  }

  .imagen-1 {
    height: 250px;
  }

  .tituloUno {
    background-image: linear-gradient(
      transparent 0%,
      rgba(44, 1, 114, 0.795) 80%
    );
    font-size: 20px;
    line-height: 22px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    -webkit-text-size-adjust: 100%;
    font-weight: 600;
    line-height: 1.2;
  }
  .tituloDos {
    background-image: linear-gradient(
      transparent 0%,
      rgba(44, 1, 114, 0.795) 80%
    );
    font-size: 20px;
    line-height: 22px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    -webkit-text-size-adjust: 100%;
    font-weight: 600;
    line-height: 1.2;
  }

  .tituloTres {
    background-image: linear-gradient(
      transparent 0%,
      rgba(44, 1, 114, 0.795) 80%
    );
    font-size: 20px;
    line-height: 22px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    -webkit-text-size-adjust: 100%;
    font-weight: 600;
    line-height: 1.2;
  }
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      destacados: [],
      categorias: [],

      //   SLUG
      slugUno: '',
      slugDos: '',
      slugTres: '',
      // =========

      // IMAGENES
      imagenUno: '',
      imagenDos: '',
      imagenTres: '',
      // =============

      // TITULOS
      tituloUno: '',
      tituloDos: '',
      tituloTres: '',

      // =========
    }
  },

  async mounted() {
    try {
      // ================= PETICION LISTA DE TODOS LOS POSTS  ==================================
      const res = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/destacados'
      )
      const resCat = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/categories'
      )

      this.slugUno = res.data[0].slug
      this.slugDos = res.data[1].slug
      this.slugTres = res.data[2].slug

      this.destacados = res.data
      this.imagenUno = res.data[0].one_call.featured_list.source_url
      this.imagenDos = res.data[1].one_call.featured_list.source_url
      this.imagenTres = res.data[2].one_call.featured_list.source_url

      this.tituloUno = res.data[0].title.rendered
      this.tituloDos = res.data[1].title.rendered
      this.tituloTres = res.data[2].title.rendered

      this.categorias = resCat.data
    } catch (error) {
      err = error
    }
  },
}
</script>