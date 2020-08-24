<template>
  
  <!-- <div> -->
    <!-- <ul class="nav justify-content-end"> -->
      <!-- <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li> -->
      <!-- <li class="nav-item"> -->
        <!-- <a class="nav-link" href="#">Concept</a> -->
      <!-- </li> -->
      <!-- <li class="nav-item"> -->
        <!-- <a class="nav-link" href="#">Qui sommes-nous ?</a> -->
      <!-- </li> -->
      <!-- <li class="nav-item"> -->
        <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Nous contacter</a> -->
      <!-- </li> -->
    <!-- </ul> -->
  <!-- </div> -->

  <div>
    <ul class="nav justify-content-end">

      <li class="nav-item">
        <router-link to="/Landing" class="nav-link active">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/Concept" class="nav-link active">Concept</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/Offre" class="nav-link active">Qui sommes-nous ?</router-link>
      </li>

      <li class="nav-item">
        <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Nous contacter</a> -->
        <router-link to="/ContactPage" class="nav-link active">Nous contacter</router-link>
      </li>

    </ul>
  </div>

</template>

<script>
export default {
  name: 'HeaderNavbar',

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
  font-family: Helvetica;
}

a{
  color: white;
}

</style>
