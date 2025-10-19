<!--
  TripleFeatureSection.vue
  This component renders a section composed of three repeated SplitSection components.
  Each SplitSection receives props (imageSrc, imageAlt, tag, title, subtitle, buttonText)
  plus layout flags (reverse, mobileReverse). Utility classes handle spacing and responsiveness.
-->

<template>
  <!-- Section: background color and vertical spacing -->
  <section class="flex flex-col py-12 lg:py-20 mb-12 lg:mb-20 bg-primary-100">
    <!-- Wrapper: horizontal padding, gap between items, centered with a max width -->
    <div
      class="flex flex-col px-5 gap-12 sm:px-10 lg:px-40 max-w-[1920px] mx-auto"
    >
      <!-- Feature 1: image on the right on large screens (reverse) -->
      <SplitSection
        imageSrc="/alex-dudar-4AMjQJ2NXZw-unsplash.jpg"
        imageAlt="Foto Historisch gebouw"
        tag="Altijd actueel"
        title="Alleen beschikbare woningen"
        subtitle="Lorem ipsum dolor sit amet consectetur. Pulvinar ornare mattis faucibus fermentum venenatis semper. Turpis quam eget turpis id mollis ut. Libero sit elementum orci dictum. Lacus blandit habitant imperdiet libero neque faucibus. Aenean cras vivamus libero integer gravida urna enim. Nunc velit in nec id nibh."
        buttonText=""
        :reverse="true"
        :mobileReverse="true"
      />
      <!-- Feature 2: image on the left on large screens -->
      <SplitSection
        imageSrc="/leonidas-oJFX9PRangc-unsplash.jpg"
        imageAlt="Foto historische gebouwen in straat"
        tag="Alles helder"
        title="Volledige transparantie"
        subtitle="Lorem ipsum dolor sit amet consectetur. Pulvinar ornare mattis faucibus fermentum venenatis semper. Turpis quam eget turpis id mollis ut. Libero sit elementum orci dictum. Lacus blandit habitant imperdiet libero neque faucibus. Aenean cras vivamus libero integer gravida urna enim. Nunc velit in nec id nibh."
        buttonText="Probeer Premium gratis"
        :reverse="false"
        :mobileReverse="true"
      />
      <!-- Feature 3: image on the right on large screens -->
      <SplitSection
        imageSrc="/artem-shuba-7TEljOx9PmA-unsplash.jpg"
        imageAlt="Foto oud stadscentrum met kanaal"
        tag="Betrouwbaar contact"
        title="Geverifieerde verhuurders"
        subtitle="Lorem ipsum dolor sit amet consectetur. Pulvinar ornare mattis faucibus fermentum venenatis semper. Turpis quam eget turpis id mollis ut. Libero sit elementum orci dictum. Lacus blandit habitant imperdiet libero neque faucibus. Aenean cras vivamus libero integer gravida urna enim. Nunc velit in nec id nibh."
        buttonText=""
        :reverse="true"
        :mobileReverse="true"
      />
    </div>
  </section>
</template>

<script setup>
// Import the reusable SplitSection component used above
import SplitSection from "./SplitSection.vue";
</script>
