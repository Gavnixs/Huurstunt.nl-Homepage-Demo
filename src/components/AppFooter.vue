<template>
  <footer class="bg-primary-900 text-white">
    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <img src="/logo.svg" alt="Huurstunt Logo" class="h-10" />
          </div>
          <p class="text-primary-300">
            Jouw partner in het vinden van de perfecte woning.
          </p>
        </div>

        <FooterColumn
          v-for="column in footerColumns"
          :key="column.title"
          :title="column.title"
          :links="column.links"
        />
      </div>

      <div class="border-t border-primary-500 mt-8 pt-8 text-center font-light text-white">
        <p>
          &copy; 2025 Huurstunt.nl - Demo Project. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterColumn from "./FooterColumn.vue";

const footerColumns = [
  {
    title: "Het platform",
    links: [
      { name: "Huis huren", href: "#" },
      { name: "Huis verhuren", href: "#" },
      { name: "Voor makelaars", href: "#" },
    ],
  },
  {
    title: "Informatie",
    links: [
      { name: "Algemene Voorwaarden", href: "#" },
      { name: "Tarieven", href: "#" },
      { name: "Veelgestelde vragen", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Over ons", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Klachtenprocedure", href: "#" },
    ],
  },
];
</script>
