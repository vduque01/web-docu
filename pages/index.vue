<template>
  <CFlex>
    <CFlex class="container" w="100vw" h="100vh">
      <nuxt-link :to="'/informativos-telecinco/'" id="route_telecinco">
        Informativos Telecinco
      </nuxt-link>
      <nuxt-link :to="'/onda-cero-podcast/'" id="route_onda_cero">
        Onda Cero Podcast
      </nuxt-link>
    </CFlex>
    <CBox> </CBox>
  </CFlex>
</template>

<script>
export default {
  layout: "welcome",
};
</script>

<style lang="scss" scoped>
a {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-filter: grayscale(100%); 
  filter: grayscale(100%);
  transition: all 0.2s ease
}

#route_telecinco {
  background-color: #184c60;
  &:hover {
    -webkit-filter: grayscale(0%); 
    filter: grayscale(0%);
  }
}

#route_onda_cero {
  background-color: #daff01;
  &:hover {
    -webkit-filter: grayscale(0%); 
    filter: grayscale(0%);
  }
}
</style>
