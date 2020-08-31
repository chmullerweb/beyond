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


      <Caroussel :img1="require('@/assets/foot.jpg')" :img2="require('@/assets/sport.jpg')" :img3="require('@/assets/team-sport.jpg')">
        <template #title1>
          Analysez les reflexions du candidat
        </template>
        <template #title2>
          Découvrez son adaptabilité
        </template>
        <template #title3>
          Déceler sa créativité
        </template>
      </Caroussel>



      <CardTitle btnHidden>
      <template v-slot:claimTitle>Une approche psychologique</template>
      <template v-slot:claimTxt>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </template>
      </CardTitle>

      <Caroussel :img1="require('@/assets/science.jpg')" :img2="require('@/assets/doctor.jpg')" :img3="require('@/assets/analyse.jpg')">
        <template #title1>
          Déterminez scientifiquement si le profil correspond aux valeurs de l’entreprise
        </template>
        <template #title2>
          Découvrez les compétences à adapter en milieu professionnel
        </template>
        <template #title3>
          Analyser les capacités d’organisations et d’adaptations
        </template>
      </Caroussel>




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
         <img team
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
import Carousseletapes from "../components/Carousseletapes";

export default {
  name: "Concept",
  components: { Carousseletapes, CardTitle },
  data() {
    return {};
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  .min-text {
    font-size: 1rem;
    font-weight: bolder;
  }
}
</style>
