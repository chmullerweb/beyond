<template>

    <div class="">

      <Caroussel/>
      <Caroussel/>

      <CardTeam cardTeam>

       <template v-slot:number>1</template>
       <template v-slot:title>Mon titre</template>
       <template v-slot:text>Mon texte</template>

     </CardTeam>

     <CardTeam cardTeamRight>

      <template v-slot:number>2</template>
      <template v-slot:title>Mon bobo</template>
      <template v-slot:text>Mon byby</template>

     </CardTeam>

    <CardTeam cardTeam>

     <template v-slot:number>3</template>
     <template v-slot:title>Mon baba</template>
     <template v-slot:text>Mon bubu</template>

   </CardTeam>


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
