<template>

  <div class="cardPictos container-fluid">

    <div class="card text-white">
      <!-- <div class="">
        <slot name="img">
        </slot>
        <img src="" class="card-img" alt="">
      </div> -->
        <!-- <img src="" class="card-img" alt=""> -->
      <div class="card-img-overlay">
        <i class=""><slot name="icone"></slot></i>
        <h5 class="card-title pictos"><slot name="title"></slot></h5>
        <p class="card-text pictos"><slot name="text"></slot></p>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: 'CardPictos',
  //
  // props: ['picto'],
  //
  // id: Number,
  // image: String,
  // icone: String,
  // title: String,
  // text: String,
  //
  // data(){
  //   return
  // }

};
</script>

<style lang="css" scoped>

.cardPictos{
  display: flex;
  flex-direction: wrap;
}

.card{
  width: 25rem;
  height: 20rem;
  background-color: #454545;
  opacity: 0.8;
  display: inline-grid;
  border-radius: 0!important;
}

i{
  font-size: 7rem;
  margin: 1.5rem;
}
/*
.cardPictos{
  width: 100%;
}  */

</style>
