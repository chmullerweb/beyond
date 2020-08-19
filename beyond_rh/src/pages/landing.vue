<template>
    <div class="">
    <CardHome/>
    <CardTitle/>
    <CardPictos/>
    <CardConcept/>
    <Footer/>
    </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import CardConcept from "../components/CardConcept";
import CardPictos from "../components/CardPictos";
import CardHome from "../components/CardHome";
import Footer from "../layout/Footer";



export default {
  name: 'Landing',
  components: {CardTitle, CardConcept, CardPictos, CardHome, Footer},
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
