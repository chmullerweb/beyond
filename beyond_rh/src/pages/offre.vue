<template>
  <div class="">

    <CardTitle/>
    <Carousseletapes/>

  </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import Carousseletapes from "../components/Carousseletapes";
import Bouton from "../components/Bouton";

export default {
  name: 'Offre',
  components: {Bouton, Carousseletapes, CardTitle},
  // components: {Carousseletapes, CardTitle},

};
</script>
