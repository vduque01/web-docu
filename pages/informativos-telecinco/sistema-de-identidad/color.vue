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
  layout: "telecinco",
  async asyncData() {
    const blockMap = await getPageBlocks(
     getNotionRoute("colorTelecinco").id
    );
    return { blockMap };
  },
};
</script>

<style></style>
