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
    /* opacity: 0.8; */
    width: 100%;
    height: 100%;
}

.card-img{
  height: 100%
}

.card-img-overlay.home{
  /* background-color: #227C9D; */
  /* margin: 0!important; */
}

.card-title.home{
  padding: 2rem 0rem 0.1rem 0rem;
  font-size: 5rem;
  text-shadow: 1px 1px 2px black;
}

.card-text.home{
    /* padding: 3rem 0rem 1.3rem 0rem; */
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

  .card.text-white{
    min-height: 70%;
  }

  /* img{
    max-width: 50%;
  } */

}

@media screen and (max-width:667){
  .card-text.home{
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
}
  .card-title.home{
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  .btnInfo.btn{
    margin: 0;
    padding: 0;
    max-width: 1rem;
  }

  .card.text-white{
    height: 70%;
  }

  /* img{
    max-width: 30%;
  } */

}

</style>
