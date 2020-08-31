<template>
  <div class="">
    <CardTitle btnHidden>
      <template v-slot:claimTitle>Mentions Légales - Beyond</template>
      <template v-slot:claimTxt
        >Conformément aux dispositions des articles 6-III et 19 de la Loi n°
        2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., nous portons à la connaissance des utilisateurs et
        visiteurs du site : www.generer-mentions-legales.com les informations
        suivantes :
      </template>
    </CardTitle>
    <div class="container left margin-tb-4">
      <h2 class="margin-t-2">Identité</h2>
      <div class="thin-space margin-t-2">
        <p>Nom du site web : Beyond</p>
        <p>Adresse : http://nomdusite.domaine</p>
        <p>Propriétaire : Tart Muffin</p>
        <p>Responsable de publication : Cheesecake halvah</p>
    </div>
    <div class="thin-space margin-t-2">
        <p>Conception et réalisation : Carrot Cake</p>
        <p>Hébergement : Cream Cookie</p>
    </div>
      <h2 class="margin-t-2">Personne morale</h2>
      <p>
        ‘Raison sociale’ – ‘Forme juridique’ au capital de XXX XXX euros – RCS
        XXXXXX – ‘Adresse complète’ - ‘Téléphone’ – ‘Email’.
      </p>
      <h2 class="margin-t-2">Conditions d'utilisation</h2>
      <p>
        L’utilisation du présent site implique l’acceptation pleine et entière
        des
        <router-link to="/cgu">Conditions Générales d’Utilisation</router-link>
        décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être
        modifiées ou complétées à tout moment.
      </p>
      <h2 class="margin-t-2">Informations</h2>
      <p>
        Les informations et documents du site sont présentés à titre indicatif,
        ne revêtent pas un caractère exhaustif, et ne peuvent engager la
        responsabilité du propriétaire du site.
      </p>
      <p>
        Le propriétaire du site ne peut être tenu responsable des dommages
        directs et indirects consécutifs à l’accès au site.
      </p>
      <h2 class="margin-t-2">Intéractivité</h2>
      <p>
        Les utilisateurs du site peuvent éventuellement y déposer du contenu,
        apparaissant sur le site dans des espaces dédiés (notamment via les
        commentaires). Le contenu déposé reste sous la responsabilité de leurs
        auteurs, qui en assument pleinement l’entière responsabilité juridique.
      </p>
      <p>
        Le propriétaire du site se réserve le droit de retirer sans préavis et
        sans justification tout contenu déposé par les utilisateurs qui ne
        satisferait pas à la charte déontologique du site ou à la législation en
        vigueur.
      </p>
      <h2 class="margin-t-2">Propriété intellectuelle</h2>
      <p>
        Sauf mention contraire, tous les éléments accessibles sur le site
        (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
        restent la propriété exclusive de leurs auteurs, en ce qui concerne les
        droits de propriété intellectuelle ou les droits d’usage.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication,
        adaptation de tout ou partie des éléments du site, quel que soit le
        moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
        préalable de l’auteur.
      </p>
      <p>
        Toute exploitation non autorisée du site ou de l’un quelconque des
        éléments qu’il contient est considérée comme constitutive d’une
        contrefaçon et peut être poursuivie en justice.
      </p>
      <p>
        Les marques et logos reproduits sur le site sont déposés par les
        sociétés qui en sont propriétaires.
      </p>
      <h2 class="margin-t-2">Liens</h2>
      <h3 class="margin-t-2">Liens sortants</h3>
      <p>
        Le propriétaire du site décline toute responsabilité et n’est pas engagé
        par le référencement via des liens hypertextes, de ressources tierces
        présentes sur le réseau Internet, tant en ce qui concerne leur contenu
        que leur pertinence.
      </p>
      <h3 class="margin-t-2">Liens entrants</h3>
      <p>
        Le propriétaire du site autorise les liens hypertextes vers l’une des
        pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre
        et soient présentés de manière non équivoque afin d’éviter :
      </p>
      <ul>
        <li>
          tout risque de confusion entre le site citant et le propriétaire du
          site
        </li>
        <li>
          ainsi que toute présentation tendancieuse, ou contraire aux lois en
          vigueur.
        </li>
      </ul>
      <p>
        Le propriétaire du site se réserve le droit de demander la suppression
        d’un lien s’il estime que le site source ne respecte pas les règles
        ainsi définies.
      </p>
      <h2 class="margin-t-2">Confidentialité</h2>
      <p>
        Tout utilisateur dispose d’un droit d’accès, de rectification et
        d’opposition aux données personnelles le concernant, en effectuant sa
        demande écrite et signée, accompagnée d’une preuve d’identité.
      </p>
      <p>
        Le site ne recueille pas d’informations personnelles, et n’est pas
        assujetti à déclaration à la CNIL.
      </p>
    </div>
  </div>
</template>

<script>
import CardTitle from "../components/CardTitle";

export default {
  name: "Mentions",
  components: { CardTitle },
  data() {
    return {};
  },
};
</script>

<style>
h2 {
  font-weight: bolder;
}

.left {
  text-align: left;
}

.thin-space {
  line-height: 0.6rem;
}

.margin-t-2 {
  margin-top: 2rem;
}

.margin-tb-4 {
  margin: 4rem 0;
}
</style>
