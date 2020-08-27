<template>
  <div class="">

      <CardTitle btnHidden>
      <template v-slot:claimTitle>Une approche sportive</template>
      <template v-slot:claimTxt>
        <p>
          Utilisez le sport et les mises en situation pour comprendre et anticiper les différents traits de personnalités de vos candidats.
          Vérifiez les différents softs skills comme la capacité d’adaptation, l'écoute ou le management d'équipe en temps réel !
      </p>
    </template>
      </CardTitle>

      <Caroussel/>

      <CardTitle btnHidden>
      <template v-slot:claimTitle>Une approche psychologique</template>
      <template v-slot:claimTxt>
        <p>
          Nous utilisons un concept performant qui mêle sport & science. Ce processus permet l'évaluation psychologique des candidats via des test conçus par nos psychologues du sport.
        </p>
      </template>
      </CardTitle>
      <Caroussel/>
      <router-link to="/Offre">
      <Bouton btnInfo btn btnBig mTop>Besoin d'en savoir plus sur les étapes de recrutement avec Beyond ?</Bouton>
      </router-link>

      <CardTitle btnHidden>
      <template v-slot:claimTitle>La Team Beyond</template>
      <template v-slot:claimTxt>
        <p>
          Notre entreprise est composée d'une équipe de psychologue du sport, du créateur du projet qui travaillent en colaboration pour vous proposer des processus de recutement sur-mesure
        </p>

        <router-link :to="{ name: '', params: {} }"></router-link>
        </template>
      </CardTitle>


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
import CardTitle from "../components/CardTitle";
import CardTeam from "../components/CardTeam";
import Caroussel from "../components/Caroussel";
import Bouton from "../components/Bouton";

export default {
  name: 'Concept',
  components: {CardTeam, Caroussel, CardTitle, Bouton},
};
</script>
