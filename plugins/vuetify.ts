import { createVuetify } from "vuetify/lib/framework.mjs"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import { md3 } from "vuetify/blueprints"
import '@mdi/font/css/materialdesignicons.css'


export default defineNuxtPlugin(nuxtApp => {
	const vuetify = createVuetify({
		components,
		directives,
		blueprint: md3,
		theme: {
			// defaultTheme: 'dark'
		},
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi
			}
		}
	})

	nuxtApp.vueApp.use(vuetify)
})