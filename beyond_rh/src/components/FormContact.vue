<template>
<div class="modal_fixed container-fluid">
<form class="formContact container">
  <h2 class="contactUs">Contactez-nous !<i class="fas fa-times-circle i_cross exit"></i></h2>
  <div class="form-row justify-content-md-center">
    <div class="form-group col-md-4">
      <label for="inputStatus">Vous êtes :</label>
      <select id="inputStatus" class="form-control">
        <option selected>Choisir...</option>
        <option>Directeur Général</option>
        <option>Directeur Commercial</option>
        <option>DRH</option>
        <option>RRH</option>
        <option>Responsable Formation</option>
        <option>Autre</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputJobDetails">Précisez :</label>
      <input type="text" class="form-control" id="inputJobDetails" placeholder="Mon poste est...">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Nom</label>
      <input type="text" class="form-control" id="inputName">
    </div>
    <div class="form-group col-md-6">
      <label for="inputFirstname">Prénom</label>
      <input type="text" class="form-control" id="inputFirstname">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPhone">Téléphone</label>
      <input type="text" class="form-control" id="inputPhone">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail">Email</label>
      <input type="text" class="form-control" id="inputEmail">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        J'accepte que ces informations soient traitées dans le cadre de ma demande.
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-info btn-submit">Envoyer</button>
</form>
</div>
</template>

<script>
export default {
  name: 'FormContact',
  data () {
    return {
      formValues: {
        name: 'Jenny Taylor',
        email: 'jenny.taylor@example.com'
      }
    }
  }
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
	top: 								15rem;
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

@media screen and (max-width:768px){
  .modal_fixed{
	position: 					fixed;
	top: 								2rem;
	z-index: 						900;
	justify-content: 		center;
}

}

</style>

