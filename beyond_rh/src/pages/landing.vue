<template>
  <div>
    <div class="container-fluid sucessMsgStyle">
      {{ successMsg }}
    </div>
    <CardHome />
    <CardTitle btnText="Découvrir le concept">
      <template v-slot:icone>
        <i class="fas fa-microscope"></i>
      </template>
      <template v-slot:claimTitle>Recrutez autrement, Recrutez sportivement</template>
      <template v-slot:claimTxt>
        <p>
          Des solutions innovantes et personnalisées de recrutement, via des
          outils d’évaluations conçus par des psychologues du sport.
        </p>
        <p>
          L’objectif est de faire ressortir les points forts de la personnalité
          du candidat, afin de recruter le profil qui correspond à vos attentes.
        </p></template>
    </CardTitle>
    <div class="cardPictos container-fluid">
      <CardPictos>
        <template v-slot:icone>
          <i class="far fa-clock"></i>
        </template>
        <template v-slot:title>GAIN DE TEMPS</template>
        <template v-slot:text>
          Simplifiez vos recutements grace à un procédé pertinent et efficace
        </template>
      </CardPictos>
      <CardPictos>
        <template v-slot:icone>
          <i class="fas fa-microscope"></i>
        </template>
        <template v-slot:title>EVALUATION DES SOFTS SKILLS</template>
        <template v-slot:text>
          Découvrez des talents uniques souvent indétectables lors de recrutements
          classiques
        </template>
      </CardPictos>
      <CardPictos>
        <template v-slot:icone>
          <i class="fas fa-trophy"></i>
        </template>
        <template v-slot:title>DÉCELER LE BON CANDIDAT</template>
        <template v-slot:text>
          Percevez efficament les qualités relationnelles et
          professionnelles</template>
      </CardPictos>
    </div>
    <CardConcept/>
  </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import CardConcept from "../components/CardConcept";
import CardPictos from "../components/CardPictos";
import CardHome from "../components/CardHome";

export default {
  name: "Landing",
  data() {
    return {
      successMsg: "",
    };
  },
  components: { CardTitle, CardConcept, CardPictos, CardHome },
};
</script>

<style lang="css" scoped>
.cardPictos {
  display: flex;
  flex-direction: row;
  background-color: #454545;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}

.container-fluid {
  margin: 0 !important;
  padding: 0 !important;
}

.successMsgStyle {
  background-color: green;
  font-size: 1rem;
  color: black;
  font-weight: bolder;
}

@media screen and (max-width: 1023px) {
  .container-fluid {
    display: flex;
    flex-wrap: wrap;
  }

  .col img {
    width: 10%;
  }
}
</style>
