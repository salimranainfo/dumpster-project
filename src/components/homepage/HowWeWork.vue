<template>
  <div
    id="how-we-work"
    class="max-w-[1160px] sm:mt-20 mx-auto pt-36 sm:pb-10 px-4 xl:px-0"
  >
    <div>
      <h2 class="text-5xl font-semibold">Instructions</h2>
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
        title: 'Size',
        details: 'Choose the size you need for the job you have!',
        icon: '/images/steps/1.svg',
      },
      {
        title: 'Booking',
        details:
          'Put all the details for your dumpster and order it. Dispatch with contact you as soon as possible.',
        icon: '/images/steps/2.svg',
      },
      {
        title: 'Delivery',
        details:
          "As soon as dispatch recieves the order and it's filled out correctly, we dispatch the size dumpster, time and location you alloted.",
        icon: '/images/steps/3.svg',
      },
    ]

    return { steps }
  },
})
</script>
