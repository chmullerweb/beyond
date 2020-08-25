<template>

  <div class="">
    <!-- <div class="" v-for="etape in etapes" :key="etape.id"> -->

      <!-- <CardOffre cardOffre :etape="etape"/> -->
      <!-- <CardOffre :cardOffre="etape.class" :etape="etape"/> -->
      <!-- <CardOffre cardOffre/> -->

      <CardOffre cardOffre>
       <template v-slot:number>1</template>
       <template v-slot:title>Situation</template>
       <template v-slot:text>La mise en situation permet de capitaliser sur l’expertise BEYOND. Nous mêlons sport à notre expertise du recrutement pour créer des mises en situation inédites et adaptées. Chaque poste nécessite une mise en situation unique et une grille de lecture adaptée pour en sortir le meilleur profil.</template>
      </CardOffre>

      <CardOffre cardOffreRight>
       <template v-slot:number>2</template>
       <template v-slot:title>Observation</template>
       <template v-slot:text>Observer des comportements permet de réduire les biais d’évaluation. Ce n’est ni une opinion, ni un préjugé. Un comportement est factuel, manifeste et observable. L’observation se fait via une approche scientifique pour ainsi être le plus précis possible dans la sélection.</template>
      </CardOffre>

      <CardOffre cardOffre>
       <template v-slot:number>3</template>
       <template v-slot:title>Compétence</template>
       <template v-slot:text>Positionner l’observateur dans une posture de décisionnaire où il doit émettre un avis de recrutement sur des compétences maîtrisées ou non maîtrisées. Un participation aux mise en situation permet de comprendre la méthodologie et de mieux cerner les compétences des candidats.</template>
      </CardOffre>

      <CardOffre cardOffreRight>
       <template v-slot:number>4</template>
       <template v-slot:title>Évaluation</template>
       <template v-slot:text>Valeur forte de BEYOND pour recruter : garder une approche entière de l’individu et une approche centrée sur l’humain afin de ne pas tout mécaniser. Recruter un collaborateur c\'est accueillir un nouveau membre dans la famille. L\'évaluation se veux humaine pour prendre en compte tous les facette du candidats.</template>
      </CardOffre>

      <CardOffre cardOffre>
       <template v-slot:number>5</template>
       <template v-slot:title>Recrutement</template>
       <template v-slot:text>L\'objectif de la mise en situation de recrutement est de savoir si on recrute cette personne ou non. Le sport est un véritable outil et non un gadget. Notre méthodologie scientifique nous permettent de sélectionner les profils qui vous correspondent.</template>
       <Bouton/>

      </CardOffre>



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
