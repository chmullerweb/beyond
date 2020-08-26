<template>
  <div class="">
    <CardTitle/>
    <Carousseletapes/>
  </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import Carousseletapes from "../components/Carousseletapes";


export default {
  name: 'Offre',
  components: {Carousseletapes, CardTitle},
  data() {
    return {
    }
  }
};
</script>

