<template>
  <div
    class="max-w-[1160px] mx-auto pt-12 sm:pt-28 sm:pb-10 sm:flex justify-between items-center px-4 xl:px-0"
  >
    <div class="sm:w-7/12">
      <h1
        class="text-6xl sm:text-5xl xl:text-6xl leading-[4.5rem] font-semibold"
      >
        Need a Dumpster? 918-378-7868.
      </h1>

      <p class="mt-6 sm:w-3/4 text-xl">
        Easy booking, simple order and quick delivery. On time, every time.
      </p>

      <div class="w-full sm:hidden pt-10">
        <img
          src="/images/truck.png"
          alt="Dumpster Truck"
          class="transform translate-x-[4rem]"
        />
      </div>

      <div
        class="flex flex-col xl:flex-row justify-start w-2/3 xl:w-full xl:items-center mt-16 space-y-6 xl:space-y-0 xl:space-x-6"
      >
        <a
          href="https://app.smartsheet.com/b/form/af553c85a1fd4597bdc0f0d17b836c0b"
          target="_blank"
          class="btn-yellow-bg flex justify-center items-center"
        >
          <span>
            <DumpsterSvg class=""></DumpsterSvg>
          </span>
          <span>ORDER DUMPSTER</span>
        </a>

        <!-- <button
          class="group btn-yellow-border flex justify-center items-center"
        >
          <span
            class="group-hover:text-black transition-all duration-150 ease-in-out text-yellow-primary"
          >
            <TruckSvg class="fill-current"></TruckSvg>
          </span>
          <span> ORDER DEBRIS TRUCK </span>
        </button> -->
      </div>
    </div>

    <div class="w-5/12 hidden sm:block">
      <img
        src="/images/truck.png"
        alt="Dumpster Truck"
        class="transform scale-150 xl:translate-x-[10rem]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DumpsterSvg from '../../assets/svgs/dumpster.svg'
// import TruckSvg from '@/assets/svgs/truck.svg'

export default defineComponent({
  components: { DumpsterSvg },

  setup() {
    return {}
  },
})
</script>
