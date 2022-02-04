<template>
  <div id="testimonials" class="mt-28 pt-36 pb-10 bg-image">
    <div class="max-w-[1160px] mx-auto">
      <div class="text-white">
        <h1 class="text-5xl font-bold">Testimonials</h1>
        <p class="text-lg mt-6 max-w-[30rem]">
          Lorem ipsum, dolor sit amet consectetur adipiscing elitLorem ipsum,
          dolor sit amet consect.
        </p>
      </div>

      <div
        class="flex w-full justify-between items-stretch space-x-4 mt-16 relative"
      >
        <div
          v-for="(item, i) in testimonials"
          :key="i"
          class="w-full px-20 py-10 bg-white flex justify-center items-center flex-col rounded-md"
        >
          <div class="">
            <div
              class="flex justify-center items-center w-full border h-[5rem] overflow-hidden"
            >
              <img
                :src="item.image"
                alt=""
                class="object-cover object-center"
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
        <div class="absolute top-full w-[18rem] left-[95%] mt-[-3rem] z-10">
          <img src="/images/dumpsters.png" alt="" class="w-full" />
        </div>

        <div class="absolute top-full w-[18rem] right-[95%] mt-[-3rem] z-10">
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

export default defineComponent({
  setup() {
    const testimonials = [
      {
        name: 'Rose Perry',
        designation: 'CEO Juliareque',
        image: '/images/testimonials/testimonial-1.png',
        details: 'Lorem ipsum sit amet dolor, consectur. Lorem ipsum sit',
      },
      {
        name: 'Jack Cruise',
        designation: 'CEO Jumping',
        image: '/images/testimonials/testimonial-2.png',
        details: 'Lorem ipsum sit amet dolor, consectur. Lorem ipsum sit',
      },
      {
        name: 'Elon Musk',
        designation: 'CEO Easy',
        image: '/images/testimonials/testimonial-3.png',
        details: 'Lorem ipsum sit amet dolor, consectur. Lorem ipsum sit',
      },
    ]
    return { testimonials }
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
</style>
