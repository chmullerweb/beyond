<template>
  <div>
    <FormContact :closeForm="showForm" v-show="show" />
    <div class="container-fluid footer">
      <h3>BEYOND</h3>
      <hr>
      <div class="container">
        <div class="row">
            <div class="adresse">
              <p>XX rue Mason</p>
              <p>75020 Paris, France</p>
              <p class="phone">06.XX.XX.XX.XX</p>
            </div>
          <div class="col italic">
            <p>Une question ? Envie d'en savoir plus sur notre offre ?</p>
            <p>Ecrivez-nous !</p>
            <Bouton btn btnInfo :displayForm="showForm">Nous contacter</Bouton>
          </div>
          <div class="legacy">
            <router-link to="/mentions">
              <p>Mentions légales</p>
            </router-link>
            <router-link to="/cgu">
              <p>CGU</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid social">
      <div class="row">
        <div class="col copyright">
          <p>Copyright ©Sochapa Descodeuses - 2020</p>
        </div>
        <div class="col pictosSocial">
          <span class="followUs">Suivez-nous</span>
          <span class="picto"
            ><a href="https://www.facebook.com/descodeuses"
              ><i class="fab fa-facebook fa-1x mx-3"></i></a
          ></span>
          <span class="picto"
            ><a href="https://www.instagram.com/descodeuses/?hl=fr"
              ><i class="fab fa-instagram fa-1x mx-3"></i></a
          ></span>
          <span class="picto"
            ><a
              href="https://www.linkedin.com/school/descodeuses/?originalSubdomain=fr"
              ><i class="fab fa-linkedin fa-1x mx-3"></i></a
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bouton from "../components/Bouton";
import FormContact from "../components/FormContact";

export default {
  name: "Footer",
  components: { Bouton, FormContact },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showForm() {
      this.scrollToTop();
      return (this.show = !this.show);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="css" scoped>

.row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.bouton_principal{
    padding: 0rem;
}

.footer {
  margin: 0rem 0rem 0 0;
  background-color: #5d737e;
  opacity: 0.9;
  color: white;
}

h3 {
  padding-top: 1rem;
  text-align: center;
}

.adresse,
.legacy {
  line-height: 0.2rem;
}

.adresse{
  padding-top: 1.5rem;
}

.adresse .phone {
  padding: 1rem 0rem 0.5rem 0rem;
}

.legacy {
  padding: 0.9rem 0rem 2rem 2rem;
  line-height: 1.5;
}

/* bandeau copyright & réseaux sociaux :  */

.social {
  background-color: #5d737e;
  color: white;
}

.copyright {
  text-align: left;
  padding: 0.5rem 0 0.5rem 3rem;
}

.copyright p {
  margin-bottom: 0;
}

.pictosSocial {
  text-align: right;
  padding: 0.5rem 3rem 0.5rem 0;
}

.pictosSocial .followUs,
.pictosSocial .picto {
  padding-right: 2rem;
  color: #white;
}

.pictosSocial span a {
  color: #363636 !important;
  font-size: 1.5rem;
}

.legacy a {
  color: white;
  text-decoration: none;
}

.italic {
  font-style: italic;
}

@media screen and (max-width: 768px) {

  .row{
    display: flex;
    flex-direction: column;
  }

  .legacy {
    padding: 0 0 0 0;
  }

  .copyright p {
    padding-top: 0.3rem;
  }

  .copyright,
  .pictosSocial {
    font-size: 0.8rem;
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
    align-self: center;
  }

  .pictosSocial .followUs,
  .pictosSocial .picto {
    padding-right: 0;
  }

  .pictosSocial .picto i {
    font-size: 1.25rem;
  }
}
</style>
