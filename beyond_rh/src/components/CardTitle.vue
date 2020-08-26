<template>
    <div class="cardTitle container-fluid">
        <div class="row justify-content-md-center">
            <div class="col">
            <h1 class="claim"><slot name="claimTitle">Recrutez autrement, Recrutez sportivement</slot></h1>
            <p class="container"><slot name="claimTxt"> Des solutions innovantes et personnalisées de recrutement via des outils d'évaluations conçus par des psychologues du sport. L'objectif est de faire ressortir les points forts de la personnalité du candidat. Ainsi vous recrutez le profil qui correspond à vos attentes. </slot></p> 
            <router-link to="/concept">
              <Bouton btnInfo btn>En savoir plus</Bouton>
            </router-link>

            </div>
        </div>
    </div>
</template>

<script>
import Bouton from './Bouton.vue';

export default {
  name: 'CardTitle',
  components: {Bouton},

  data() {
    return {
    }
},


};
</script>

<style>

.cardTitle{
    margin: 1.5rem auto;
}

.claim{
    padding: 2rem 0rem 1.3rem 0rem;
}


</style>
