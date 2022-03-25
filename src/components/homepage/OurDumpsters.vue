<template>
  <div
    id="our-dumpsters"
    class="sm:mt-20 pt-36 pb-10 max-w-[1160px] mx-auto px-4 xl:px-0"
  >
    <div>
      <h1 class="text-5xl font-bold">Our Dumpsters</h1>
      <p class="text-lg mt-6 max-w-[30rem]">
        Below are a variety of dumpster sizes based upon the most commonly used
        sizes.
      </p>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden sm:grid grid-cols-2 gap-x-6 gap-y-[7rem] mt-16">
      <div v-for="(item, i) in dumpsters" :key="i">
        <div class="flex justify-between items-stretch space-x-4">
          <div
            class="w-full flex justify-center items-center flex-col rounded-md"
          >
            <div class="flex justify-center items-center">
              <img :src="item.image" alt="" class="max-h-[12rem]" />
            </div>
            <div class="max-w-[15rem]">
              <h3 class="font-bold text-3xl mt-6">{{ item.title }}</h3>
              <p class="mt-4 text-sm">{{ item.details }}</p>
              <a
                href="https://app.smartsheet.com/b/form/af553c85a1fd4597bdc0f0d17b836c0b"
                target="_blank"
                class="btn-yellow-border inline-block text-center w-full mt-4"
                >HIRE</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div id="splide-dumpsters" class="sm:hidden">
      <Splide :options="options">
        <SplideSlide v-for="(item, i) in dumpsters" :key="i">
          <div class="py-16">
            <div class="flex justify-between items-stretch space-x-4">
              <div
                class="w-full flex justify-center items-center flex-col rounded-md"
              >
                <div class="flex justify-center items-center">
                  <img :src="item.image" alt="" class="max-h-[12rem]" />
                </div>
                <div class="max-w-[15rem]">
                  <h3 class="font-bold text-3xl mt-6">{{ item.title }}</h3>
                  <p class="mt-4 text-sm">{{ item.details }}</p>
                  <a
                    href="https://app.smartsheet.com/b/form/af553c85a1fd4597bdc0f0d17b836c0b"
                    target="_blank"
                    class="btn-yellow-border w-full mt-4"
                    >HIRE</a
                  >
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const dumpsters = [
      {
        title: '10 Cubic Yards',
        details: '3 pick-up truck loads',
        image: '/images/dumpsters.png',
      },
      {
        title: '15 Cubic Yards',
        details: '4-5 pick-up truck loads',
        image: '/images/dumpsters.png',
      },
      {
        title: '20 Cubic Yards',
        details: '6-7 pick-up truck loads',
        image: '/images/dumpsters.png',
      },
      {
        title: '30 Cubic Yards',
        details: '10-12 pick-up truck loads',
        image: '/images/dumpsters.png',
      },
    ]

    const options = {
      type: 'slide',
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      arrows: false,
      pagination: true,
      focus: 'center',
      trimSpace: true,
      padding: {
        left: '3rem',
        right: '3rem',
      },
    }

    return { dumpsters, options }
  },
})
</script>

<style scoped>
#splide-dumpsters >>> .splide__pagination__page {
  background: #333333;
  transform: scale(1.1);
}
#splide-dumpsters >>> .splide__pagination__page.is-active {
  background: #ffd361;
  transform: scale(1.1);
}
</style>
