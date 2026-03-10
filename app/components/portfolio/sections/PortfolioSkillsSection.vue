<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()
</script>

<template>
  <section
    id="skills"
    class="max-w-6xl mx-auto px-4 md:px-6 py-16"
  >
    <h2 class="section-title">
      <span class="hash">#</span>{{ ui.skills }}
    </h2>
    <div class="section-title-underline" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <div
        v-for="category in portfolio.skills"
        :key="category.id"
        class="portfolio-box"
      >
        <h3 class="font-semibold text-[var(--portfolio-text)] mb-3">
          {{ category.name }}
        </h3>
        <ul class="space-y-1 text-sm text-[var(--portfolio-text-muted)]">
          <li
            v-for="skill in category.items"
            :key="skill"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
