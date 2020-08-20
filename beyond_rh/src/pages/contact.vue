<template>
    <div id="app" class="">
    <Bouton v-on:showForm="show= !show">Contactez-nous</Bouton>
    <FormContact v-show="show"/>
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
};

</script>