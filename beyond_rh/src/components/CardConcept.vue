<template>
  <div class="container-fluid">
    <div class="row cardConcept">
      <div class="col img">
        <img src="../assets/boxe.jpg" />
      </div>
      <div class="col cardConceptText">
        <h2 class="claimConcept mt-4 mb-3 font-weight-bold">
          <slot name="claimConcept">Analysez les soft skills</slot>
        </h2>
        <div class="container">
          <slot name="claimConceptText">
            <p>
              Nos activités sont adaptées à toutes les conditions physiques.
              L’objectif et de mettre en valeur les qualités humaines et
              relationnelles des candidats.
            </p>
            <h3 class="title_activite mt-3 mb-3 font-weight-bold">
              Voici un exemple d'une journée de recrutement
            </h3>
            <h4 class="subtitle_activite font-weight-bold">Matinée</h4>
            <ul>
              <li>
                Rencontre entre les candidats et recruteurs autours d’un petit
                déjeuner convivial
              </li>
              <li>
                Constitution d’équipes mixtes associant différents profils
              </li>
            </ul>
            <h4 class="subtitle_activite font-weight-bold">Après-midi</h4>
            <ul>
              <li>Début d'ativités collectifs ou individuel</li>
              <li>
                Ralisation du bilan personnalisé par nos experts psychologues du
                sport
              </li>
            </ul>
          </slot>
        </div>

        <router-link to="/offre">
          <Bouton btnDark btn>Notre concept </Bouton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Bouton from "./Bouton.vue";

export default {
  name: "CardConcept",
  components: { Bouton },
};
</script>

<style scoped>

.cardConcept{
    align-items: center;
    background-color: #C6D8D3;
    margin-right: 0!important;
}

.cardConceptText {
  text-align: left;
}

.container {
  padding: 0 !important;
}

.title_activite {
  font-size: 1.1em;
}

.subtitle_activite {
  font-size: 1em;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
    padding-left: 2rem;
  }

  .title_activite {
    font-size: 1rem;
  }

.bouton_principal{
  text-align: center;
}
.cardConcept{
    margin-right: 0!important;
}

  .subtitle_activite {
    font-size: 0.9rem;
  }


  .bouton_principal {
    text-align: center;
  }
  img{
    width: 23rem;
    height: 15rem;
  }
}


@media screen and (max-width:1023px){
  .row.cardConcept{
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
  .col.img {
    margin: 0px;
    padding: 0px;
  }
  /* img{
    width: 1rem;
    height: 1rem;
  } */
  .col{
    padding: 0!important;
  }
  .cardConcept{
      margin-right: 0!important;
  }

}
</style>
