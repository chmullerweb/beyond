import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// layout :
import HeaderNavbar from '../layout/HeaderNavbar.vue'
import Footer from '../layout/Footer.vue'

// pages :
import Landing from '../pages/landing.vue'
import Concept from '../pages/concept.vue'
import Offre from '../pages/offre.vue'
import CGU from '../pages/cgu.vue'

// components : 
import Bouton from '../components/Bouton.vue'
import CardConcept from '../components/CardConcept.vue'
import CardHome from '../components/CardHome.vue'
import CardOffre from '../components/CardOffre.vue'
import CardPictos from '../components/CardPictos.vue'
import CardTeam from '../components/CardTeam.vue'
import CardTitle from '../components/CardTitle.vue'
import Contact from '../pages/contact.vue'
import Caroussel from '../components/Caroussel.vue'
import Carousseletapes from '../components/Carousseletapes.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },

  // pages :

  {
    path: '/landing',
    name: 'Landing',
    components: { default: Landing, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/concept',
    name: 'Concept',
    components: { default: Concept, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/offre',
    name: 'Offre',
    components: { default: Offre, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/cgu',
    name: 'CGU',
    components: { default: CGU, header: HeaderNavbar, footer: Footer },
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
  },


  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
