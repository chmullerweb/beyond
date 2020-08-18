<template>
    <div class="cardConcept container-fluid">
        <div class="row justify-content-md-center">
            <div class="col img">
            <img src="../assets/conceptBeyond.jpg"/>
            </div>
            <div class="col cardTitle">
            <CardTitle/>
            </div>
        </div>
    </div>
</template>

<script>
import CardTitle from './CardTitle.vue';

export default {
  name: 'CardConcept',
  components: {CardTitle},

};
</script>

<style>




</style>