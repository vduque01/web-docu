<template>
  <CBox class="navigator">
    <div class="nav-item" v-for="(navItem, i) in menuOndaCero" :key="i">
      <nuxt-link :to="navItem.route">{{ navItem.title }}</nuxt-link>
      <div class="nav-sub-items">
        <div
          class="nav-sub-item"
          v-for="(navSubItem, i2) in menuOndaCero[i].subpages"
          :key="i2"
        >
          <nuxt-link :to="navSubItem.route">{{ navSubItem.title }}</nuxt-link>
        </div>
      </div>
    </div>
  </CBox>
</template>

<script>
import menuOndaCero from "@/content/menuOndaCero";
export default {
  data() {
    return {
      menuOndaCero: menuOndaCero,
    };
  },
};
</script>

<style>

</style>
