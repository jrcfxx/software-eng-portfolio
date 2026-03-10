<script setup lang="ts">
/**
 * Portfólio exibido dentro do iframe na tela do modelo 3D.
 * Layout embed: minimalista (sem Spline, sem sidebar).
 */
definePageMeta({ layout: 'embed' })

const { portfolio } = usePortfolioContent()
</script>

<template>
  <div class="md:ml-0">
    <!-- Header mínimo para navegação dentro do iframe -->
    <header class="border-b border-[var(--portfolio-border)] sticky top-0 z-10 bg-[var(--portfolio-bg)]/95 backdrop-blur">
      <div class="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <AppLogo compact />
          <span class="text-lg font-bold text-[var(--portfolio-text)]">{{ portfolio.shortName }}</span>
        </div>
        <PortfolioNav compact />
      </div>
    </header>
    <PortfolioPage embedded />
  </div>
</template>
