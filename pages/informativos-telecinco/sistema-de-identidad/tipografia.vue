<!-- <template>
  <CBox class="caja-contenido">
    <NotionRenderer :blockMap="blockMap" />
  </CBox>
</template>

<script>
import { NotionRenderer, getPageBlocks } from "vue-notion";
import { getNotionRoute } from "/lib/index.js";

export default {
  components: { NotionRenderer },
  layout: "telecinco",
  async asyncData() {
    const blockMap = await getPageBlocks(
     getNotionRoute("tipografiaTelecinco").id
    );
    return { blockMap };
  },
};
</script>

<style></style> -->



<template>
  <CBox class="caja-contenido">
    <nuxt-content :document='page'/>
  </CBox>
</template>

<script>
export default {
  layout: "telecinco",
  async asyncData({ $content }) {
    const page = await $content("informativos-telecinco/sistema-de-identidad/tipografia").fetch();
    return { page };
  },
};
</script>

<style></style>

