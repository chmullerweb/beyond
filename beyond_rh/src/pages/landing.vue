<template>

    <div class="">

    <CardHome/>
    <CardTitle/>

  <div class="cardPictos">

    <CardPictos>
      <template v-slot:icone>
        <i class="fas fa-microscope"></i>
      </template>
      <template v-slot:title>EVALUER LES SOFTS SKILLS</template>
      <template v-slot:text>Comment vérifier immédiatement les softs skills d'un futur collaborateur ? Les tests en ligne s'avère parfois décevant...</template>
   </CardPictos>

   <CardPictos>
     <template v-slot:icone>
       <i class="fas fa-trophy"></i>
     </template>
     <template v-slot:title>DÉCELER LE BON CANDIDAT</template>
     <template v-slot:text>Comment déceler le vrai du faux dans le discours des candidats ? Le recrutement doit être objectif et sans biais...</template>
   </CardPictos>

   <CardPictos>
    <template v-slot:icone>
      <i class="far fa-clock"></i>
    </template>
    <template v-slot:title>GAIN DE TEMPS</template>
    <template v-slot:text>En moyenne un recrutement se fait sur 4 à 5 semaines... Soit 175 h à chercher un futur collaborateur, qui parfois n'est pas le bon...</template>
  </CardPictos>

 </div>



    <CardConcept/>
  </div>

</template>



<script>

// import {pictos} from "../data.js";
import CardTitle from "../components/CardTitle";
import CardConcept from "../components/CardConcept";
import CardPictos from "../components/CardPictos";
import CardHome from "../components/CardHome";


export default {
  name: 'Landing',
  components: {CardTitle, CardConcept, CardPictos, CardHome},

  // data() {
  //   return {
  //     pictos : pictos,
  //   };
  // },
//   data() {
//     return {
//       users: membres,
//     }
//   },
//   props: {
//         identifiantClient: Number,
//         nom: {
//             type: String,
//             default: ""
//         },
//         prenom: {
//             type: String,
//             default: ""
//         },
//         adresse: String,
//         email: fff
//             type: String,
//             default: ""
//         }
//   },
//   computed: {
//       fullName() { return this.firstname + this.lastname }
//   },
//   methods: {
//       showExo1() {
//           this.$router.push({path: `/exo-1`})
//       },
//       showAnne() {
//           this.$router.push({path: `/users/3`})
//       },
//   },
};
</script>

<style lang="css" scoped>

.cardPictos{
  display: flex;
  flex-direction: row;
  background-color: #454545;
  width: 100%;
  margin: 0!important;
  padding: 0!important;
}
.container-fluid{
  margin: 0!important;
  padding: 0!important;
}

</style>
