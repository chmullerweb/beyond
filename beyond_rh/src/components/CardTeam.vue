<template>

  <div>

    <div :class="{'cardTeam': cardTeam, 'cardTeamRight': cardTeamRight}">

        <div class="col-md-4">
          <img src="" class="card-img" alt="">
          <div class="round">
            <p class="number"><slot name="number"></slot></p>
          </div>
        </div>

        <div class="card-body col-md-8">
          <h5 class="card-title team"><slot name="title"></slot></h5>
          <p class="card-text team"><slot name="text"></slot></p>
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
    padding: 2rem 1rem 2rem 1rem;
    background-color: #D6D5C9;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row!important;
    margin: 0!important;

}

.cardTeamRight{
  /* padding: 2rem 3rem 2.5rem 1rem; */
  display: flex;
  flex-direction: row-reverse!important;
  justify-content: space-between;
  /* flex-wrap: nowrap; */
  background-color: #A37871;
  /* padding: 1.5rem auto; */
}

.number{
  font-family: 'Alata';
  font-size: 3rem;
}

.round{
  border: 0.3rem solid grey;
  border-radius: 75px;
  padding: 1.2rem;
  width: 8rem;
  height: 8rem;
  margin: 1rem!important;
}


.col-md-4{
  padding: 75px 125px 0px 125px;
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
