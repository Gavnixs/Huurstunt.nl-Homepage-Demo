<!--
    SocialProofReview.vue
    - Built as a small, reusable card that shows a quote and an optional reviewer.
-->

<template>
  <div class="flex flex-col w-full p-6 gap-4 bg-white rounded-lg">
    <!-- Main review text rendered inside quotation marks -->
    <p class="text-xl text-primary-500 font-semibold leading-[32px]">
      “{{ reviewText }}”
    </p>
    <!-- Optional reviewer line; only rendered when 'reviewer' prop is provided -->
    <p v-if="reviewer" class="text-base text-primary-500 leading-[32px]">
      — {{ reviewer }}
    </p>
  </div>
</template>

<script setup>
// Declare the props this component accepts.
// - reviewText: the quote to display
// - reviewer: optional name of the person who gave the review
defineProps({
  reviewText: {
    type: String,
  },
  reviewer: {
    type: String,
  },
});
</script>
