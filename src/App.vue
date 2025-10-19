<template>
  <div class="bg-white">
    <AppHeader />
    <main class="mx-auto">
      <HeroSection />
      <SingleFeatureSection />
      <SocialProofSection />
      <CtaSection />
      <TripleFeatureSection />
	  <CitiesSection />
	  <PricingSection />
	  <FaqSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import SingleFeatureSection from "./components/SingleFeatureSection.vue";
import AppFooter from "./components/AppFooter.vue";
import TripleFeatureSection from "./components/TripleFeatureSection.vue";
import SocialProofSection from "./components/SocialProofSection.vue";
import CtaSection from "./components/CtaSection.vue";
import CitiesSection from "./components/CitiesSection.vue";
import PricingSection from "./components/PricingSection.vue";
import FaqSection from "./components/FaqSection.vue";
</script>
