<template>
  <div>
    <FormContact :closeForm="showForm" v-show="show" />
    <img src="@/assets/logoBeyond.png" class="logo">
        <ul class="nav justify-content-end">
          
          <li class="nav-item">
            <router-link to="/Landing" class="nav-link active"
              >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Concept" class="nav-link active">Qui sommes-nous ?</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Offre" class="nav-link active">Concept</router-link>
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
  name: "HeaderNavbar",
  components: { FormContact },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showForm() {
      return (this.show = !this.show);
    },
  },
};
</script>

<style lang="css" scoped>

.logo{
  position: absolute;
    left: 0;
    width: 6rem;
}

.nav {
  background-color: #5d737e;
  opacity: 0.9;
  height: 5rem;
}

.nav-link {
  padding: 1.5rem 2.5rem;
  font-family: Helvetica;
}

a {
  color: white;
}

a:hover{
  color: #C6D8D3;
}

.contact:hover {
  cursor: pointer;
  color: white;
}

@media screen and (max-width: 768px) {
  .nav-link {
    padding: 1.5rem 1rem;
    font-size: 0.9rem;
  }

  .nav {
    height: 4rem;
  }

  .logo{
    width: 4rem;
    top: 0.5rem;
  }



}
</style>
