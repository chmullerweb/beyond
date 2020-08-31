<template>
  <div class="">
    <CardTitle btnText="C'est quoi l'approche Beyond ?">
      <template v-slot:claimTitle>NOTRE CONVICTION</template>
      <template v-slot:claimTxt>
        Utiliser le sport dans ses recrutements permet aux candidat-e-s de se révéler de manière plus authentique.
        Une étape complémentaire de mise en situation, en adéquation avec la culture de l'entreprise, pour optimiser le processus de sélection de nouveaux collaborateurs.

      </template>
    </CardTitle>
    <Carousseletapes />
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
