<template>
  <CBox class="navigator">
    <div class="nav-item" v-for="(navItem, i) in menuTelecinco" :key="i">
      <nuxt-link :to="navItem.route">{{ navItem.title }}</nuxt-link>
      <div class="nav-sub-items">
        <div
          class="nav-sub-item"
          v-for="(navSubItem, i2) in menuTelecinco[i].subpages"
          :key="i2"
        >
          <nuxt-link :to="navSubItem.route">{{ navSubItem.title }}</nuxt-link>
        </div>
      </div>
    </div>
  </CBox>
</template>

<script>
import menuTelecinco from "@/content/menuTelecinco";
export default {
  data() {
    return {
      menuTelecinco: menuTelecinco,
    };
  },
};
</script>

<style>

</style>
