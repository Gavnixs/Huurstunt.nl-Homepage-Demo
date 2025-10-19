<!--
    PricingSection.vue
    This section displays the pricing/benefit cards for Free and Premium accounts.
-->
<template>
  <section class="flex flex-col py-12 lg:py-20 mb-12 lg:mb-20 bg-primary-100">
    <div
      class="flex flex-col items-center px-5 gap-8 lg:gap-12 sm:px-10 lg:px-40 max-w-[1920px] mx-auto"
    >
      <!-- Heading / Intro -->
      <div class="flex flex-col gap-3 lg:gap-4 items-center">
        <span
          class="self-center text-xs leading-[16px] bg-accent-300 px-3 py-2 rounded-full text-accent-500 font-semibold"
        >
          De keuze is aan jou
        </span>
        <h2
          class="text-[40px] lg:text-5xl text-center font-semibold lg:leading-[56px] text-primary-900"
        >
          De voordelen van ons platform.
        </h2>
        <p class="text-base text-primary-500 text-center leading-[32px]">
          Meer overzicht en sneller resultaat. Bekijk wat ons platform voor jou
          kan doen.
        </p>
      </div>

      <!-- Cards container: responsive layout holding two pricing cards -->
      <div
        class="flex flex-col w-full justify-center md:flex-row gap-6 lg:gap-8"
      >
        <!-- Free account card -->
        <div
          class="flex flex-col bg-white rounded-xl p-6 lg:p-8 gap-4 lg:gap-6"
        >
          <h3 class="text-xl font-semibold text-primary-500">Gratis Account</h3>
          <div class="flex flex-row gap-2">
            <span class="text-xl font-regular text-primary-500">€</span>
            <span class="self-end text-4xl font-semibold text-primary-900"
              >0,00</span
            >
            <span class="self-center text-base font-regular text-primary-500"
              >per maand</span
            >
          </div>
          <button
            type="button"
            class="w-full self-start px-4 py-3 rounded-lg border border-primary-900 text-primary-900 font-semibold text-center hover:text-accent-500 hover:border-accent-500 transition-colors"
            aria-label="Bekijk alle woningen"
          >
            Maak gratis een account aan
          </button>
          <!-- Feature list for free account -->
          <div class="flex flex-col gap-3">
            <p class="text-base font-semibold text-primary-500 leading-[32px]">
              Kenmerken:
            </p>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-500 text-base"
                  >Het grootste woningaanbod</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-500 text-base"
                  >Ontvang de nieuwste woningen per email</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-500 text-base"
                  >Bewaar je favoriete woningen</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-500 text-base"
                  >Bekijk de foto’s van een woning</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-500 text-base"
                  >Bekijk alle woningkenmerken</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Premium account card -->
        <div
          class="flex flex-col bg-primary-900 rounded-xl p-6 lg:p-8 gap-4 lg:gap-6"
        >
          <h3 class="text-xl font-semibold text-primary-300">
            Premium Account
          </h3>
          <div class="flex flex-row gap-2">
            <span class="text-xl font-regular text-primary-300">€</span>
            <span class="self-end text-4xl font-semibold text-white"
              >29,95</span
            >
            <span class="self-center text-base font-regular text-primary-300"
              >per maand</span
            >
          </div>
          <button
            type="button"
            class="w-full self-start px-4 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-primary-900 text-base font-semibold transition-colors"
            aria-label="Bekijk alle woningen"
          >
            Probeer 14 dagen gratis
          </button>
          <!-- Feature list for premium account -->
          <div class="flex flex-col gap-3">
            <p class="text-base font-semibold text-primary-300 leading-[32px]">
              Kenmerken:
            </p>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-300 text-base"
                  >Het grootste woningaanbod</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-300 text-base"
                  >Ontvang de nieuwste woningen per email</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-300 text-base"
                  >Bewaar je favoriete woningen</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-300 text-base"
                  >Bekijk de foto’s van een woning</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-300 text-base"
                  >Bekijk alle woningkenmerken</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-300 text-base"
                  >Reageer onbeperkt op woningen</span
                >
              </div>
              <div class="flex items-center gap-2">
                <img
                  src="/CheckCircle.svg"
                  alt="check icon"
                  class="w-[18px] h-[18px] flex-shrink-0"
                />
                <span class="text-primary-300 text-base"
                  >Lees de volledige woningomschrijving</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
