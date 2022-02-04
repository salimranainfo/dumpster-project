<template>
  <div
    id="how-we-work"
    class="max-w-[1160px] sm:mt-20 mx-auto pt-36 sm:pb-10 px-4 xl:px-0"
  >
    <div>
      <h2 class="text-5xl font-semibold">How we work</h2>
      <p class="mt-6 text-lg max-w-[30rem]">
        Lorem ipsum, dolor sit amet consectetur adipiscing elitLorem ipsum,
        dolor sit amet consect.
      </p>
    </div>

    <div
      class="flex flex-wrap xl:flex-nowrap px-12 justify-center xl:justify-between items-stretch mt-16 sm:space-x-6 space-y-6 xl:space-y-0 xl:space-x-4"
    >
      <div
        v-for="(item, i) in steps"
        :key="i"
        class="w-full sm:w-1/3 xl:w-full flex justify-center items-center flex-col rounded-md shadow-custom-large py-10"
      >
        <div class="flex justify-center items-center">
          <img :src="item.icon" alt="" class="max-h-[6rem]" />
        </div>
        <div class="px-16 xl:px-28">
          <h3 class="font-bold text-3xl mt-6">{{ item.title }}</h3>
          <p class="mt-4 text-sm">{{ item.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const steps = [
      {
        title: 'Choose',
        details: 'Lorem ipsum sit amet dolor, consectur.',
        icon: '/images/steps/1.svg',
      },
      {
        title: 'Booking',
        details: 'Lorem ipsum sit amet dolor, consectur.',
        icon: '/images/steps/2.svg',
      },
      {
        title: 'We go',
        details: 'Lorem ipsum sit amet dolor, consectur.',
        icon: '/images/steps/3.svg',
      },
    ]

    return { steps }
  },
})
</script>
