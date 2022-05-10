<template>
  <HeroArea></HeroArea>
  <HowWeWork></HowWeWork>
  <OurDumpsters></OurDumpsters>
  <Testimonials></Testimonials>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeroArea from '@/components/philadelphia/HeroArea.vue'
import HowWeWork from '@/components/philadelphia/HowWeWork.vue'
import OurDumpsters from '@/components/philadelphia/OurDumpsters.vue'
import Testimonials from '@/components/philadelphia/Testimonials.vue'

export default defineComponent({
  components: { HeroArea, HowWeWork, OurDumpsters, Testimonials },

  setup() {
    return {}
  },
})
</script>
