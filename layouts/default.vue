<template >
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="purple darken-4 nav"
      height="70px"
    >
      <div>
        <Logo />
      </div>
      <v-spacer />

      <div class="radio">
        <v-divider class="mx-4 light-green accent-4" vertical></v-divider>
        <h6 class=" titulo-emisora">{{ titleEmisora }}</h6>
        <v-btn
          class="p-3 ml-4 boton-radio"
          icon
          @click.stop="sonido()"
        >
          <v-icon v-if="!pausa" class="p-4 " size="45" >mdi-play-speed</v-icon>
          <v-icon v-if="pausa" class="p-4" size="45">mdi-motion-pause-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
    <v-footer class="purple darken-4" :absolute="!fixed" app>
      <span>&copy; TODOS LOS DERECHOS RESERVADOS {{ new Date().getFullYear() }} QUE PASA NEWS || COLOMBIA </span>
    </v-footer>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
.nav {
  border-bottom: 2px solid greenyellow;
}

.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  top: 0;
  padding: 5px;
}

.titulo-emisora {
  color: #310158;
  font-size: 2rem;
  font-weight: 600;
  color: #00F900;
  font-family: 'Inter', sans-serif;
  /* -webkit-text-stroke: 1px white; */
}

.boton-radio{
  background-color:#310158;
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
  color: #00F900;
  font-size: .8rem;
  font-weight: 600;
  -webkit-text-stroke: 0px;
}

.boton-radio{
  background-color:#00F900 ;
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
      titleEmisora: 'QUE PASA RADIO',
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
