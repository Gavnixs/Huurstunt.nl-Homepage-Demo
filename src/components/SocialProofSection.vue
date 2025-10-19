<!--
    SocialProofSection.vue
    - This component renders a "social proof" section with a heading, a set of user review cards,
        and an aggregated score with star icons and review count.
    - Individual reviews are rendered by the SocialProofReview child component.
-->

<template>
  <section class="flex flex-col py-12 lg:py-20 mb-12 lg:mb-20 bg-primary-100">
    <div
      class="flex flex-col items-center px-5 gap-6 lg:gap-8 sm:px-10 lg:px-40 max-w-[1920px] mx-auto"
    >
      <!-- Heading / Intro -->
      <div class="flex flex-col gap-3 lg:gap-4 lg:items-center">
        <span
          class="self-start lg:self-center text-xs leading-[16px] bg-accent-300 px-3 py-2 rounded-full text-accent-500 font-semibold"
        >
          Waarom kiezen voor Huurstunt?
        </span>
        <h2
          class="text-[40px] lg:text-5xl font-semibold lg:leading-[56px] text-primary-900"
        >
          Vraag het gerust aan onze gebruikers.
        </h2>
      </div>

      <!-- Reviews list: each item is a SocialProofReview component -->
      <div class="flex flex-col w-full md:flex-row gap-3 lg:justify-between">
        <SocialProofReview
          reviewText="Zeer professionele aanpak. Een echte aanrader."
          reviewer="Artur Popielas"
        />
        <SocialProofReview
          reviewText="De communicatie verliep vlot en duidelijk. Erg tevreden!"
          reviewer="Sanne van Dijk"
        />
        <SocialProofReview
          reviewText="Binnen een week had ik een woning gevonden via Huurstunt."
          reviewer="Kevin Bakker"
        />
        <SocialProofReview
          reviewText="Gebruiksvriendelijk platform en uitstekende service."
          reviewer="Romy de Groot"
        />
      </div>

      <!-- Aggregate rating row: numeric score, stars (including a half-star), and review count -->
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

          <!-- Half star: drawn by overlaying a bright half over a dim base -->
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
  </section>
</template>

<script setup>
// Import the reusable SocialProofReview component used above
import SocialProofReview from "./SocialProofReview.vue";
</script>
