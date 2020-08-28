<template>
  <div class="bouton_principal">
    <button
      v-on:click="displayForm()"
      type="button"
      :class="{ btn: btn, 'btn-dark': btnDark, 'btn-info': btnInfo, 'btn-big': btnBig, 'm-top': mTop }"
    >
      <slot></slot>
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
    btnBig: {
      type: Boolean,
      default: false,
    },
    mTop: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.bouton_principal{
  padding: 2rem 0rem;
}

.btn-big{
width: 100%;
height: 4rem;
font-size: 2rem;
}

.m-top{
  margin-top: 2rem;
}

@media screen and (max-width:667px){
  .btn-big{
    font-size: 1rem;
  }
}

@media screen and (max-width:1024px){
  .btn-big{
    font-size: 1.2rem;
  }
}



</style>
