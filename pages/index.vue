<template>
  <div>
  

    <Noticias />
  </div>
</template>


<script>
import Noticias from '@/pages/noticias/index.vue'
// import Destacados from '@/components/Destacados.vue'
// import Nav from '@/components/Nav.vue'
export default {
  head() {
    return {
      title: 'INICIO',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'La Web De Noticias De Barranquilla, Atlantico, Costa Caribe Colombiana, Colombia Y el Mundo',
        },
      ],
    }
  },

  components: {
    Noticias,
  },
}
</script>
