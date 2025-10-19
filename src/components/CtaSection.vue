<!--
  CtaSection.vue
  - A SplitSection component (left: image, right: title/subtitle) with a location search form injected into its "action" slot.
  - A set of image cards below that show quick links to cities.
-->

<template>
  <!-- Section: background color and vertical spacing -->
  <section
    class="flex flex-col gap-8 lg:gap-12 px-5 sm:px-10 lg:px-40 mb-12 lg:mb-20 max-w-[1920px] mx-auto"
  >
    <!-- Main split area: image + text. The form is injected into the component's action slot -->
    <SplitSection
      imageSrc="/christin-hume-hBuwVLcYTnA-unsplash.jpg"
      imageAlt="Screenshot van het platform"
      title="Waar kom jij straks te wonen?"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
    >
      <template #action>
        <!-- Injecting the location input here -->
        <form @submit.prevent="handleSearch" class="relative flex items-center">
          <!-- Icon -->
          <span class="absolute left-6">
            <img src="/location-pin.png" alt="Decorative background" />
          </span>

          <!-- Input -->
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Bijv. Amsterdam"
            required
            class="w-full pl-16 py-4 border border-accent-500 font-semibold text-primary-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
          />

          <!-- Button -->
          <button
            type="submit"
            :disabled="isSearching"
            class="absolute right-4 bg-accent-500 hover:bg-accent-300 disabled:bg-primary-300 text-white hover:text-accent-500 font-medium px-2 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </button>
        </form>
      </template>
    </SplitSection>

    <!-- Quick links: cards for cities -->
    <div class="flex flex-col gap-4 lg:gap-6 items-center">
      <h3 class="text-primary-500 text-xl font-semibold leading-[32px]">
        of bekijk direct alle huurwoningen in:
      </h3>

      <div class="flex flex-col lg:flex-row lg:justify-between gap-6 w-full">
        <!-- Card 1 -->
        <a
          href="#"
          aria-label="Groningen"
          class="relative flex justify-center items-center p-6 rounded-lg w-full h-[120px] overflow-hidden transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accent-500"
        >
          <img
            src="/groningen.jpg"
            alt="Groningen"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/35 to-black/0"
          ></div>
          <p class="relative text-white text-2xl font-semibold leading-[32px]">
            Groningen
          </p>
        </a>

        <!-- Card 2 -->
        <a
          href="#"
          aria-label="Amsterdam"
          class="relative flex justify-center items-center p-6 rounded-lg w-full h-[120px] overflow-hidden transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accent-500"
        >
          <img
            src="/amsterdam.jpg"
            alt="Amsterdam"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/35 to-black/0"
          ></div>
          <p class="relative text-white text-2xl font-semibold leading-[32px]">
            Amsterdam
          </p>
        </a>

        <!-- Card 3 -->
        <a
          href="#"
          aria-label="Maastricht"
          class="relative flex justify-center items-center p-6 rounded-lg w-full h-[120px] overflow-hidden transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accent-500"
        >
          <img
            src="/maastricht.jpg"
            alt="Maastricht"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/35 to-black/0"
          ></div>
          <p class="relative text-white text-2xl font-semibold leading-[32px]">
            Maastricht
          </p>
        </a>

        <!-- Card 4 -->
        <a
          href="#"
          aria-label="Gasselternijveen"
          class="relative flex justify-center items-center p-6 rounded-lg w-full h-[120px] overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accent-500"
        >
          <img
            src="/gasselternijveen.jpg"
            alt="Gasselternijveen"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/35 to-black/0"
          ></div>
          <p
            class="relative text-white text-2xl font-semibold leading-[32px] text-center"
          >
            Gasselternijveen
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the reusable SplitSection component used above
import SplitSection from "./SplitSection.vue";
</script>
