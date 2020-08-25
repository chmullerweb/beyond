<template>

    <div class="">

      <!-- <Caroussel>
        <template v-slot:title>L'approche sportive</template>
      </Caroussel> -->

      <!-- <Caroussel>
        <template v-slot:title>L'approche psychologique</template>
      </Caroussel> -->


      <CardTeam cardTeam>
       <template v-slot:img>
         <img
           width="400"
           height="250"
           src="../assets/meet.jpg">
       </template>
       <template v-slot:title>UTILISEZ DES CRITÈRES OBJECTIFS ET SCIENTIFIQUES</template>
       <template v-slot:text>Supprimez les biais du recrutement !<br>
Recruteurs comme candidats, les entretiens demandent une attention particulière. Certains candidats ratent leurs entretiens à cause du stress tandis que certains recruteurs ont des biais dans leur jugement (école, à priori...)<br>
Beyond vous propose d'utiliser le sport et la psychologie, en d'autres mots la science pour choisir votre candidat !</template>
     </CardTeam>

     <Caroussel>
       <template v-slot:title>L'approche sportive</template>
     </Caroussel>


     <CardTeam cardTeamRight>
       <template v-slot:img>
         <img
           width="400"
           height="250"
           src="../assets/meet.jpg"
         >
       </template>
       <template v-slot:title>UTILISATION DE MISES EN SITUATION SPORTIVES</template>
       <template v-slot:text>Des mises en situation pour challenger vos candidats! Utilisez le sport et les mises en situation pour comprendre et anticiper les différentes traits de personnalité de vos candidats. Vérifiez les différents softs skills comme la capacité d’adaptation, l'écoute ou le management d'équipe en temps réel !
Quoi de mieux pour s'assurer d'un bon matching !</template></CardTeam>

     <Caroussel>
       <template v-slot:title>L'approche psychologique</template>
     </Caroussel>

     <CardTeam cardTeam>
       <template v-slot:img>
        <img
          width="400"
          height="250"
          src="../assets/meet.jpg"
        >
       </template>
       <template v-slot:title>ASSUREZ VOUS UN BON RECRUTEMENT !</template>
       <template v-slot:text>Le corps est un révélateur formidable !<br> Défininnez les éléments de personnalité qui seront primordial chez votre futur collaborateur et testez les de manière scientifique et objective.<br> -->
Vous assurez ainsi un recrutement humain et scientifique, qui met au coeur vos valeurs ainsi que le candidat.<br>
C'est un recrutement Win-Win !</template>
      </CardTeam>
        </div>

</template>


<script>
import CardTeam from "../components/CardTeam";
import Caroussel from "../components/Caroussel";

export default {
  name: 'Concept',
  components: {CardTeam, Caroussel},
};
</script>
