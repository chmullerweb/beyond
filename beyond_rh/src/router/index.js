import Vue from 'vue'
import VueRouter from 'vue-router'

// layout :
import HeaderNavbar from '../layout/HeaderNavbar.vue'
import Footer from '../layout/Footer.vue'

// pages :
import Landing from '../pages/landing.vue'
import Concept from '../pages/concept.vue'
import AboutUs from '../pages/aboutUs.vue'
import Cgu from '../pages/cgu.vue'
import Mentions from '../pages/mentions.vue'
import Offre from '../pages/offre.vue'

// components :
import Bouton from '../components/Bouton.vue'
import CardConcept from '../components/CardConcept.vue'
import CardHome from '../components/CardHome.vue'
import CardOffre from '../components/CardOffre.vue'
import CardPictos from '../components/CardPictos.vue'
import CardTeam from '../components/CardTeam.vue'
import CardTitle from '../components/CardTitle.vue'
import Caroussel from '../components/Caroussel.vue'
import Carousseletapes from '../components/Carousseletapes.vue'



Vue.use(VueRouter)

  const routes = [
    // pages :
  {
    path: '/landing',
    name: 'Landing',
    components: { default: Landing, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/conceptBeyond',
    name: 'Concept',
    components: { default: Concept, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    components: { default: AboutUs, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/cgu',
    name: 'Cgu',
    components: { default: Cgu, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/mentions',
    name: 'Mentions',
    components: { default: Mentions, header: HeaderNavbar, footer: Footer },
  },


  // components :
  {
    path: '/bouton',
    name: 'Bouton',
    component: Bouton
  },

  {
    path: '/cardConcept',
    name: 'CardConcept',
    component: CardConcept
  },

  {
    path: '/cardHome',
    name: ' CardHome',
    component: CardHome
  },

  {
    path: '/cardOffre',
    name: ' CardOffre',
    component: CardOffre
  },

  {
    path: '/cardPictos',
    name: ' CardPictos',
    component: CardPictos
  },

  {
    path: '/cardTeam',
    name: ' CardTeam',
    component: CardTeam
  },

  {
    path: '/cardTitle',
    name: ' CardTitle',
    component: CardTitle
  },


  {
    path: '/caroussel',
    name: ' Caroussel',
    component: Caroussel
  },
  {
    path: '/carousseletapes',
    name: ' Carousseletapes',
    component: Carousseletapes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
