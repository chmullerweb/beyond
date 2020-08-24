<template>

  <div>

    <div :class="{'cardOffreRight': cardOffreRight, 'cardOffre': cardOffre}">


        <div class="col-md-4">
          <img src="" alt="Super photo">
        </div>

        <div class="card-body col-md-8">
          <h5 class="card-title offre"><slot name="title"></slot></h5>
          <p class="card-text offre"><slot name="text"></slot></p>
        </div>

    </div>

  </div>


</template>

<script>


export default {
 name: 'CardOffre',

 // props:['etape'],
 //
 //  id: Number,
 //  title: String,
 //  text: String,
 //  class: Boolean,
 //  photo: String,
   //
   props:{
     cardOffre:{
         type: Boolean,
         default: true,
     },
     cardOffreRight:{
         type: Boolean,
         default: false,
     },
   }
 };


</script>

<style lang="css" scoped>

.cardOffre{
    margin: 1.5rem auto;
    background-color: lightBlue;
}

.offre{
    padding: 2rem 2rem 1.3rem 4rem;
}

.cardOffreRight{
  display: flex;
  flex-direction: row!important;
  background-color: lightSalmon;
  margin: 1.5rem auto;
  padding: 1.5rem auto;
}

</style>
