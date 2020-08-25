<template>
    <div class="cardTitle container-fluid">
        <div class="row justify-content-md-center">
            <div class="col">
            <h1 class="claim">Recrutez autrement, Recrutez sportivement</h1>
            <p class="container">Gummies jujubes carrot cake tiramisu. Chocolate cake dragée soufflé gummi bears candy croissant croissant. Chupa chups sesame snaps cotton candy cake oat cake. Icing bonbon powder topping sugar plum sugar plum apple pie. Cupcake oat cake pudding jelly beans jelly beans soufflé jelly-o. </p>

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
