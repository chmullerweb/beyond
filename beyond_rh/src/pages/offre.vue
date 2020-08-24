<template>

  <div class="">
    <div class="" v-for="etape in etapes" :key="etape.id">

      <!-- <CardOffre cardOffre :etape="etape"/> -->
      <CardOffre :cardOffre="etape.class" :etape="etape"/>

      <Bouton/>

    </div>
  </div>


</template>

<script>
import {etapes} from "../data.js";
import CardOffre from "../components/CardOffre";
import Bouton from "../components/Bouton";

export default {
  name: 'Offre',
  components: {CardOffre, Bouton},

data() {
  return {
    etapes : etapes,
  };
},

};
</script>
