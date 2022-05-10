<template>
  <HeroArea></HeroArea>
  <HowWeWork></HowWeWork>
  <OurDumpsters></OurDumpsters>
  <Testimonials></Testimonials>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeroArea from '@/components/charlotte/HeroArea.vue'
import HowWeWork from '@/components/charlotte/HowWeWork.vue'
import OurDumpsters from '@/components/charlotte/OurDumpsters.vue'
import Testimonials from '@/components/charlotte/Testimonials.vue'

export default defineComponent({
  components: { HeroArea, HowWeWork, OurDumpsters, Testimonials },

  setup() {
    return {}
  },
})
</script>
