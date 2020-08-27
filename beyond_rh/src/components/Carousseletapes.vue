<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38">

          <div>

              <div class="">
                <div class="round">
                  <p class="number">1</p>
                </div>
              </div>

              <div class="">
                <h1>Situation</h1>
                <p>La mise en situation permet de capitaliser sur l’expertise BEYOND. Nous mêlons sport à notre expertise du recrutement pour créer des mises en situation inédites et adaptées. Chaque poste nécessite une mise en situation unique et une grille de lecture adaptée pour en sortir le meilleur profil.</p>
              </div>

          </div>

      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38">
        <div>
            <div class="">
              <div class="round">
                <p class="number">2</p>
              </div>
            </div>
            <div class="">
              <h1>Observation</h1>
              <p>Observer des comportements permet de réduire les biais d’évaluation. Ce n’est ni une opinion, ni un préjugé. Un comportement est factuel, manifeste et observable. L’observation se fait via une approche scientifique pour ainsi être le plus précis possible dans la sélection.</p>
            </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38">
        <div>
            <div class="">
              <div class="round">
                <p class="number">3</p>
              </div>
            </div>
            <div class="">
              <h1>Compétence</h1>
              <p>Positionner l’observateur dans une posture de décisionnaire où il doit émettre un avis de recrutement sur des compétences maîtrisées ou non maîtrisées. Un participation aux mise en situation permet de comprendre la méthodologie et de mieux cerner les compétences des candidats.</p>
            </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38">
        <div>
              <div class="round">
                <p class="number">4</p>
              </div>
            <div class="">
              <h1>Évaluation</h1>
              <p>Valeur forte de BEYOND pour recruter : garder une approche entière de l’individu et une approche centrée sur l’humain afin de ne pas tout mécaniser. Recruter un collaborateur c'est accueillir un nouveau membre dans la famille. L'évaluation se veux humaine pour prendre en compte tous les facette du candidats.</p>
            </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38">
        <div>
            <div class="">
              <div class="round">
                <p class="number">5</p>
              </div>
            </div>
            <div class="">
              <h1>Recrutement</h1>
              <p>L'objectif de la mise en situation de recrutement est de savoir si on recrute cette personne ou non. Le sport est un véritable outil et non un gadget. Notre méthodologie scientifique nous permettent de sélectionner les profils qui vous correspondent.</p>
            </div>
        </div>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>


<script>
  import Carousseletapes from './Carousseletapes.vue';
    export default {
      name: 'Carousseletapes',
      component: {Carousseletapes},
      data() {
        return {
          slide: 0,
          sliding: null
        }
      },
      methods: {
        onSlideStart() {
          this.sliding = true
        },
        onSlideEnd() {
          this.sliding = false
        }
      }
    }
</script>

<style lang="css" scoped>

p{
  font-size: 2rem;
}

.cardOffre{
    padding: 2rem 1rem 2rem 1rem;
    background-color: #E2E2E2;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row!important;
    margin: 0!important;
}

.offre{
    padding: 2rem 2rem 1.3rem 4rem;
}

.cardOffreRight{
  display: flex;
  flex-direction: row-reverse!important;
  justify-content: space-between;
  background-color: #7798AB;
}

.number{
  font-family: 'Alata';
  font-size: 3rem;
}

.round{
  border: 0.3rem solid grey;
  border-radius: 75px;
  margin-top: 1rem;
  padding: 1.2rem;
  width: 8rem;
  height: 8rem;
  margin: 1rem!important;
}

.card-body col-md-6{
  margin: 0rem!important;
  padding: 0rem!important;
}

#carousel-1.carousel.slide{
  width: 80%!important;
  display: inline-flex;
  vertical-align: middle;
  margin: 2rem;
}


</style>
