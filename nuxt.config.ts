// Nuxt config file
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    runtimeConfig: {
        backendUrl: ''
    },
    modules: [
        'vuetify-nuxt-module'
    ],
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions: {
            /* vuetify options */
        }
    }
})


//// https://nuxt.com/docs/api/configuration/nuxt-config
//export default defineNuxtConfig({
//  devtools: { enabled: true }
//})
