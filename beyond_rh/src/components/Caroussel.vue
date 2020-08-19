<!-- template avec width à modif -->

<template>
  <div class="CarousselPicture caroussel">
    <b-carousel
      class="Caroussel"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ccc"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid wp-100"
            src="../assets/meet.jpg"
            alt="image slot"
            img-width = "30" img-height = "10"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/meeting.jpg"
            alt="image slot"
            img-width = "30" img-height = "10"

          >
        </template>
        <h1>COCO</h1>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/work.jpg"
            alt="image slot"
            img-width = "30" img-height = "10">
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>






<!--
<template>
  <div class="CarousselPicture caroussel">
    <b-carousel
      class="Caroussel"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ccc"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid wp-100"
            src="../assets/meet.jpg"
            alt="image slot"
            img-width = "500" img-height = "200"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid"
            src="../assets/meeting.jpg"
            alt="image slot"
          >
        </template>
        <h1>COCO</h1>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid"
            src="../assets/work.jpg"
            alt="image slot">
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template> -->

<script>
  import Caroussel from './Caroussel.vue';

    export default {
      name: 'Caroussel',
      component: {Caroussel},

    }
</script>

<style lang="css" scoped>

.carousselPicture
{
  width: 200px !important
}
</style>
