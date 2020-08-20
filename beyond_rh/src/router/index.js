import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Landing from '../pages/landing.vue'
import Concept from '../pages/concept.vue'
import Offre from '../pages/offre.vue'

import Bouton from '../components/Bouton.vue'
import CardConcept from '../components/CardConcept.vue'
import CardHome from '../components/CardHome.vue'
import CardOffre from '../components/CardOffre.vue'
import CardPictos from '../components/CardPictos.vue'
import CardTeam from '../components/CardTeam.vue'
import CardTitle from '../components/CardTitle.vue'
import Caroussel from '../components/Caroussel.vue'



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
    component: Landing
  },

  {
    path: '/concept',
    name: 'Concept',
    component: Concept
  },

  {
    path: '/offre',
    name: 'Offre',
    component: Offre
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
    path: '/caroussel',
    name: ' Caroussel',
    component: Caroussel
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
