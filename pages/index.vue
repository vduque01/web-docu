<template>
  <div class="container home">
    <nuxt-content :document='page'/>
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const page  = await $content("home").fetch()
    console.log(page)
    return {page}
  }
}
</script>

<style lang="scss" scoped>

</style>