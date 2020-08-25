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
           src="../assets/doctor.jpg">
       </template>
       <template v-slot:title>Yusuf JHEENGOOR : CEO</template>
       <template v-slot:text>Auditeur financier chez PwC pendant 2 ans, de formation financière avec un DSCG. Je suis engagé associativement avec l'association RCE.<br>
       J'ai créé ce projet pour permettre un recrutement plus efficace et ouvert à tous, qui sort du cadre.<br>
       Ce projet est lauréat French Tech Tremplin, Start Us Up et Pitch and Code des Decodeuses.
       </template>
     </CardTeam>

     <Caroussel>
       <template v-slot:title>L'approche sportive</template>
     </Caroussel>


     <CardTeam cardTeamRight>
       <template v-slot:img>
         <img
           width="400"
           height="250"
           src="../assets/doctor.jpg"
         >
       </template>
       <template v-slot:title>Yusuf JHEENGOOR : CEO</template>
       <template v-slot:text>Auditeur financier chez PwC pendant 2 ans, de formation financière avec un DSCG. Je suis engagé associativement avec l'association RCE.<br>
       J'ai créé ce projet pour permettre un recrutement plus efficace et ouvert à tous, qui sort du cadre.<br>
       Ce projet est lauréat French Tech Tremplin, Start Us Up et Pitch and Code des Decodeuses.</template>
     </CardTeam>

     <Caroussel>
       
     </Caroussel>

     <CardTeam cardTeam>
       <template v-slot:img>
        <img
          width="400"
          height="250"
          src="../assets/doctor.jpg"
        >
       </template>
       <template v-slot:title>Yusuf JHEENGOOR : CEO</template>
       <template v-slot:text>Auditeur financier chez PwC pendant 2 ans, de formation financière avec un DSCG. Je suis engagé associativement avec l'association RCE.<br>
       J'ai créé ce projet pour permettre un recrutement plus efficace et ouvert à tous, qui sort du cadre.<br>
       Ce projet est lauréat French Tech Tremplin, Start Us Up et Pitch and Code des Decodeuses.</template>
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
