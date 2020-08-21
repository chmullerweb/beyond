<template>
<div class="modal_fixed container-fluid">
<form 
class="formContact container"
id="formContactPopup"
action="../../public/formContact.php"
method="post"
novalidate="true">
  <h2 class="contactUs">Contactez-nous !<i class="fas fa-times-circle i_cross bounceIn" v-on:click="closeForm()"></i></h2>
  <div class="form-row justify-content-md-center">
    <div class="form-group col-md-4">
      <label for="inputStatus">Vous êtes :</label>
      <select 
      id="inputStatus"
      class="form-control"
      v-model="inputStatus"
      name="inputStatus">
        <option>Choisir...</option>
        <option>Directeur Général</option>
        <option>Directeur Commercial</option>
        <option>DRH</option>
        <option>RRH</option>
        <option>Responsable Formation</option>
        <option>Autre</option>
      </select>
    </div>
    <div class="form-group col-md-4" v-if="inputStatus == 'Autre'">
      <label for="inputJobDetails">Précisez :</label>
      <input
      type="text"
      class="form-control"
      id="inputJobDetails"
      placeholder="Mon poste est...">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Nom</label>
      <input
      type="text"
      v-model="inputName"
      name="inputName"
      class="form-control"
      id="inputName">
    </div>
    <div class="form-group col-md-6">
      <label for="inputFirstname">Prénom</label>
      <input
      type="text"
      name="inputFirstname"
      class="form-control"
      id="inputFirstname">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPhone">Téléphone</label>
      <input
      type="text"
      name="innputPhone"
      class="form-control"
      id="inputPhone">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail">Email</label>
      <input
      type="text"
      name="inputEmail"
      class="form-control"
      id="inputEmail">
    </div>
  </div>
  <div class="form-group">
    <label for="textareaMsg">Dîtes-nous tout : </label>
    <textarea
    class="form-control"
    name="textareaMsg"
    id="textareaMsg"
    rows="3">
    </textarea>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        J'accepte que ces informations soient traitées dans le cadre de ma demande.
      </label>
    </div>
  </div>
  <button @submit="checkForm()" type="submit" class="btn btn-info btn-submit">Envoyer</button>
</form>
</div>
</template>

<script>
export default {
  name: 'FormContact',
  data () {
    return {
      errors: [],
      inputStatus: 'Choisir...',
      inputJobDetails: null,
      inputName: null,
      inputFirstname: null,
      inputPhone: null,
      inputEmail: null
            };
  },
  methods:{
      checkForm(e){
        this.errors = [];

        if (!this.inputName) {
          this.errors.push("Name required");
        }
        if (!this.email) {
        this.errors.push('Email required.');
      }

      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  props: {
    closeForm: {
      type: Function,
    }
  },
}
</script>

<style lang="css" scoped>

.i_cross{
  float: right;
  font-size: 1.4rem;
  margin-top: -2rem;
  margin-right: -2rem;
}

.i_cross:hover{
  cursor: pointer;
}

.modal_fixed{
	position: 					fixed;
	top: 								7rem;
	z-index: 						900;
	justify-content: 		center;
}


.formContact{
  border: 3px #3F88C5 solid;
  border-radius: 20px;
  padding: 3rem;
  background-color: #f0efeb;
  box-shadow: 0 0 10px 0 #323031;
}

.contactUs{
  padding-bottom: 1.5rem;
}

.btn-submit, .form-check {
  margin-top: 1.5rem;
}

.form-check label{
  padding-left: 0.8rem;
}

.bounceIn:hover {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  20% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
  -webkit-transform: scale3d(.9, .9, .9);
  transform: scale3d(.9, .9, .9);
  }
  60% {
  opacity: 1;
  -webkit-transform: scale3d(1.03, 1.03, 1.03);
  transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
  -webkit-transform: scale3d(.97, .97, .97);
  transform: scale3d(.97, .97, .97);
  }
  100% {
  opacity: 1;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  }
  @keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  20% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
  -webkit-transform: scale3d(.9, .9, .9);
  transform: scale3d(.9, .9, .9);
  }
  60% {
  opacity: 1;
  -webkit-transform: scale3d(1.03, 1.03, 1.03);
  transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
  -webkit-transform: scale3d(.97, .97, .97);
  transform: scale3d(.97, .97, .97);
  }
  100% {
  opacity: 1;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  } 

@media screen and (max-width:768px){
  .modal_fixed{
	position: 					absolute;
	top: 							  10rem;
	z-index: 						900;
	justify-content: 		center;
}

}

</style>

