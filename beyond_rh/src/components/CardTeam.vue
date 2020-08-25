<template>

    <div :class="{'cardTeam': cardTeam, 'cardTeamRight': cardTeamRight}">

        <div class="row no-gutters">
          <div class="col-md-4">
            <slot name="img">
            </slot>
            <img src="" class="card-img" alt="">
          </div>
        </div>

        <div class="card-body col-md-8">
          <h5 class="card-title team"><slot name="title"></slot></h5>
          <p class="card-text team"><slot name="text"></slot></p>
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
  display: flex;
  flex-direction: row-reverse!important;
  justify-content: space-between;
  background-color: #A37871;
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
