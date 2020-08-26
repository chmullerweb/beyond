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
        <h1>TOTO</h1>
        <p>TUTU</p>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=18">
        <h1>TITI</h1>
        <p>TATA</p>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38">
        <h1>TETE</h1>
        <p>TYTY</p>
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

.w-100{
  width: 30%!important;
}

p{
  font-size: 2rem;
}
</style>
