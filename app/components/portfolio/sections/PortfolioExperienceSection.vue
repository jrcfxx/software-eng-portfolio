<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()

function getExperienceIcon(type: string) {
  if (type === 'education') {
    return 'i-lucide-graduation-cap'
  }

  if (type === 'project') {
    return 'i-lucide-folder-git-2'
  }

  return 'i-lucide-award'
}
</script>

<template>
  <section
    id="experiences"
    class="max-w-6xl mx-auto px-4 md:px-6 py-16"
  >
    <h2 class="section-title">
      <span class="hash">#</span>{{ ui.experiences }}
    </h2>
    <div class="section-title-underline" />

    <h3 class="text-lg font-semibold text-[var(--portfolio-text)] mt-8 mb-4">
      {{ ui.professionalExperience }}
    </h3>
    <div class="space-y-6">
      <div
        v-for="job in portfolio.professionalExperience"
        :key="job.id"
        class="portfolio-box"
      >
        <h4 class="font-semibold text-[var(--portfolio-text)]">
          {{ job.role }}
        </h4>
        <p class="text-sm text-[var(--portfolio-accent)] mt-1">
          {{ job.company }} · {{ job.period }}
        </p>
        <ul class="mt-4 space-y-2 text-sm text-[var(--portfolio-text-muted)] list-disc list-inside">
          <li
            v-for="bullet in job.bullets"
            :key="bullet"
          >
            {{ bullet }}
          </li>
        </ul>
      </div>
    </div>

    <h3 class="text-lg font-semibold text-[var(--portfolio-text)] mt-10 mb-4">
      {{ ui.educationAndProjects }}
    </h3>
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <div
        v-for="experience in portfolio.experiences"
        :key="experience.id"
        class="portfolio-box"
      >
        <div class="flex items-start gap-3">
          <span
            class="shrink-0 w-10 h-10 rounded border border-[var(--portfolio-accent)] flex items-center justify-center text-[var(--portfolio-accent)]"
            aria-hidden="true"
          >
            <UIcon
              :name="getExperienceIcon(experience.type)"
              class="w-5 h-5"
            />
          </span>
          <div class="min-w-0">
            <h4 class="font-semibold text-[var(--portfolio-text)]">
              {{ experience.title }}
            </h4>
            <p class="text-sm text-[var(--portfolio-accent)]">
              {{ experience.subtitle }} · {{ experience.period }}
            </p>
            <p class="text-sm text-[var(--portfolio-text-muted)] mt-2">
              {{ experience.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <h3 class="text-lg font-semibold text-[var(--portfolio-text)] mt-10 mb-4">
      {{ ui.complementaryDevelopment }}
    </h3>
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <div
        v-for="course in portfolio.complementaryDevelopment"
        :key="course.id"
        class="portfolio-box flex items-start gap-3"
      >
        <span
          v-if="course.hours"
          class="shrink-0 text-xs font-mono text-[var(--portfolio-accent)] w-12"
        >
          {{ course.hours }}h
        </span>
        <div class="min-w-0">
          <h4 class="font-semibold text-[var(--portfolio-text)]">
            {{ course.title }}
          </h4>
          <p class="text-sm text-[var(--portfolio-accent)]">
            {{ course.provider }}
          </p>
          <p class="text-sm text-[var(--portfolio-text-muted)] mt-1">
            {{ course.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
