<template>
  <div :class="{ cardTeam: cardTeam, cardTeamRight: cardTeamRight }">
    <div class="row no-gutters">
      <div class="col-md-4">
        <slot name="img"> </slot>
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
  name: "CardTeam",
  props: {
    cardTeam: {
      type: Boolean,
      default: true,
    },
    cardTeamRight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="css" scoped>
.cardTeam {
  /* padding: 2rem 1rem 2rem 1rem; */
  display: flex;
  flex-direction: row !important;
  margin: 3rem !important;
  box-shadow: 3px 2px 5px grey !important;
  border-radius: 12px;
  background-color: #e2e2e2;
  opacity: 0.8;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 2rem;
  margin: 1rem;
}

.cardTeamRight {
  display: flex;
  flex-direction: row-reverse !important;
  justify-content: space-between;
  box-shadow: 3px 2px 5px grey !important;
  border-radius: 12px;
}

.number {
  font-family: "Alata";
  font-size: 3rem;
}

.round {
  border: 0.3rem solid grey;
  border-radius: 75px;
  padding: 1.2rem;
  width: 8rem;
  height: 8rem;
  margin: 1rem !important;
}

.col-md-4 {
}

.team {
  font-family: "Alata";
}

img {
  border-radius: 12px;
  box-shadow: 3px 2px 5px white !important;
}

@media screen and (max-width: 667px) {
  .row.no-gutters {
  }
  img {
    width: 200px;
    height: 125px;
  }
  .cardTeam,
  .cardTeamRight {
    display: flex;
    flex-direction: column !important;
    align-items: center;
    padding-top: 1rem;
  }
}

@media screen and (max-width: 1024px) {
  .cardTeam,
  .cardTeamRight {
    display: flex;
    flex-direction: column !important;
    align-items: center;
    padding-top: 1rem;
  }
}
</style>
