<template>
  <div id="testimonials" class="sm:mt-28 pt-28 sm:pt-36 pb-10 bg-image">
    <div class="max-w-[1160px] mx-auto px-4 xl:px-0">
      <div class="text-white">
        <h1 class="text-5xl font-bold">Testimonials</h1>
        <!-- <p class="text-lg mt-6 max-w-[30rem]">
          Lorem ipsum, dolor sit amet consectetur adipiscing elitLorem ipsum,
          dolor sit amet consect.
        </p> -->
      </div>

      <!-- Mobile layout -->
      <div id="splide-testimonials" class="sm:hidden w-full py-16 relative">
        <Splide :options="options">
          <SplideSlide v-for="(item, i) in testimonials" :key="i">
            <div class="pb-16 h-full">
              <div
                class="w-full px-8 h-full xl:px-20 py-10 bg-white flex justify-start items-center flex-col rounded-md"
              >
                <div class="">
                  <div
                    class="flex justify-center items-center w-full h-[5rem] overflow-hidden"
                  >
                    <img
                      :src="item.image"
                      alt=""
                      class="object-cover object-center h-[5rem]"
                    />
                  </div>
                  <div class="">
                    <h3 class="font-bold text-2xl mt-6">{{ item.name }}</h3>
                    <p class="font-bold text-base text-yellow-primary mt-1">
                      {{ item.designation }}
                    </p>
                    <p class="mt-4 text-sm">{{ item.details }}</p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>

        <!-- Two sides dumpster images -->
        <div
          class="absolute top-full w-[18rem] left-[80%] xl:left-[95%] mt-[-11rem] z-10"
        >
          <img src="/images/dumpsters.png" alt="" class="w-full" />
        </div>

        <div
          class="absolute top-full w-[18rem] right-[80%] xl:right-[95%] mt-[-11rem] z-10"
        >
          <img
            src="/images/dumpsters.png"
            alt=""
            class="w-full transform scale-x-[-1]"
          />
        </div>
      </div>

      <!-- Desktop layout -->
      <div
        class="hidden sm:flex w-full justify-between items-stretch space-x-4 mt-16 relative"
      >
        <div
          v-for="(item, i) in testimonials"
          :key="i"
          class="w-full px-4 xl:px-20 py-10 bg-white flex justify-start items-center flex-col rounded-md"
        >
          <div class="">
            <div
              class="flex justify-center items-center w-full h-[5rem] overflow-hidden"
            >
              <img
                :src="item.image"
                alt=""
                class="object-cover object-center h-[5rem]"
              />
            </div>
            <div class="">
              <h3 class="font-bold text-2xl mt-6">{{ item.name }}</h3>
              <p class="font-bold text-base text-yellow-primary mt-1">
                {{ item.designation }}
              </p>
              <p class="mt-4 text-sm">{{ item.details }}</p>
            </div>
          </div>
        </div>

        <!-- Two sides dumpster images -->
        <div
          class="absolute top-full w-[18rem] left-[90%] xl:left-[95%] mt-[-3rem] z-10"
        >
          <img src="/images/dumpsters.png" alt="" class="w-full" />
        </div>

        <div
          class="absolute top-full w-[18rem] right-[90%] xl:right-[95%] mt-[-3rem] z-10"
        >
          <img
            src="/images/dumpsters.png"
            alt=""
            class="w-full transform scale-x-[-1]"
          />
        </div>
      </div>
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
    const testimonials = [
      {
        name: 'Julio Melendez',
        designation: '',
        image: '/images/testimonials/testimonial-1.png',
        details:
          'From start to finish these guys are setting the bar high in professionalism, punctuality, and great value. I’ve used them multiple times from small to large jobs. They have met my needs in options every time. Won’t use anyone else!',
      },
      {
        name: 'Billy Wells',
        designation: '',
        image: '/images/testimonials/testimonial-2.png',
        details:
          "Excellent service from these guys and the owner who was very responsive to request and follow up. I've had them deliver and pick up loads on the same day as well as on different dates without any issues.",
      },
      {
        name: 'Patrick McGovern',
        designation: '',
        image: '/images/testimonials/testimonial-3.png',
        details:
          "Have used this company several times for dumpster rental. Prices are reasonable, they're friendly and professional. Would recommend.",
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

    return { testimonials, options }
  },
})
</script>

<style scoped>
.bg-image {
  background-image: url('/images/street.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#splide-testimonials >>> .splide__pagination__page {
  background: #fff;
  transform: scale(1.1);
}
#splide-testimonials >>> .splide__pagination__page.is-active {
  background: #ffd361;
  transform: scale(1.1);
}
</style>
