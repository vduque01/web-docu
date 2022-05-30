<template>
  <CFlex w="1040px">
    <CBox class="group_logo_holder" minW="264px" borderRight="0.8px solid black" py="6" px="4">
      <div class="group_logo">G2A</div>
    </CBox>
    <CBox class="global_nav" p="6">
      <nuxt-link id="nav_telecinco" :to="'/informativos-telecinco/'"
        >Informativos Telecinco</nuxt-link
      >
      <nuxt-link id="nav_onda_cero" :to="'/onda-cero-podcast/'">Onda Cero Podcast</nuxt-link>
    </CBox>
  </CFlex>
</template>

<script>
export default {};
</script>
<style></style>
