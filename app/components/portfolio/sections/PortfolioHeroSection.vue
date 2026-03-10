<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()
</script>

<template>
  <div>
    <section
      id="home"
      class="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-sm md:text-base text-[var(--portfolio-accent)] mb-3">
            {{ portfolio.heroIntro }}
          </p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--portfolio-text)] mb-4">
            {{ portfolio.name }}
          </h1>
          <p class="text-lg text-[var(--portfolio-text-muted)] mb-4">
            {{ portfolio.role }}
          </p>
          <p class="max-w-2xl text-[var(--portfolio-text-muted)] mb-8 leading-relaxed">
            {{ portfolio.heroTagline }}
          </p>
          <div class="flex flex-wrap items-center gap-3 mb-8 text-sm text-[var(--portfolio-text-muted)]">
            <span class="portfolio-pill">
              {{ ui.basedIn }}: {{ portfolio.location }}
            </span>
            <span class="portfolio-pill">
              {{ portfolio.email }}
            </span>
          </div>
          <a
            href="#contacts"
            class="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-bg)] transition-colors"
          >
            {{ ui.contactMe }}
          </a>
        </div>

        <div class="relative">
          <div class="aspect-square max-w-md mx-auto relative">
            <div class="absolute inset-0 rounded-lg border-2 border-[var(--portfolio-accent)] transform rotate-[-2deg] scale-[0.95]" />
            <div class="absolute inset-0 overflow-hidden rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevated)] flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div class="w-24 h-24 rounded-full border border-[var(--portfolio-accent)] flex items-center justify-center text-2xl font-bold text-[var(--portfolio-accent)] bg-[var(--portfolio-bg-soft)]">
                JF
              </div>
              <div class="space-y-2">
                <p class="text-base font-semibold text-[var(--portfolio-text)]">
                  {{ portfolio.shortName }}
                </p>
                <p class="text-sm text-[var(--portfolio-text-muted)]">
                  {{ portfolio.heroTagline }}
                </p>
              </div>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 dot-pattern rounded" />
            <div class="absolute -bottom-2 -left-2 w-6 h-6 dot-pattern rounded" />
          </div>
          <div class="mt-6 flex items-center gap-2 px-4 py-3 border border-[var(--portfolio-accent)] max-w-md">
            <span class="w-2 h-2 bg-[var(--portfolio-accent)]" />
            <span class="text-sm text-[var(--portfolio-text)]">{{ portfolio.currentlyWorkingOn }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <div class="portfolio-box border-[var(--portfolio-border)]">
        <p class="text-lg md:text-xl text-[var(--portfolio-text)] italic mb-2">
          "{{ portfolio.quote.text }}"
        </p>
        <p class="text-right text-sm text-[var(--portfolio-text-muted)]">
          — {{ portfolio.quote.author }}
        </p>
      </div>
    </section>
  </div>
</template>
