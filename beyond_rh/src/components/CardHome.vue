<template>
    <div class="cardHome container-fluid">
      <div class="card text-white">
          <img src="" class="card-img" alt="">
        <div class="card-img-overlay">
          <i class="fas fa-microscope"></i>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
</template>

<script>
import Bouton from './Bouton.vue';

export default {
  name: 'CardHome',
  components: {Bouton},

};
</script>

<style>

.cardHome{
    margin: 1.5rem auto;
    backgrounds-color: lightsalmon;
}

.claim{
    padding: 2rem 0rem 1.3rem 0rem;
}

</style>
