<!--
HeroSection.vue
Simple hero section composed of:
- Left column: headline, description, CTAs and rating
- Right column: video background with overlay and a search form component
Built with Tailwind utility classes and a <SearchSection/> child component.
-->

<template>
  <div
    class="min-h-screen flex flex-col lg:flex-row items-center gap-8 mb-12 lg:mb-20"
  >
    <!-- Background image -->
    <img
      src="/Vector.png"
      alt="Decorative background"
      class="absolute top-0 left-0 opacity-100 pointer-events-none select-none"
    />

    <!-- Left / Top Side Hero Content -->
    <div
      class="lg:min-h-screen justify-center lg:w-[45%] pt-[15vh] lg:pt-0 px-5 sm:px-10 lg:pl-40 flex flex-col gap-8 lg:gap-12"
    >
      <div class="flex flex-col gap-4 lg:gap-6">
        <h1
          class="text-4xl md:text-6xl font-semibold text-primary-900 leading-tight lg:leading-[80px]"
        >
          Stop met zoeken, start met
          <span class="text-accent-500 leading-normal lg:leading-[80px]"
            >vinden</span
          >.
        </h1>
        <p class="text-xl text-primary-500 leading-[32px]">
          Meer dan 10.000 huurwoningen van 300+ huursites, samengebracht in één
          helder overzicht.
        </p>
      </div>
      <div class="flex flex-col gap-4 lg-gap-6 lg:flex-row lg:items-center">
        <button
          type="button"
          class="w-full sm:w-auto self-start px-4 py-3 rounded-lg border border-primary-900 text-primary-900 font-semibold text-center hover:text-accent-500 hover:border-accent-500 transition-colors"
          aria-label="Bekijk alle woningen"
        >
          Bekijk alle woningen
        </button>

        <button
          type="button"
          class="w-full sm:w-auto self-start px-4 py-3 rounded-lg border border-none underline underline-offset-4 font-semibold text-center hover:text-accent-500 hover:border-accent-500 transition-colors"
          aria-label="Aanmelden"
        >
          Aanmelden
        </button>
      </div>

      <!-- Rating + reviews (simple visual: numeric score, stars, and review count) -->
      <div class="flex items-center gap-2 text-primary-500">
        <!-- Score -->
        <span class="text-xl font-semibold">8.9</span>

        <!-- Stars -->
        <div class="flex items-center">
          <!-- Full stars -->
          <svg
            v-for="n in 4"
            :key="n"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 text-staryellow-500"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.176 0l-3.36 2.444c-.785.57-1.84-.197-1.54-1.118l1.286-3.948a1 1 0 00-.364-1.118L2.075 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z"
            />
          </svg>

          <!-- Half star (made from a dim base + a bright half overlay) -->
          <div class="relative w-5 h-5">
            <!-- Base (dim) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="absolute inset-0 text-staryellow-300"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.176 0l-3.36 2.444c-.785.57-1.84-.197-1.54-1.118l1.286-3.948a1 1 0 00-.364-1.118L2.075 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z"
              />
            </svg>
            <!-- Half overlay (bright) -->
            <div class="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="text-staryellow-500 w-5 h-5"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.176 0l-3.36 2.444c-.785.57-1.84-.197-1.54-1.118l1.286-3.948a1 1 0 00-.364-1.118L2.075 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Review count -->
        <span class="text-xl text-primary-500">1412 reviews</span>
      </div>
    </div>

    <!-- Right / Bottom Side Hero Content -->
    <div
      class="w-full lg:w-[55%] lg:min-h-screen justify-center relative flex items-center z-10 px-5 md:px-10 lg:px-0"
    >
      <!-- Video Background (fills the right side, behind content) -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 right-0 w-full h-full object-cover lg:rounded-bl-[10rem] -z-0"
      >
        <source src="/13439834_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      <!-- Gradient overlay to improve text contrast over the video -->
      <div
        class="absolute top-0 right-0 w-full h-full -z-0 pointer-events-none"
        style="
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.25) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          border-bottom-left-radius: 10rem;
        "
      ></div>

      <!-- Right-side content / form -->
      <div class="relative lg:w-[65%] z-10 py-12 lg:py-0">
        <h3
          class="text-white text-[32px] text-center font-semibold leading-[40px] mb-6"
        >
          Vind direct jouw volgende woning, wij helpen je op weg
        </h3>
        <SearchSection />
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the search form component used on the right side
import SearchSection from "./SearchSection.vue";
</script>
