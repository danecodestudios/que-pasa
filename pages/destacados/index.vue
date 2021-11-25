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
              class="white--text align-end imagen-2"
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
              class="white--text align-end imagen-3"
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
  width: 800px;
  border-bottom: 2px solid rgb(0, 243, 0);
}
.card-2 {
  margin-bottom: 10px;
  width: 500px;
  border-bottom: 2px solid rgb(0, 243, 0);
}

.card-3 {
  max-width: 500px;
  border-bottom: 2px solid rgb(0, 243, 0);
}

.imagen-1 {
  width: 100%;
  height: 500px;
}

.imagen-2 {
  width: 100%;
}

.imagen-3 {
  width: 100%;
 
}

.tituloUno {
  background-image: linear-gradient(
    transparent 0%,
    rgba(44, 1, 114, 0.767) 50%
  );
  font-size: 40px;
  line-height: 45px;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
  font-weight: 400;
  text-align: start;
  word-break: normal;
}
.tituloDos {
  background-image: linear-gradient(
    transparent 0%,
    rgba(44, 1, 114, 0.767) 50%
  );
  font-size: 25px;
  line-height: 30px;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
  font-weight: 400;
  text-align: start;
  word-break: normal;
}

.tituloTres {
  background-image: linear-gradient(
    transparent 0%,
    rgba(44, 1, 114, 0.767) 50%
  );
  font-size: 25px;
  line-height: 30px;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
  font-weight: 400;
  text-align: start;
  word-break: normal;
}

@media screen and (min-width: 240px) and (max-width: 575.98px) {
  .card-1 {
    width: 350px;
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
      rgba(44, 1, 114, 0.767) 50%
    );
    font-size: 25px;
    line-height: 25px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-weight: 400;
    text-align: start;
    word-break: normal;
    letter-spacing: -0.5px;
  }
  .tituloDos {
    background-image: linear-gradient(
      transparent 0%,
      rgba(44, 1, 114, 0.767) 50%
    );
    font-size: 25px;
    line-height: 25px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-weight: 400;
    text-align: start;
    word-break: normal;
    letter-spacing: -0.5px;
  }

  .tituloTres {
    background-image: linear-gradient(
      transparent 0%,
      rgba(44, 1, 114, 0.767) 50%
    );
    font-size: 25px;
    line-height: 25px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-weight: 400;
    text-align: start;
    word-break: normal;
    letter-spacing: -0.5px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1263px) {
  .card-1 {
    width: 520px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }
  .card-2 {
    margin-bottom: 10px;
    width: 350px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }

  .card-3 {
    width: 350px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }

   .imagen-1 {
     width: 100%;
    height: 500px;
  }

  .imagen-2{
    width: 100%;
    height: 200px;
  }

   .imagen-3{
    width: 100%;
    height: 200px;
  }

   .tituloUno {
    background-image: linear-gradient(
      transparent 0%,
      rgba(44, 1, 114, 0.767) 50%
    );
    font-size: 25px;
    line-height: 25px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-weight: 400;
    text-align: start;
    word-break: normal;
    letter-spacing: -0.5px;
  }
  .tituloDos {
 
    font-size: 20px;
      line-height: 25px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-weight: 400;
    text-align: start;
    word-break: normal;
    letter-spacing: -0.5px;

  }

  .tituloTres {

    font-size: 20px;
  
  }
}

@media screen and (min-width: 1264px) and (max-width: 1919px) {
  .card-1 {
    width: 700px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }
  .card-2 {
    margin-bottom: 10px;
    width: 400px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }

  .card-3 {
    width: 400px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .card-1 {
    width: 800px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }
  .card-2 {
    margin-bottom: 10px;
    width: 500px;
    border-bottom: 2px solid rgb(0, 243, 0);
  }

  .card-3 {
    width: 500px;
    border-bottom: 2px solid rgb(0, 243, 0);
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