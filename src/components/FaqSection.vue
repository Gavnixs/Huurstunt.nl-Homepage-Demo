<!--
FAQ Section component
- Shows an introductory heading/description on the left and a list of FAQ items on the right.
- Each FAQ entry is a separate FaqItem component (question + answer).
-->
<template>
  <section
    class="flex flex-col gap-8 lg:flex-row lg:justify-between w-full px-5 sm:px-10 lg:px-40 mb-12 lg:mb-20 max-w-[1920px] mx-auto"
  >
    <!-- Heading / Intro -->
    <div class="flex flex-col lg:w-[40%] gap-3 lg:gap-4">
      <span
        class="self-start text-xs leading-[16px] bg-accent-300 px-3 py-2 rounded-full text-accent-500 font-semibold"
      >
        Nog iets onduidelijk?
      </span>
      <h2
        class="text-[40px] lg:text-5xl font-semibold lg:leading-[56px] text-primary-900"
      >
        Vaak gestelde vragen.
      </h2>
      <p class="text-base text-primary-500 leading-[32px]">
        Heb je een vraag? Hier vind je de antwoorden op de meest gestelde vragen
        en meer informatie die je verder helpt.<br /><br />Lorem ipsum dolor sit
        amet consectetur. Pulvinar ornare mattis faucibus fermentum venenatis
        semper. Turpis quam eget turpis id mollis ut. Libero sit elementum orci
        dictum.
      </p>
    </div>

    <!-- FAQ items container -->
    <div class="flex flex-col lg:w-[50%] gap-6 lg:gap-8">
      <FaqItem
        question="Wat is Huurstunt precies?"
        answer="Huurstunt is een platform dat woningzoekenden helpt om snel en eenvoudig een nieuwe huurwoning te vinden via actuele aanbiedingen van particuliere verhuurders in Nederland."
      />
      <FaqItem
        question="Hoe werkt het aanmaken van een zoekopdracht?"
        answer="Je kunt eenvoudig een zoekopdracht aanmaken door jouw gewenste locatie en huurvoorkeuren in te vullen. Wij houden vervolgens het aanbod in de gaten en brengen je direct op de hoogte van nieuwe woningen."
      />
      <FaqItem
        question="Wat kost het gebruik van Huurstunt?"
        answer="Er is een gratis versie met basisfuncties en een Premium abonnement waarmee je toegang krijgt tot exclusieve functies en meldingen."
      />
      <FaqItem
        question="Kan ik mijn abonnement opzeggen?"
        answer="Ja, je kunt je abonnement op elk moment stopzetten via je accountinstellingen. Er zijn geen verborgen kosten of verplichtingen."
      />
      <FaqItem
        question="Hier komt een vrij lange vraag met veel woorden, echt zo veel woorden, het is ongelooflijk hoeveel woorden deze vraag heeft... die vaak gesteld wordt."
        answer="Hier komt een uitgebreid antwoord dat alle details bevat die nodig zijn om de vraag volledig te beantwoorden. Dit kan meerdere zinnen omvatten om duidelijkheid te verschaffen over het onderwerp in kwestie."
      />
    </div>
  </section>
</template>

<script setup>
// Import the reusable FAQ item component
import FaqItem from "./FaqItem.vue";
</script>
