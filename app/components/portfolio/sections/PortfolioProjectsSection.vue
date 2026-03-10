<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()
</script>

<template>
  <section
    id="works"
    class="max-w-6xl mx-auto px-4 md:px-6 py-16"
  >
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div>
        <h2 class="section-title">
          <span class="hash">#</span>{{ ui.projects }}
        </h2>
        <div class="section-title-underline" />
      </div>
    </div>

    <div class="relative">
      <div
        class="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[var(--portfolio-border)]"
        aria-hidden="true"
      />
      <ul class="space-y-0">
        <li
          v-for="project in portfolio.projects"
          :key="project.id"
          class="relative pl-12 md:pl-16 pb-12 last:pb-0"
        >
          <div
            class="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-[var(--portfolio-accent)] border-2 border-[var(--portfolio-bg)]"
            aria-hidden="true"
          />
          <div class="portfolio-box flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="flex-1 min-w-0">
              <span class="text-xs font-mono text-[var(--portfolio-accent)]">{{ project.year }}</span>
              <h3 class="font-bold text-lg text-[var(--portfolio-text)] mt-1 mb-2">
                {{ project.name }}
              </h3>
              <p class="text-sm text-[var(--portfolio-text-muted)]">
                {{ project.description }}
              </p>
              <div class="mt-4">
                <p class="text-xs uppercase tracking-[0.2em] text-[var(--portfolio-text-muted)] mb-2">
                  {{ ui.stackLabel }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.stack"
                    :key="tech"
                    class="portfolio-pill"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <p
                v-if="project.note"
                class="text-xs text-[var(--portfolio-text-muted)] mt-4"
              >
                {{ project.note }}
              </p>
            </div>

            <div class="flex flex-col gap-3 shrink-0 md:min-w-40">
              <a
                v-if="project.links.repo"
                :href="project.links.repo"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 py-2 px-4 text-sm border border-[var(--portfolio-border)] text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
              >
                <UIcon
                  name="i-simple-icons-github"
                  class="w-4 h-4"
                />
                {{ ui.projectRepo }}
              </a>
              <a
                v-if="project.links.live"
                :href="project.links.live"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 py-2 px-4 text-sm border border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-bg)] transition-colors"
              >
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="w-4 h-4"
                />
                {{ ui.projectLive }}
              </a>
              <span
                v-if="!project.links.repo && !project.links.live"
                class="text-xs text-[var(--portfolio-text-muted)] text-center"
              >
                {{ ui.noPublicLink }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
