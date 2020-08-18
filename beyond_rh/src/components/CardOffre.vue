<template>

  <div>

    <div :class="{'cardOffre': cardOffre, 'cardOffreRight': cardOffreRight}">

        <div class="col-md-4">
          <img src="" class="card-img" alt="">
        </div>

        <div class="card-body col-md-8">
          <h5 class="card-title">Card title</h5>
          <p class="card-text claim">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>

    </div>

  </div>


</template>

<script>


export default {
 name: 'CardOffre',

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

.claim{
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
