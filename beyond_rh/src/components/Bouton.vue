<template>
  <div class="bouton_principal">
    <button type="button" :class="{'btn': btn,'btn-dark': btnDark,'btn-info': btnInfo}">
            <slot>Default Text</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Bouton',
  props: {
    titleButton:
    {
      type: String,
      default: "coco",
    },
    btn:
    {
      type: Boolean,
      default: true,
    },
    btnDark:
    {
      type: Boolean,
      default: false,
    },
    btnInfo:
    {
      type: Boolean,
      default: false,
    }

  },

  data() {
    return {

    }
  }
};
</script>

<style lang="css" scoped>

.bouton_principal
{
  margin: 2rem 0rem;
}
</style>
