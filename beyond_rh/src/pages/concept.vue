<template>

    <div class="">

      <Caroussel/>
      <Caroussel/>
      <CardTeam cardTeam/>
      <CardTeam cardTeamRight/>
      <CardTeam cardTeam/>

    </div>

</template>

<script>
import CardTeam from "../components/CardTeam";
import Caroussel from "../components/Caroussel";

export default {
  name: 'Concept',
  components: {CardTeam, Caroussel},
};
</script>
