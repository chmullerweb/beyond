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

      <b-carousel-slide :img-src="img1">
        <h2><slot name="title1"></slot></h2>
      </b-carousel-slide>

      <b-carousel-slide :img-src="img2">
        <h2><slot name="title2"></slot></h2>

      </b-carousel-slide>

      <b-carousel-slide :img-src="img3">
        <h2><slot name="title3"></slot></h2>

      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
  import Caroussel from './Caroussel.vue';
    export default {
      name: 'Caroussel',
      component: {Caroussel},
      props:{
        img1:{
          type: String,
          required:true,
        },
        img2:{
          type: String,
          required:true,
        },
        img3:{
          type: String,
          required:true,
        },
      },
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

@media screen and (max-width: 768px) {

h2{
font-size: 1rem!important;
}

.carousel-control-prev-icon{
  width: 1rem;
}

}


</style>
