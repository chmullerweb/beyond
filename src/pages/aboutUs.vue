<template>
  <div class="">
    <CardTitle btnHidden>
      <template v-slot:claimTitle>Une approche sportive</template>
      <template v-slot:claimTxt>
        <p>
          Utilisez les mises en situation sportives pour comprendre et
          anticiper les différents traits de personnalités de vos candidats.
          Vérifiez les différents softs skills comme la capacité d’adaptation,
          l'écoute ou le management d'équipe en temps réel !
        </p>
      </template>
    </CardTitle>


    <Caroussel :img1="require('@/assets/foot.jpg')" :img2="require('@/assets/sport.jpg')" :img3="require('@/assets/team-sport.jpg')">
      <template #title1>
        Analysez le comportement du candidat
      </template>
      <template #title2>
        Découvrez son adaptabilité
      </template>
      <template #title3>
        Décelez sa créativité
      </template>
  </Caroussel>



    <CardTitle btnHidden>
      <template v-slot:claimTitle>Une approche psychologique</template>
      <template v-slot:claimTxt>
        <p>
          Nous utilisons un concept performant qui mêle sport & science. Ce
          processus permet l'évaluation psychologique des candidats via des test
          conçus par nos psychologues du sport.
        </p>
      </template>
    </CardTitle>

    <Caroussel :img1="require('@/assets/sport3.jpg')" :img2="require('@/assets/jogging.jpg')" :img3="require('@/assets/analyse.jpg')">
        <template #title1>
          Déterminez scientifiquement si le profil correspond aux valeurs de l’entreprise
        </template>
        <template #title2>
          Découvrez les compétences à s'adapter en milieu professionnel
        </template>
        <template #title3>
          Analysez les capacités d’organisation et d’adaptation
        </template>
    </Caroussel>

    <router-link to="/Offre">
      <Bouton btnInfo btn btnBig mTop class="min-text">
        Besoin d'en savoir plus sur les étapes de recrutement avec Beyond ?
      </Bouton>
    </router-link>
    <CardTitle btnHidden>
      <template v-slot:claimTitle>La Team Beyond</template>
      <template v-slot:claimTxt>
        <p>
          Notre entreprise est composée d'une équipe de psychologue du sport, ainsi que du
          créateur du projet qui travaillent en colaboration pour vous proposer
          des processus de recutement sur-mesure
        </p>
        <router-link :to="{ name: '', params: {} }"></router-link>
      </template>
    </CardTitle>
    <CardTeam cardTeam>
      <template v-slot:img>
        <img team width="400" height="250" src="../assets/doctor.jpg" />
      </template>
      <template v-slot:title>Yusuf JHEENGOOR : CEO</template>
      <template v-slot:text>
        Auditeur financier chez PwC pendant 2 ans, de formation financière avec
        un DSCG. Je suis engagé associativement avec l'association RCE.<br />
        J'ai créé ce projet pour permettre un recrutement plus efficace et
        ouvert à tous, qui sort du cadre.<br/>
        Ce projet est lauréat French Tech Tremplin, Start Us Up et Pitch and
        Code des Descodeuses.
      </template>
    </CardTeam>
    <CardTeam cardTeamRight>
      <template v-slot:img>
        <img width="400" height="250" src="../assets/doctor.jpg" />
      </template>
      <template v-slot:title>Yusuf JHEENGOOR : CEO</template>
      <template v-slot:text
        >Auditeur financier chez PwC pendant 2 ans, de formation financière avec
        un DSCG. Je suis engagé associativement avec l'association RCE.<br />
        J'ai créé ce projet pour permettre un recrutement plus efficace et
        ouvert à tous, qui sort du cadre.<br/>
        Ce projet est lauréat French Tech Tremplin, Start Us Up et Pitch and
        Code des Descodeuses.
      </template>
    </CardTeam>

    <CardTeam cardTeam>
      <template v-slot:img>
        <img width="400" height="250" src="../assets/doctor.jpg" />
      </template>
      <template v-slot:title>Yusuf JHEENGOOR : CEO</template>
      <template v-slot:text>
        Auditeur financier chez PwC pendant 2 ans, de formation financière avec
        un DSCG. Je suis engagé associativement avec l'association RCE.<br />
        J'ai créé ce projet pour permettre un recrutement plus efficace et
        ouvert à tous, qui sort du cadre.<br/>
        Ce projet est lauréat French Tech Tremplin, Start Us Up et Pitch and
        Code des Descodeuses.
      </template>
    </CardTeam>
  </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import CardTeam from "../components/CardTeam";
import Caroussel from "../components/Caroussel";
import Bouton from "../components/Bouton";

export default {
  name: "AboutUs",
  components: { CardTeam, Caroussel, CardTitle, Bouton },
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
