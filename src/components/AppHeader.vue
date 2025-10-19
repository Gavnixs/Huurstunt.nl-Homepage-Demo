<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-20 py-4 lg:pb-0 lg:pt-4 transition-all',
      mobileMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent lg:bg-white/0',
    ]"
  >
    <nav class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-40">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <div class="flex items-center">
            <img src="/logo.svg" alt="Huurstunt Logo" class="h-10" />
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:block">
          <div class="flex flex-row items-center gap-6 lg:gap-8">
            <a
              v-for="item in navigationItems"
              :key="item.name"
              href="#"
              class="text-primary-900 hover:text-accent-500 rounded-md text-base font-semibold transition-colors"
            >
              {{ item.name }}
            </a>
            <a
              href="#"
              class="bg-accent-500 hover:bg-accent-600 text-primary-900 px-4 py-[10px] rounded-lg text-base font-semibold transition-colors"
            >
              Probeer Premium gratis
            </a>
          </div>
        </div>

        <!-- Mobile / Tablet menu button -->
        <div class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-primary-500 hover:text-primary-900 hover:bg-neutralgray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger icon -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-show="mobileMenuOpen" class="lg:hidden">
        <div class="flex flex-col text-center pt-8 pb-4 gap-6">
          <a
            v-for="item in navigationItems"
            :key="item.name"
            href="#"
            class="text-primary-900 hover:text-accent-500 block text-base font-semibold transition-colors"
          >
            {{ item.name }}
          </a>
          <a
            href="#"
            class="bg-accent-500 hover:bg-accent-300 text-primary-900 px-4 py-[10px] rounded-lg text-base font-semibold transition-colors inline-block self-center"
          >
            Probeer Premium gratis
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

// reactive boolean that controls whether the mobile menu is visible
const mobileMenuOpen = ref(false);

// list of navigation links rendered in both desktop and mobile menus
const navigationItems = [
  { name: "Hoe wij te werk gaan" },
  { name: "Over Ons" },
];

// simple toggle used by the mobile menu button to open/close the menu
const toggleMobileMenu = () => {
  // flip the reactive value; Vue will update the DOM where `mobileMenuOpen` is used
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
