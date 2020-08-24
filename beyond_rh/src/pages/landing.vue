<template>

    <div class="">

    <CardHome/>
    <CardTitle/>
    <CardConcept/>

    <CardPictos>
      <template v-slot:icone>
        <i class="fas fa-microscope"></i>
      </template>
      <template v-slot:title>Mon tutu</template>
      <template v-slot:text>Mon titi</template>
   </CardPictos>

   <CardPictos>
     <template v-slot:icone>
       <i class="fas fa-trophy"></i>
     </template>
     <template v-slot:title>Mon toto</template>
     <template v-slot:text>Mon tata</template>
   </CardPictos>

   <CardPictos>
    <template v-slot:icone>
      <i class="far fa-clock"></i>
    </template>
    <template v-slot:title>Mon titre</template>
    <template v-slot:text>Mon texte</template>
  </CardPictos>

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
