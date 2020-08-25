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
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide> -->

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>UTILISEZ DES CRITÈRES OBJECTIFS ET SCIENTIFIQUES</h1>
        <p>Supprimez les biais du recrutement !
  ​          Recruteurs comme candidats, les entretiens demandent une attention
            particulière. Certains candidats ratent leurs entretiens à cause du
            stress tandis que certains recruteurs ont des biais dans leur
            jugement (école, à priori...)
​            Beyond vous propose d'utiliser le sport et la psychologie, en
            d'autres mots la science pour choisir votre candidat !
        </p>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>UTILISATION DE MISES EN SITUATION ​SPORTIVES</h1>
        <p>Des mises en situation pour challenger vos candidats !
           ​Utilisez le sports et les mises en situation pour comprendre et
           anticiper les différentes traits de personnalités de vos candidats.
           Vérifiez les différents softs skills comme la capacité d’adaptation,
           l'écoute ou le management d'équipe en temps réel !
           Quoi de mieux pour s'assurer d'un bon matching !
        </p>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>ASSUREZ VOUS UN BON RECRUTEMENT !</h1>
        <p>Le corps est un révélateur formidable !
           Définissez les éléments de personnalité qui seront primordial chez
           votre futur collaborateur et testez les de manière scientifique et
           objective.
           Vous assurez ainsi un recrutement humain et scientifique, qui met
           au coeur vos valeurs ainsi que le candidat. 
           C'est un recrutement Win-Win !
        </p>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>
<!--
<script>
  export default {
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
</script> -->

<script>
  import Caroussel from './Caroussel.vue';
    export default {
      name: 'Caroussel',
      component: {Caroussel},
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

.w-100{
  width: 30%!important;
}

p{
  font-size: 2rem;
}
</style>
