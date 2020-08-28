<template>
    <div class="cardHome container-fluid">

      <div class="card text-white">
          <img src="../assets/desk3.jpg" class="card-img" alt="" max-width="100%">
        <div class="card-img-overlay home">
          <h5 class="card-title home">BEYOND</h5>
          <p class="card-text home">
            LA SOLUTION D'AUTHENTICITÉ POUR VOS RECRUTEMENTS <br>
            FAITES DE MEILLEURS RECRUTEMENTS EN CHALLENGEANT VOS CANDIDATS !</p>
              <router-link to="/concept">
                <Bouton btnInfo btn>Comment ça marche ?</Bouton>
             </router-link>
        </div>
      </div>

    </div>
</template>

<script>
import Bouton from './Bouton.vue';

export default {
  name: 'CardHome',

  components: {Bouton},

  data() {
      return {
      }
  },

}

</script>

<style>

.cardHome{
    width: 100%;
    height: 24rem;
}

.card-img{
  height: 24rem;
}

.card-title.home{
  padding: 2rem 0rem 0.1rem 0rem;
  font-size: 5rem;
  text-shadow: 1px 1px 2px black;
}

.card-text.home{
    font-size: 2rem;
    text-shadow: 1px 1px 2px black;
}

@media screen and (max-width:1023px){
  .card-text.home{
  font-size: 1rem;
  margin: 0;
  padding: 0;
}
  .card-title.home{
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .btnInfo.btn{
    margin: 0;
    padding: 0;
    max-width: 1.5rem;
  }

  .cardHome{
    height: 20rem;
  }

  .card-img{
    height: 20rem;
  }

}

@media screen and (max-width:668px){
  .card-text.home{
  font-size: 1rem;
  margin: 0;
  padding: 0;
}
  .card-title.home{
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .btnInfo.btn{
    margin: 0;
    padding: 0;
    max-width: 1rem;
  }

  .cardHome{
    height: 15rem;
  }

  .card-img{
    height: 15rem;
  }

}

</style>
