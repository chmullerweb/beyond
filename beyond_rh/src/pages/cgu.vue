<template>

    <div class="">


    <CardTitle btn-hidden>
     <template v-slot:claimTitle>CONDITIONS GENERALES D'UTILISATION</template>
       <template v-slot:claimTxt>
         <h4>article 1 :</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </template>
     </CardTitle>

     <CardTitle btn-hidden>
        <template v-slot:claimTxt>
          <h2>article 1 :</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </template>
      </CardTitle>
      <CardTitle btn-hidden>
         <template v-slot:claimTxt>
           <h2>article 1 :</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </template>
       </CardTitle>
       <CardTitle btn-hidden>
          <template v-slot:claimTxt>
            <h2>article 1 :</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
        </CardTitle>
        <CardTitle btn-hidden>
           <template v-slot:claimTxt>
             <h2>article 1 :</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </template>
         </CardTitle>
         <CardTitle btn-hidden>
            <template v-slot:claimTxt>
              <h2>article 1 :</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </template>
          </CardTitle>

  </div>

</template>



<script>

import CardTitle from "../components/CardTitle";

export default {
  name: 'Cgu',
  components: {CardTitle},
};
</script>

<style lang="css" scoped>

.cardPictos{
  display: flex;
  flex-direction: row;
  background-color: #454545;
  width: 100%;
  margin: 0!important;
  padding: 0!important;
}
.container-fluid{
  margin: 0!important;
  padding: 0!important;
}

</style>
