<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()
</script>

<template>
  <section
    id="about-me"
    class="max-w-6xl mx-auto px-4 md:px-6 py-16"
  >
    <h2 class="section-title">
      <span class="hash">#</span>{{ ui.aboutMe }}
    </h2>
    <div class="section-title-underline" />

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-[var(--portfolio-text-muted)] leading-relaxed whitespace-pre-line mb-6">
          {{ portfolio.about }}
        </p>
        <a
          href="#contacts"
          class="inline-flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors"
        >
          {{ ui.readMore }}
          <span class="text-[var(--portfolio-accent)]">→</span>
        </a>
      </div>

      <div class="relative">
        <div class="aspect-[4/5] max-w-sm mx-auto border border-[var(--portfolio-border)] flex flex-col items-center justify-center gap-4 bg-[var(--portfolio-bg-elevated)] px-8 text-center">
          <div class="w-28 h-28 rounded-full border border-[var(--portfolio-accent)] flex items-center justify-center text-3xl font-bold text-[var(--portfolio-accent)]">
            JF
          </div>
          <div>
            <p class="text-lg font-semibold text-[var(--portfolio-text)]">
              {{ portfolio.shortName }}
            </p>
            <p class="text-sm text-[var(--portfolio-text-muted)]">
              {{ portfolio.role }}
            </p>
          </div>
          <div class="flex flex-wrap justify-center gap-2">
            <span class="portfolio-pill">{{ portfolio.location }}</span>
            <span class="portfolio-pill">PHP • Vue • Laravel</span>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 w-24 h-0.5 bg-[var(--portfolio-accent)]" />
      </div>
    </div>
  </section>
</template>
