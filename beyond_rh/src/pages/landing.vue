<template>
    <div class="">
    <CardTitle/>
    <CardConcept/>
    </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import CardConcept from "../components/CardConcept";


export default {
  name: 'Landing',
  components: {CardTitle, CardConcept},
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
//         email: {
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