<template>

  <div class="">
    <!-- <div class="" v-for="etape in etapes" :key="etape.id"> -->

      <!-- <CardOffre cardOffre :etape="etape"/> -->
      <!-- <CardOffre :cardOffre="etape.class" :etape="etape"/> -->
      <!-- <CardOffre cardOffre/> -->

      <CardOffre cardOffre>
       <template v-slot:number>1</template>
       <template v-slot:title>Mon titre</template>
       <template v-slot:text>Mon texte</template>
      </CardOffre>

      <CardOffre cardOffreRight>
       <template v-slot:number>1</template>
       <template v-slot:title>Mon titre</template>
       <template v-slot:text>Mon tutu</template>
      </CardOffre>

      <CardOffre cardOffre>
       <template v-slot:number>1</template>
       <template v-slot:title>Mon toto</template>
       <template v-slot:text>Mon texte</template>
      </CardOffre>

      <CardOffre cardOffreRight>
       <template v-slot:number>1</template>
       <template v-slot:title>Mon titre</template>
       <template v-slot:text>Mon titi</template>
      </CardOffre>

      <CardOffre cardOffre>
       <template v-slot:number>1</template>
       <template v-slot:title>Mon titre</template>
       <template v-slot:text>Mon texte</template>
      </CardOffre>


      <Bouton/>

  </div>


</template>

<script>
// import {etapes} from "../data.js";
import CardOffre from "../components/CardOffre";
import Bouton from "../components/Bouton";

export default {
  name: 'Offre',
  components: {CardOffre, Bouton},

// data() {
//   return {
//     etapes : etapes,
//   };
// },

};
</script>
