import Vue from 'vue'
import VueMdijs from 'vue-mdijs'
import { mdiGithub, mdiEarth, mdiFacebook, mdiTwitter, mdiLinkedin } from '@mdi/js'

VueMdijs.add({ mdiGithub, mdiEarth, mdiFacebook, mdiTwitter, mdiLinkedin })
Vue.use(VueMdijs)
