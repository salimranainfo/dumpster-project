<template>
  <HeroArea></HeroArea>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeroArea from '@/components/homepage/HeroArea.vue'

export default defineComponent({
  components: { HeroArea },

  setup() {
    return {}
  },
})
</script>
