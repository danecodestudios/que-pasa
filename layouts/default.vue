<template >
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class=" fondo-morado-1"
      height="80px"
    >
      <div>
        <Logo />
      </div>
      <v-spacer />

      <div class="radio"  >
        <v-divider class="mx-4  " vertical style="background-color:#d1069e;"></v-divider>
        <h6 class=" titulo-emisora">{{ titleEmisora }}</h6>
        <v-btn
          class="p-3 ml-4 boton-radio"
          icon
          @click.stop="sonido()"
        >
          <v-icon v-if="!pausa" class="p-4 " style="color:white;" size="45" >mdi-play-speed</v-icon>
          <v-icon v-if="pausa" class="p-4"  style="color:white;" size="45">mdi-motion-pause-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>

        <Nuxt />

    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer class="footer  " style="color:white; " :absolute="!fixed" app>
      <span>&copy; TODOS LOS DERECHOS RESERVADOS {{ new Date().getFullYear() }} LA ESQUINA RADIO || DONDE TODO PASA</span>
    </v-footer>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  top: 0;
  padding: 5px;

}

.titulo-emisora {
  color: white;
  font-size: 2rem;
  font-weight: 600;


  font-family: 'Inter', sans-serif;
  /* -webkit-text-stroke: 1px white;   */
}

.boton-radio{
  background-color:#d1069e;
  padding: 5px;

}

.footer{
  background-color: black;
  border-top: 3px solid #d1069e;
}

@media screen and (min-width: 240px) and (max-width: 575.98px){
  .radio {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  top: 0;
  padding: 5px;
}

.titulo-emisora {
  color: white;
  font-size: .8rem;
  font-weight: 600;
  -webkit-text-stroke: 0px;
}

.boton-radio{
  background-color:black ;

}

}
</style>

<script>
export default {
  data() {
    return {
      audio: null,
      pausa: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      titleEmisora: 'EN VIVO ',
    }
  },

    mounted() {
    this.$store.commit('initializeSound')
  },
    methods: {
    sonido() {
      if (this.pausa == false || this.isSoundEnabled) {
        this.audio = new Audio('http://stream.zeno.fm/5m7yn6bxe48uv')
        this.audio.play()
        this.pausa = true
      } else {
        this.audio.pause()
        this.pausa = false
      }
    },
  },
  computed: {
    isSoundEnabled() {
      return this.$store.state.isSoundEnabled
    },
  },
}
</script>
