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

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=48">
        <h2>Analysez les compétences potentiels </h2>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=18">
        <h2>Facilitez les interactions sociales</h2>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38">
        <h2>Découvrez de manière original les candidats </h2>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

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

/* .img.img-fluid.w-100.d-block{
  width: 50%!important;
} */

#carousel-1.carousel.slide{
  width: 50%!important;
  display: inline-flex;
  vertical-align: middle;
}

p{
  /* font-size: 2rem; */
}
</style>
