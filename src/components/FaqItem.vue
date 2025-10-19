<!--
    FaqItem.vue
    A simple, reusable FAQ item: a clickable question row that toggles the visibility
    of its answer. Built with a button for the question (including an icon that rotates)
    and a conditional block that shows the answer when open.
-->
<template>
  <div class="flex flex-col gap-4">
    <!-- Question row: button toggles the open state -->
    <button
      @click="toggle"
      class="w-full flex justify-between items-center text-left group"
    >
      <h3
        class="text-xl font-semibold text-primary-900 leading-[32px] transition-colors group-hover:text-accent-500"
      >
        {{ question }}
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-primary-500 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Answer (only visible when open) -->
    <div v-if="isOpen" class="text-base text-primary-500 leading-[32px]">
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props: text for the question and its answer
const props = defineProps({
  question: String,
  answer: String,
});

// Local state: whether the item is open (answer visible)
const isOpen = ref(false);

// Toggle function to open/close the answer
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
