<template>
    <div class="cardTitle container-fluid">
        <div class="row justify-content-md-center">
            <div class="col">
            <h1 class="claim"><slot name="claimTitle"></slot></h1>
            <p class="container"><slot name="claimTxt"></slot></p>
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
    /* background-color: #C6D8D3; */
}

.claim{
    padding: 2rem 0rem 1.3rem 0rem;
}


</style>
