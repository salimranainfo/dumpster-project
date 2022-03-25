<template>
  <div class="shadow-md bg-white w-full fixed top-0 left-0 z-50">
    <div
      class="py-3 flex justify-between items-center max-w-[1160px] mx-auto px-4 xl:px-0"
    >
      <button class="sm:hidden" @click="showMenu = true">
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3337 8C21.3337 7.44771 20.8859 7 20.3337 7H1.66699C1.11471 7 0.666992 7.44771 0.666992 8C0.666992 8.55228 1.11471 9 1.66699 9H20.3337C20.8859 9 21.3337 8.55228 21.3337 8Z"
            fill="#333333"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3337 1.33333C21.3337 0.781048 20.8859 0.333333 20.3337 0.333333H1.66699C1.11471 0.333333 0.666992 0.781048 0.666992 1.33333C0.666992 1.88562 1.11471 2.33333 1.66699 2.33333H20.3337C20.8859 2.33333 21.3337 1.88562 21.3337 1.33333Z"
            fill="#333333"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3337 14.6667C21.3337 14.1144 20.8859 13.6667 20.3337 13.6667H1.66699C1.11471 13.6667 0.666992 14.1144 0.666992 14.6667C0.666992 15.219 1.11471 15.6667 1.66699 15.6667H20.3337C20.8859 15.6667 21.3337 15.219 21.3337 14.6667Z"
            fill="#333333"
          />
        </svg>
      </button>

      <a href="/#">
        <img src="/images/logo.png" alt="Logo" class="w-[80%]" />
      </a>

      <span class="sm:hidden"></span>

      <nav
        class="hidden sm:flex justify-end items-center space-x-6 font-semibold text-sm"
      >
        <a href="#how-we-work">How we work</a>
        <a href="#our-dumpsters">Our dumpsters</a>
        <a href="#testimonials">Testimonials</a>
        <a
          href="https://app.smartsheet.com/b/form/af553c85a1fd4597bdc0f0d17b836c0b"
          target="_blank"
          class="btn-yellow-bg px-8"
          >ORDER NOW</a
        >
        <a
          href="https://app.smartsheet.com/b/form/7883fbf73cb740329cedb224958d5171"
          target="_blank"
          class="btn-yellow-bg px-8"
          >Partner With Us</a
        >
      </nav>

      <!-- Mobile Menu -->
      <transition name="menu">
        <div
          v-if="showMenu"
          class="transform fixed top-0 left-0 w-screen h-screen bg-white flex sm:hidden justify-center items-center"
        >
          <nav
            class="flex flex-col justify-center items-center space-y-8 font-semibold"
          >
            <a href="#how-we-work" @click="showMenu = false">How we work</a>
            <a href="#our-dumpsters" @click="showMenu = false">Our dumpsters</a>
            <a href="#testimonials" @click="showMenu = false">Testimonials</a>
            <a
              href="https://app.smartsheet.com/b/form/af553c85a1fd4597bdc0f0d17b836c0b"
              target="_blank"
              class="btn-yellow-bg px-8"
              >ORDER NOW</a
            >
            <a
              href="https://app.smartsheet.com/b/form/7883fbf73cb740329cedb224958d5171"
              target="_blank"
              class="btn-yellow-bg px-8"
              >Partner With Us</a
            >
          </nav>

          <!-- Close Button -->
          <button class="absolute top-0 left-0 m-4" @click="showMenu = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const showMenu = ref(false)

    return {
      showMenu,
    }
  },
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 1s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
