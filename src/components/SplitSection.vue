<!--
  SplitSection.vue
  Simple reusable two-column section:
  - Left: content area (tag, title, subtitle, and an action slot or fallback button)
  - Right: image that is sized to match the content height so both columns align
  - Supports reversing the column order on desktop (reverse) and mobile (mobileReverse)
-->

<template>
  <section
    :class="[
      'flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-20',
      reverse ? 'lg:flex-row-reverse' : '',
      mobileReverse ? 'flex-col-reverse' : '',
    ]"
  >
    <!-- Content (defines the height) -->
    <div
      ref="contentRef"
      class="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-8"
    >
      <div class="flex flex-col gap-3 lg:gap-4">
        <span
          v-if="tag"
          class="self-start text-xs leading-[16px] bg-accent-300 px-3 py-2 rounded-full text-accent-500 font-semibold"
        >
          {{ tag }}
        </span>

        <h2
          class="text-[40px] lg:text-5xl font-semibold lg:leading-[56px] text-primary-900"
        >
          {{ title }}
        </h2>

        <p
          v-if="subtitle"
          class="text-base text-primary-500 leading-[32px]"
          v-html="subtitle"
        ></p>
      </div>

      <!-- Action area: a named slot for custom actions or a fallback button -->
      <slot name="action">
        <button
          v-if="buttonText"
          type="button"
          class="sm:self-start bg-accent-500 hover:bg-accent-600 text-primary-900 px-4 py-[10px] rounded-lg text-base font-semibold transition-colors"
        >
          {{ buttonText }}
        </button>
      </slot>
    </div>

    <!-- Image: height is synced to the content height for visual balance -->
    <div
      ref="imageWrapper"
      class="w-full lg:w-[40%] overflow-hidden rounded-2xl min-h-[360px] max-h-[560px]"
      :style="{ height: contentHeight + 'px' }"
    >
      <img :src="imageSrc" :alt="imageAlt" class="w-full h-full object-cover" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

/* Props for configuring the section (image, text, ordering, etc.) */
defineProps({
  imageSrc: String,
  imageAlt: { type: String, default: "" },
  tag: String,
  title: String,
  subtitle: String,
  buttonText: String,
  reverse: { type: Boolean, default: false },
  mobileReverse: { type: Boolean, default: false },
});

/* Refs and state used to measure the content height and apply it to the image column */
const contentRef = ref(null);
const contentHeight = ref(0);

/* Measure the content's height and add some extra spacing (64px) to match design */
function updateHeight() {
  if (contentRef.value)
    contentHeight.value = contentRef.value.offsetHeight + 64;
}

/* Measure after mount and whenever the window resizes */
onMounted(async () => {
  await nextTick();
  updateHeight();
  window.addEventListener("resize", updateHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeight);
});
</script>
