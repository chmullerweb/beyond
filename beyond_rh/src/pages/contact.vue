<template>
    <div id="app" class="">
    <Bouton btn btnDark :displayForm="showForm">Contactez-nous</Bouton>
    <FormContact :closeForm="showForm" v-show="show"/>
    </div>
</template>

<script>

import FormContact from "../components/FormContact";
import Bouton from "../components/Bouton";


export default {
  name: 'Contact',
  components: {FormContact, Bouton},
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