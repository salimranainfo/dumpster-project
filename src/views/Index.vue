<template>
  <HeroArea></HeroArea>
  <HowWeWork></HowWeWork>
  <OurDumpsters></OurDumpsters>
  <Testimonials></Testimonials>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeroArea from '@/components/homepage/HeroArea.vue'
import HowWeWork from '@/components/homepage/HowWeWork.vue'
import OurDumpsters from '@/components/homepage/OurDumpsters.vue'
import Testimonials from '@/components/homepage/Testimonials.vue'

export default defineComponent({
  components: { HeroArea, HowWeWork, OurDumpsters, Testimonials },

  setup() {
    return {}
  },
})
</script>
