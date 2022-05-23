<template>
  <CBox class="caja-contenido">
    <nuxt-content :document='page'/>
  </CBox>
</template>

<script>
export default {
  layout: "telecinco",
  async asyncData({ $content }) {
    const page = await $content("informativos-telecinco/sistema-de-identidad/elementos-graficos").fetch();
    return { page };
  },
};
</script>

<style></style>
