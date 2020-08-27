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
<<<<<<< HEAD
import Cgu from '../pages/cgu.vue'
=======
import CGU from '../pages/cgu.vue'
import Mentions from '../pages/mentions.vue'
>>>>>>> 29af8c15bcf5212eb5e56d2879425c6d9760532c

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
    name: 'Cgu',
    components: { default: Cgu, header: HeaderNavbar, footer: Footer },
  },
  {
    path: '/mentionsLegales',
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
