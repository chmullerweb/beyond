<template>
  <div class="bouton_principal">
    <button
      v-on:click="displayForm()"
      type="button"
      :class="{ btn: btn, 'btn-dark': btnDark, 'btn-info': btnInfo, 'big-btn': bigBtn }"
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
    bigBtn: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.bouton_principal {
  margin: 2rem 0rem;
}

.big-btn{
width: 50%;
height: 4rem;
font-size: 2rem;
}

</style>
