<template>
    <div class="cardTitle container-fluid">
        <div class="row justify-content-md-center">
            <div class="col">
            <h1 class="claim"><slot name="claimTitle"></slot></h1>
            <p class="container"><slot name="claimTxt"></slot></p>
            <router-link to="/concept">
              <Bouton btnDark btn :class="{'btn-hidden': btnHidden}">{{btnText}}</Bouton>
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
    props: {
      btnHidden: {
      type: Boolean,
      default: false,
    },
    btnText: {
        type: String
    }
},


};
</script>

<style>

.cardTitle{
    margin: 1.5rem auto;
    background-color: #C6D8D3;
}

.claim{
    padding: 2rem 0rem 1.3rem 0rem;
}

.btn-hidden{
  display: none;
}

@media screen and (max-width:1023px){
  .claim{
    font-size: 1.5rem;
  }
}






</style>
