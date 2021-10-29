import colors from 'vuetify/es5/util/colors'
import getSiteMeta from "/utils/getSiteMeta";
const meta = getSiteMeta();

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {

        titleTemplate: '%s - ¿Que Pasa News?',
        title: 'que-pasa-forntd',
        htmlAttrs: {
            lang: 'es',
        },
        meta: [
            ...meta,
            { charset: "utf-8" },
            { name: "HandheldFriendly", content: "True" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { property: "og:site_name", content: "Que Pasa News" },
            {
                hid: "description",
                name: "description",
                content: "Platafforma Lider Digital De Colombia",
            },
            { property: "og:image:width", content: "740" },
            { property: "og:image:height", content: "300" },
            { name: "twitter:site", content: "@bobross" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

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