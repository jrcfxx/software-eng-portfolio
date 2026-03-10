<script setup lang="ts">
const { locale, setLocale } = usePortfolioLocale()
</script>

<template>
  <div class="flex items-center gap-1 border-l border-[var(--portfolio-border)] pl-4">
    <button
      type="button"
      :class="locale === 'pt-BR' ? 'text-[var(--portfolio-accent)] font-semibold' : 'text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]'"
      @click="setLocale('pt-BR')"
    >
      PT
    </button>
    <span class="text-[var(--portfolio-text-muted)]">|</span>
    <button
      type="button"
      :class="locale === 'en' ? 'text-[var(--portfolio-accent)] font-semibold' : 'text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]'"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>
