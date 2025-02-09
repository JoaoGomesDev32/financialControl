import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    components,
    directives,
    // Adicione aqui as opções de tema, customização, etc.
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#2196F3',
                secondary: '#424242',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#64B5F6',
                success: '#8BC34A',
                warning: '#FFC107',
            },
        },
    },
})