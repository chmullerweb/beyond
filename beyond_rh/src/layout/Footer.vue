<template>
  <div class="container-fluid footer">
    <h3>BEYOND</h3>
    <div class="container">
      <div class="row">
        <div class="col flex">
          <div class="adresse">
            <h4>Paris</h4>
            <p>XX rue Mason</p>
            <p>75020 Paris</p>
            <p>France</p>
            <p class="phone">06.XX.XX.XX.XX</p>
          </div>
          <div class="legacy">
          <p>Mentions légales</p>
          <p>CGU</p></div>
        </div>
        <div class="col">
        uhuh
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bouton',
  props: {
    titleButton:
    {
      type: String,
      default: "coco",
    },
    btn:
    {
      type: Boolean,
      default: true,
    },
    btnDark:
    {
      type: Boolean,
      default: false,
    },
    btnInfo:
    {
      type: Boolean,
      default: false,
    }

  },

  data() {
    return {

    }
  }
};
</script>

<style lang="css" scoped>

.flex{
  display: flex;
}

.footer
{
  margin: 2rem 0rem;
  background-color: #3C3744;
  color: white; 
  text-align: left;

}

h3{
  padding: 1rem 6rem;
}

.adresse, .legacy{
  line-height: 0.3rem;
}

.adresse h4{
  padding-bottom: 0.5rem;
}

.adresse .phone{
  padding: 1rem 0rem 0.5rem 0rem;
}

.legacy{
  padding: 3rem 0rem 2rem 2rem;
}
</style>