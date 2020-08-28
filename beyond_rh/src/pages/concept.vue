<template>
  <div class="">

    <CardTitle btnText="C'est quoi l'approche Beyond ?">
    <template v-slot:claimTitle>Lorem ipsum</template>
    <template v-slot:claimTxt>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
    </CardTitle>
    <Carousseletapes/>
  </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import Carousseletapes from "../components/Carousseletapes";

export default {
  name: 'Concept',
  components: {Carousseletapes, CardTitle},
  data() {
    return {
    }
  }
};
</script>

<style>

@media screen and (max-width: 768px) {
.min-text{
  font-size: 1rem;
  font-weight: bolder;
}
}

</style>

