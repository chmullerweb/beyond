<template>
  <div class="CarousselPicture caroussel">
    <h2><slot name="title"></slot></h2>
    <b-carousel
      class="Caroussel"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#3C3744"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/meet.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/meeting.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/work.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>





<style lang="css" scoped>

.w-100{
  width: 30%!important;
}
</style>
