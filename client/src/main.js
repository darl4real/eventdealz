import 'vuetify/dist/vuetify.min.css'

import App from './App'
import Panel from '@/components/globals/Panel'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Vuetify from 'vuetify'
import router from './router'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})