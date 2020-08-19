<template>

  <div class="cardPictos">

    <div class="card bg-dark text-white">
      <img src="..." class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

    <div class="card bg-dark text-white">
      <img src="..." class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

    <div class="card bg-dark text-white">
      <img src="" class="card-img" alt="">
      <div class="card-img-overlay">
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
.cardPictos{
  display: flex;
  flex-direction: row;
  background-color: gold;
}
</style>
