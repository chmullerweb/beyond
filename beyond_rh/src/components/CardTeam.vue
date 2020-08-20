<template>

  <div>

    <div :class="{'cardTeam': cardTeam, 'cardTeamRight': cardTeamRight}">

        <div class="col-md-4">
          <img src="" class="card-img" alt="">
        </div>

        <div class="card-body col-md-8">
          <h5 class="card-title team">Card title</h5>
          <p class="card-text team">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>

    </div>

  </div>

</template>


<script>

export default {
 name: 'CardTeam',

 props:{
   cardTeam:{
       type: Boolean,
       default: true,
   },
   cardTeamRight:{
       type: Boolean,
       default: false,
   },
 }
};

</script>

<style lang="css" scoped>

.cardTeam{
    margin: 1.5rem auto;
    background-color: lightBlue;
}

.team{
    padding: 2rem 2rem 1.3rem 4rem;
}

.cardTeamRight{
  display: flex;
  flex-direction: row!important;
  background-color: lightSalmon;
  margin: 1.5rem auto;
  padding: 1.5rem auto;
}

</style>
