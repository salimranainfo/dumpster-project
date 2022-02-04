<template>
  <div
    class="max-w-[1160px] mx-auto pt-28 pb-10 flex justify-between items-center"
  >
    <div class="w-7/12">
      <h1 class="text-6xl leading-[4.5rem] font-semibold">
        Need a dumpster? Here we are.
      </h1>

      <p class="mt-6 w-3/4 text-xl">
        Lorem ipsum, dolor sit amet consectetur adipiscing elitLorem ipsum,
        dolor sit amet consect.
      </p>

      <div class="flex justify-start items-center mt-16 space-x-6">
        <button class="btn-yellow-bg flex justify-center items-center">
          <span>
            <DumpsterSvg class=""></DumpsterSvg>
          </span>
          <span>ORDER DUMPSTER</span>
        </button>

        <button
          class="group btn-yellow-border flex justify-center items-center"
        >
          <span
            class="group-hover:text-black transition-all duration-150 ease-in-out text-yellow-primary"
          >
            <TruckSvg class="fill-current"></TruckSvg>
          </span>
          <span> ORDER DEBRIS TRUCK </span>
        </button>
      </div>
    </div>

    <div class="w-5/12">
      <img
        src="/images/truck.png"
        alt="Dumpster Truck"
        class="transform scale-150 translate-x-[10rem]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DumpsterSvg from '../../assets/svgs/dumpster.svg'
import TruckSvg from '@/assets/svgs/truck.svg'

export default defineComponent({
  components: { DumpsterSvg, TruckSvg },

  setup() {
    return {}
  },
})
</script>
