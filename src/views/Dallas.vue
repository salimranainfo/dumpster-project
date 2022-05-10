<template>
  <HeroArea></HeroArea>
  <HowWeWork></HowWeWork>
  <OurDumpsters></OurDumpsters>
  <Testimonials></Testimonials>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeroArea from '@/components/dallas/HeroArea.vue'
import HowWeWork from '@/components/dallas/HowWeWork.vue'
import OurDumpsters from '@/components/dallas/OurDumpsters.vue'
import Testimonials from '@/components/dallas/Testimonials.vue'

export default defineComponent({
  components: { HeroArea, HowWeWork, OurDumpsters, Testimonials },

  setup() {
    return {}
  },
})
</script>
