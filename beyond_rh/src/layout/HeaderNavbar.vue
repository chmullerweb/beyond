<template>
  <div>
      <FormContact :closeForm="showForm" v-show="show"/>
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
      <li class="nav-item nav-link active contact" v-on:click="showForm">
      Nous contacter
      </li>
    </ul>
  </div>
</template>

<script>
import FormContact from "../components/FormContact";

export default {
  name: 'HeaderNavbar',
  components: {FormContact},
  data() {
    return {
      show: false
    }
  },
  methods: {
  showForm() {
      return this.show = !this.show;
  }
  }
};
</script>

<style lang="css" scoped>

.nav{
  background-color: #5D737E;
  opacity: 0.9;
  height: 5rem;
}

.nav-link{
  padding: 1.5rem 2.5rem;
  font-family: Helvetica;
}

a{
  color: white;
}

.contact:hover{
  cursor: pointer;
  color: white;
}

</style>
