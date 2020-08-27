<template>
  <div>
    <CardTitle>
        <template v-slot:claimTitle>CGU</template>
        <template v-slot:claimTxt>Blablabla</template>
    </CardTitle>
  </div>
</template>

<script>

import CardTitle from '../CardTitle.vue';

export default {
  name: 'CGU',
  components: {CardTitle},
};
</script>

<style>

.cardTitle{
    margin: 1.5rem auto;
    background-color: #C6D8D3;
}

.claim{
    padding: 2rem 0rem 1.3rem 0rem;
}

.btn-hidden{
  display: none;
}

</style>
