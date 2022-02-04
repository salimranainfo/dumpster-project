<template>
  <div id="our-dumpsters" class="mt-20 pt-36 pb-10 max-w-[1160px] mx-auto">
    <div>
      <h1 class="text-5xl font-bold">Our Dumpsters</h1>
      <p class="text-lg mt-6 max-w-[30rem]">
        Lorem ipsum, dolor sit amet consectetur adipiscing elitLorem ipsum,
        dolor sit amet consect.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-x-6 gap-y-[7rem] mt-16">
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
              <button class="btn-yellow-border w-full mt-4">HIRE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const dumpsters = [
      {
        title: 'Dumpster 23',
        details: 'Lorem ipsum sit amet dolor, consectur.',
        image: '/images/dumpsters.png',
      },
      {
        title: 'Dumpster 24',
        details: 'Lorem ipsum sit amet dolor, consectur.',
        image: '/images/dumpsters.png',
      },
      {
        title: 'Dumpster 25',
        details: 'Lorem ipsum sit amet dolor, consectur.',
        image: '/images/dumpsters.png',
      },
      {
        title: 'Dumpster 26',
        details: 'Lorem ipsum sit amet dolor, consectur.',
        image: '/images/dumpsters.png',
      },
    ]

    return { dumpsters }
  },
})
</script>
