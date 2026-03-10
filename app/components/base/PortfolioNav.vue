<template>
  <nav class="flex items-center gap-6">
    <a
      v-for="item in navItems"
      :key="item.id"
      :href="`#${item.id}`"
      class="text-sm font-medium text-muted hover:text-foreground transition-colors"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
const { ui } = usePortfolioLocale()

const navItems = computed(() => [
  { id: 'home', label: ui.value.nav.home },
  { id: 'works', label: ui.value.nav.works },
  { id: 'about-me', label: ui.value.nav.aboutMe },
  { id: 'experiences', label: ui.value.nav.experiences },
  { id: 'contacts', label: ui.value.nav.contacts }
])
</script>
