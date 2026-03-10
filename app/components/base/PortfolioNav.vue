<script setup lang="ts">
const { ui } = usePortfolioContent()

defineProps<{
  compact?: boolean
}>()

const navItems = computed(() => [
  { id: 'home', label: ui.value.nav.home },
  { id: 'works', label: ui.value.nav.works },
  { id: 'about-me', label: ui.value.nav.aboutMe },
  { id: 'experiences', label: ui.value.nav.experiences },
  { id: 'contacts', label: ui.value.nav.contacts }
])
</script>

<template>
  <nav class="flex flex-wrap items-center gap-4 sm:gap-6">
    <a
      v-for="item in navItems"
      :key="item.id"
      :href="`#${item.id}`"
      class="text-sm transition-colors"
      :class="compact ? 'text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]' : 'text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]'"
    >
      {{ item.label }}
    </a>
  </nav>
</template>
