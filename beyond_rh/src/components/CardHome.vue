<template>
    <div class="cardHome container-fluid">
      <div class="card text-white">
          <img src="" class="card-img" alt="">
        <div class="card-img-overlay">
          <h5 class="card-title home">BEYOND</h5>
          <p class="card-text home">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>

      <!-- <Bouton btn btnInfo>
        <slot name="txtButton">
        Comment ça marche ?
        </slot>

      </Bouton> -->

    </div>
</template>

<script>
// import Bouton from './Bouton.vue';

export default {
  name: 'CardHome',
  // components: {Bouton},

};
</script>

<style>

.cardHome{
    margin: 1.5rem auto;
    background-color: lightsalmon;
    width: 100%;
    height: 25rem;
}

.card-title, home{
  padding: 2rem 0rem 0.1rem 0rem;
  font-size: 5rem;
}

.card-text, home{
    padding: 3rem 0rem 1.3rem 0rem;
    font-size: 2rem;
}

</style>
