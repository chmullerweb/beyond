<template>
  <div class="cardPictos">
    <div class="card text-white">
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
  border: 0px!important;
}

i {
  font-size: 7rem;
  margin: 1.5rem;
}

</style>
