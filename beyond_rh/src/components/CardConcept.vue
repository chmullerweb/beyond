<template>
    <div class="container-fluid">
        <div class="row cardConcept">
            <div class="col img">
            <img src="../assets/boxe.jpg"/>
            </div>
            <div class="col cardConceptText">
            <h2 class="claimConcept"><slot name="claimConcept">Analysez les soft skills</slot></h2>
            <p class="container"><slot name="claimConceptText">Nos activités sont adaptées à toutes les conditions physiques. L’objectif et de mettre e valeur les qualités humaines et relationnelles des candidats.</slot></p>

            <router-link to="/concept">
              <Bouton btnDark btn>En savoir plus </Bouton>
           </router-link>

            </div>
        </div>
    </div>
</template>

<script>
//import CardTitle from './CardTitle.vue';
import Bouton from './Bouton.vue';

export default {
  name: 'CardConcept',
  components: {Bouton},

};

// <CardTitle>
//             <template v-slot:claimTitle>Analysez les softs skills</template>
//             <template v-slot:claimTxt>Marshmallow soufflé cake gingerbread pie chocolate bar. Marshmallow caramels candy canes toffee gummi bears tootsie roll. Fruitcake cheesecake caramels cotton candy marshmallow halvah croissant.</template>
//             <template v-slot:txtButton>En savoir plus</template>
//             </CardTitle>
</script>

<style scoped>

.cardConcept{
    align-items: center;
    background-color: #C6D8D3;
}

.cardConceptText{
    text-align: left;
}

.container{
  padding: 0!important;
}

</style>
