<template>
  <CBox class="caja-contenido">
    <NotionRenderer :blockMap="blockMap" />
  </CBox>
</template>

<script>
import { NotionRenderer, getPageBlocks } from "vue-notion";
import { getNotionRoute } from "/lib/index.js";

export default {
  components: { NotionRenderer },
  layout: "ondacero",
  async asyncData() {
    const blockMap = await getPageBlocks(
     getNotionRoute("construccionOndaCero").id
    );
    return { blockMap };
  },
};
</script>

<style></style>
