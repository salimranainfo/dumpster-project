<template>
  <div class="w-full overflow-hidden">
    <Header></Header>
    <main class="pt-28">
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: { Header, Footer },

  setup() {
    return {}
  },
})
</script>

<style></style>
