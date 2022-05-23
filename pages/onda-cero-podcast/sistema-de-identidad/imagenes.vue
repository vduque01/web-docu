<template>
  <CBox class="caja-contenido">
    <nuxt-content :document='page'/>
  </CBox>
</template>

<script>
export default {
  layout: "ondacero",
  async asyncData({ $content }) {
    const page = await $content("onda-cero-podcast/sistema-de-identidad/imagenes").fetch();
    return { page };
  },
};
</script>

<style></style>
