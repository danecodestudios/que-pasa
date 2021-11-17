import colors from 'vuetify/es5/util/colors'


export default {
    // Global page headers: https://go.nuxtjs.dev/config-head


    head: {

        titleTemplate: '%s ',
        title: '¿Que Pasa News?',
        htmlAttrs: {
            lang: 'es-co',
        },





        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Que Pasa News Barranquilla, Colombia, Y el Mundo '
            },

            // Open Graph
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'Aplicacion Web SSR'
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: 'Que Pasa News  '
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: '¿Que Pasa? News'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Que Pasa News Barranquilla, Colombia, Y el Mundo'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://www.quepasanews.info/'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1637159233/Logo-Que-Pasa/QUE_PASA_1_-modified_mciyot.ico'
            },

            // Twitter
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary'
            },
            {
                hid: 'twitter:site',
                name: 'twitter:site',
                content: '@quepasanews'
            },
            {
                hid: 'twitter:url',
                name: 'twitter:url',
                content: 'https://www.quepasanews.info/'
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'Que Pasa News | Plataforma Oficial'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Que Pasa News Barranquilla, Colombia, Y el Mundo'
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1637159233/Logo-Que-Pasa/QUE_PASA_1_-modified_mciyot.ico'
            },

            // Facebook
            {
                hid: 'facebook:url',
                name: 'facebook:url',
                content: `https://www.quepasanews.info`
            },
            {
                hid: 'facebook:title',
                name: 'facebook:title',
                content: '¿Que Pasa News?'
            },
            {
                hid: 'facebook:description',
                name: 'facebook:description',
                content: 'Que Pasa News Barranquilla, Colombia, Y el Mundo'
            },
            {
                hid: 'facebook:image',
                name: 'facebook:image',
                content: 'https://res.cloudinary.com/danecod-s-a-s/image/upload/v1637159233/Logo-Que-Pasa/QUE_PASA_1_-modified_mciyot.ico'
            }



        ],




        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
            {
                hid: "canonical",
                rel: "canonical",
                href: process.env.BASE_URL,
            },
        ],


    },



    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/static/css/main.css', '@/static/css/noticias.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/google-analytics',


    ],

    googleAnalytics: {
        id: '289382247'
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/sitemap',

    ],

    script: [{
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
            'data-ad-client': 'ca-pub-9388034473338767',
            async: true
        }


    ],



    sitemap: {
        hostname: 'https://www.quepasanews.info/',
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        gzip: true,
        exclude: ['/404'],

    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.white,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },



    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}