<template>
  <CBox class="caja-contenido">
    <!-- <nuxt-content :document="page" /> -->
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
     getNotionRoute("introduccionTelecinco").id
    );
    return { blockMap };
  },
};
</script>

<style></style>
