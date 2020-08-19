<template>

  <div class="cardPictos container-fluid">

    <div class="card text-white">
        <img src="" class="card-img" alt="">
      <div class="card-img-overlay">
        <i class="fas fa-microscope"></i>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

    <div class="card text-white">
        <img src="" class="card-img" alt="">
      <div class="card-img-overlay">
        <i class="fas fa-trophy"></i>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

    <div class="card text-white">
        <img src="" class="card-img" alt="">
      <div class="card-img-overlay">
        <i class="far fa-clock"></i>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'CardPictos',
}
</script>

<style lang="css" scoped>

.card{
  width: 25rem;
  height: 20rem;
  background-color: #454545;
  display: inline-grid;
  border-radius: 0!important;
}

i{
  font-size: 7rem;
  margin: 1.5rem;
}
/* .cardPictos{
  width: 100%;
} */
</style>
