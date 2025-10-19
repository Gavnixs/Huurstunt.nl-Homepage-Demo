<!--
SearchSection.vue
Simple two-tab search component:
- Left tab ("Laat ons helpen") is an automatic/watch search: choose frequency, provide email and location.
- Right tab ("Direct zoeken") is a manual one-off location search.
Built with Vue <script setup> using refs for state (activeTab, inputs, isSearching) and a shared handleSearch function that simulates submission.
-->
<template>
  <div class="bg-white rounded-2xl mx-auto">
    <!-- Search Tabs -->
    <div class="flex">
      <button
        @click="activeTab = 'automatic'"
        :class="['tab-button', { active: activeTab === 'automatic' }]"
        class="flex-1 py-4 px-4 text-center font-semibold text-base rounded-tl-2xl transition-colors"
      >
        Laat ons helpen
      </button>
      <button
        @click="activeTab = 'manual'"
        :class="['tab-button', { active: activeTab === 'manual' }]"
        class="flex-1 py-4 px-4 text-center font-semibold text-base rounded-tr-2xl transition-colors"
      >
        Direct zoeken
      </button>
    </div>

    <!-- Automatic Search Form -->
    <form
      v-show="activeTab === 'automatic'"
      @submit.prevent="handleSearch('automatic')"
      class="search-form"
    >
      <div class="flex flex-col p-6 gap-6">
        <p class="text-primary-500 text-base">
          Jij geeft aan waar je zoekt, wij houden de huursites in de gaten en
          laten het je meteen weten als we iets nieuws tegenkomen.
        </p>
        <div class="flex flex-col gap-4">
          <!-- Top row: dropdown + email -->
          <div class="flex flex-col gap-4 lg:flex-row">
            <!-- Dropdown -->
            <div class="flex-1">
              <select
                id="frequency"
                v-model="frequency"
                required
                class="w-full px-4 py-3 border bg-neutralgray-300 border-primary-300 rounded-lg text-base font-semibold text-primary-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
              >
                <option>Elke dag</option>
                <option>Wekelijks</option>
                <option>Maandelijks</option>
              </select>
            </div>
            <!-- Email input -->
            <div class="flex-1">
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="example@mail.com"
                required
                class="w-full px-4 py-3 border border-primary-300 rounded-lg text-base text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
              />
            </div>
          </div>
          <!-- Main search input with icon and button -->
          <div class="relative flex items-center">
            <!-- Icon on left -->
            <span class="absolute left-6">
              <img
                src="/location-pin.png"
                alt="Decorative background"
                class=""
              />
            </span>
            <!-- Input field -->
            <input
              type="text"
              v-model="automaticSearch"
              placeholder="Bijv. Amsterdam"
              required
              class="w-full pl-16 py-4 border border-accent-500 font-semibold text-primary-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
            />
            <!-- Search button / icon on right -->
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
          </div>
        </div>
      </div>
    </form>

    <!-- Manual Search Form -->
    <form
      v-show="activeTab === 'manual'"
      @submit.prevent="handleSearch('manual')"
      class="search-form"
    >
      <div class="flex flex-col p-6 gap-6">
        <p class="text-primary-500 text-base">
          Zoek zelf naar jouw volgende woning, snel en eenvoudig.
        </p>
        <div class="flex flex-col gap-4">
          <!-- Main search input with icon and button -->
          <div class="relative flex items-center">
            <!-- Icon on left -->
            <span class="absolute left-6">
              <img
                src="/location-pin.png"
                alt="Decorative background"
                class=""
              />
            </span>
            <!-- Input field -->
            <input
              type="text"
              v-model="automaticSearch"
              placeholder="Bijv. Amsterdam"
              required
              class="w-full pl-16 py-4 border border-accent-500 font-semibold text-primary-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
            />
            <!-- Search button / icon on right -->
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
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Reactive data
const activeTab = ref("automatic");
const isSearching = ref(false);
const automaticSearch = ref("");
const frequency = ref("Elke dag");
const email = ref("");

// Computed properties
const searchButtonText = computed(() => {
  return isSearching.value ? "Zoeken..." : "Zoeken";
});

// Methods
const handleSearch = (type) => {
  isSearching.value = true;

  const searchData =
    type === "automatic"
      ? {
          type: "automatic",
          query: automaticSearch.value,
          frequency: frequency.value,
          email: email.value,
        }
      : { type: "manual", query: automaticSearch.value };

  console.log(`${type} search submitted:`, searchData);

  // Simulate search
  setTimeout(() => {
    isSearching.value = false;
    if (type === "automatic") {
      alert(
        `Zoeken voltooid voor: ${automaticSearch.value}\nFrequentie: ${
          frequency.value
        }\nEmail: ${email.value || "(geen)"}`
      );
    } else {
      alert(`Zoeken voltooid voor: ${automaticSearch.value}`);
    }
  }, 1000);
};
</script>
