<template>
    <div class="">

    <CardTitle/>
    <CardHome/>
    <CardPictos/>
    <CardConcept/>
    <FormContact/>
    <Footer/>
    </div>
</template>

<script>
import CardTitle from "../components/CardTitle";
import CardConcept from "../components/CardConcept";
import CardPictos from "../components/CardPictos";
import CardHome from "../components/CardHome";
import Footer from "../layout/Footer";
import FormContact from "../components/FormContact";



export default {
  name: 'Landing',
  components: {CardTitle, CardConcept, CardPictos, CardHome, Footer,
  FormContact
  },
}
</script>
