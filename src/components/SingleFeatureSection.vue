<!--
  SingleFeatureSection.vue
  This component renders a section composed of a single SplitSection component.
  The SplitSection receives props (imageSrc, imageAlt, tag, title, subtitle, buttonText)
  plus layout flags (reverse, mobileReverse). Utility classes handle spacing and responsiveness.
-->

<template>
  <section
    class="flex flex-col px-5 sm:px-10 lg:px-40 mb-12 lg:mb-20 max-w-[1920px] mx-auto"
  >
    <!-- Feature 1: image on the left on large screens -->
    <SplitSection
      imageSrc="/christin-hume-hBuwVLcYTnA-unsplash.jpg"
      imageAlt="Screenshot van het platform"
      tag="Over ons"
      title="Het hele overzicht op één plek."
      subtitle="Onze missie is om woningzoekenden te helpen op een snelle en eenvoudige manier een nieuwe huurwoning te vinden. <br><br> Huurstunt bundelt het actuele aanbod van particuliere verhuurders in Nederland in één overzichtelijk platform. Zo hoef jij niet meer talloze websites af te struinen en mis je geen enkele kans op een passende woning."
      buttonText="Probeer Premium gratis"
      :reverse="true"
      :mobileReverse="false"
    />
  </section>
</template>

<script setup>
// Import the reusable SplitSection component used above
import SplitSection from "./SplitSection.vue";
</script>
