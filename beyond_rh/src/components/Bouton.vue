<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> master
<template>
  <div class="bouton_principal">
    <button
      v-on:click="displayForm()"
      type="button"
<<<<<<< HEAD
      :class="{ btn: btn, 'btn-dark': btnDark, 'btn-info': btnInfo, 'btn-big': btnBig }"
=======
      :class="{ btn: btn, 'btn-dark': btnDark, 'btn-info': btnInfo, 'big-btn': bigBtn }"
>>>>>>> master
    >
      <slot>Default Text</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Bouton",
  props: {
    displayForm: {
      type: Function,
    },
    btn: {
      type: Boolean,
      default: true,
    },
    btnDark: {
      type: Boolean,
      default: false,
    },
    btnInfo: {
      type: Boolean,
      default: false,
    },
<<<<<<< HEAD
    btnBig: {
      type: Boolean,
      default: false,
    }
=======
    bigBtn: {
      type: Boolean,
      default: false,
    },
>>>>>>> master
  },

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.bouton_principal {
<<<<<<< HEAD
  padding: 2rem 0rem;
}

.btn-big{
=======
  margin: 2rem 0rem;
}

.big-btn{
>>>>>>> master
width: 50%;
height: 4rem;
font-size: 2rem;
}

</style>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> master
