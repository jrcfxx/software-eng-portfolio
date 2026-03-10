<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()
</script>

<template>
  <section
    id="my-fun-facts"
    class="max-w-4xl mx-auto px-4 md:px-6 py-16"
  >
    <h2 class="section-title">
      <span class="hash">#</span>{{ ui.myFunFacts }}
    </h2>
    <div class="section-title-underline" />

    <div class="space-y-3">
      <div
        v-for="fact in portfolio.funFacts"
        :key="fact"
        class="portfolio-box"
      >
        {{ fact }}
      </div>
    </div>
  </section>
</template>
