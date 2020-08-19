<template>

    <div class="">

      <CardOffre cardOffre/>
      <CardOffre cardOffreRight/>
      <CardOffre cardOffre/>
      <CardOffre cardOffreRight/>
      <CardOffre cardOffre/>
      <CardOffre cardOffreRight/>

      <Bouton/>
      
    </div>

</template>

<script>
import CardOffre from "../components/CardOffre";
import Bouton from "../components/Bouton";



export default {
  name: 'Offre',
  components: {CardOffre, Bouton},
};
</script>
