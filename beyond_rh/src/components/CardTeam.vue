<template>

  <div>

    <div :class="{'cardTeam': cardTeam, 'cardTeamRight': cardTeamRight}">

        <div class="col-md-4">
          <!-- <img src="" class="card-img" alt=""> -->
          <div class="round">
            <p class="number">1</p>
          </div>
        </div>

        <div class="card-body col-md-6">
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
    padding: 2rem 1rem 2.5rem 1rem;
    background-color: #D6D5C9;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: row!important;
    margin: 0!important;

}

.cardTeamRight{
  /* padding: 2rem 3rem 2.5rem 1rem; */
  display: flex;
  flex-direction: row-reverse!important;
  /* flex-wrap: wrap; */
  background-color: #A37871;
  /* padding: 1.5rem auto; */
}

.number{
  font-family: 'Alata';
  font-size: 3rem;
}

.round{
  border: 0.3rem solid grey;
  border-radius: 75px;;
  /* padding: 0.2rem; */
  width: 8rem;
  height: 8rem;
  margin: 0!important;
}


.col-md-4{
  margin: 0rem !important;
  padding: 0px !important;
}

.team{
  font-family: 'Alata';
}

.card-title.team{
  /* padding: 1rem; */
}

.card-text.team{
  /* padding: 1rem; */
}

</style>
