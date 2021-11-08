import Vue from 'vue'
import VueMdijs from 'vue-mdijs'
import { mdiGithub, mdiEarth } from '@mdi/js'

VueMdijs.add({ mdiGithub, mdiEarth })
Vue.use(VueMdijs)

export default () => { }
