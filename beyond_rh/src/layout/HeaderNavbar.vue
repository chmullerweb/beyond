<template>
  <div>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Concept</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Qui sommes-nous ?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Nous contacter</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  }
};
</script>

<style lang="css" scoped>

.nav{
  background-color: #3C3744;
  height: 5rem;
}

.nav-link{
  padding: 1.5rem 2.5rem;
}

a{
  color: white;
}





</style>
