<template>
    <!--
        CitiesSection.vue
            - Heading at the top
            - Grid with 6 columns (responsive: 2 / 4 / 6 cols) where each column groups provinces and city links
            - A CTA button at the bottom that scrolls the page to the top when clicked
        Links are placeholders
    -->
    <section
        class="flex flex-col px-5 sm:px-10 lg:px-40 mb-12 lg:mb-20 max-w-[1920px] mx-auto"
    >
        <div class="flex flex-col gap-8 lg:gap-12">
            <h2
                class="text-[40px] lg:text-5xl text-center font-semibold lg:leading-[56px] text-primary-900"
            >
                Thuis in elke stad van Nederland.
            </h2>


            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-3 lg:gap-x-6 gap-y-2 lg:gap-y-3">
                <!-- Column 1 -->
                <div class="flex flex-col gap-2 lg:gap-3">
                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Noord Brabant</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Breda</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Eindhoven</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Helmond</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Tilburg</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">s-Hertogenbosch</a>

                        <p class="font-semibold text-primary-500 text-base leading-[32px] mt-2 lg:mt-3">Flevoland</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Almere</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Lelystad</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Dronten</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Zeewolde</a>
                </div>

                <!-- Column 2 -->
                <div class="flex flex-col gap-2 lg:gap-3">
                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Friesland</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Leeuwarden</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Heerenveen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Drachten</a>

                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Gelderland</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Apeldoorn</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Arnhem</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Nijmegen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Wageningen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Doetinchem</a>
                </div>

                <!-- Column 3 -->
                <div class="flex flex-col gap-2 lg:gap-3">
                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Groningen</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Groningen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Delfzijl</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Veendam</a>

                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Limburg</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Heerlen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Maastricht</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Roermond</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Sittard</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Venlo</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Venray</a>
                </div>

                <!-- Column 4 -->
                <div class="flex flex-col gap-2 lg:gap-3">
                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Zuid-Holland</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Delft</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Gouda</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Leiden</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Rotterdam</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Spijkenisse</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Zoetermeer</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Den Haag</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Katwijk</a>
                </div>

                <!-- Column 5 -->
                <div class="flex flex-col gap-2 lg:gap-3">
                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Drenthe</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Assen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Emmen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Hoogeveen</a>

                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Noord-Holland</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Amstelveen</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Amsterdam</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Haarlem</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Hilversum</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Zaandam</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Hoorn</a>
                </div>

                <!-- Column 6 -->
                <div class="flex flex-col gap-2 lg:gap-3">
                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Overijssel</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Almelo</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Enschede</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Zwolle</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Hengelo</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Kampen</a>

                        <p class="font-semibold text-primary-500 text-base leading-[32px]">Utrecht</p>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Amersfoort</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Utrecht</a>
                        <a href="#" class="text-primary-500 text-base leading-[32px] hover:text-accent-500 transition-colors">Zeist</a>
                </div>
                </div>

            <!-- CTA button: scrolls to top when clicked -->
            <button
                type="button"
                @click="scrollToTop"
                class="sm:self-start lg:mx-auto bg-accent-500 hover:bg-accent-600 text-primary-900 px-4 py-[10px] rounded-lg text-base font-semibold transition-colors"
            >
                Laat ons je helpen met zoeken
            </button>
        </div>
    </section>
</template>

<script setup>
/* scrollToTop: smooth-scrolls the window to the top when called */
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
