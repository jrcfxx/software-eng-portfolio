<script setup lang="ts">
defineProps<{
  compact?: boolean
}>()
</script>

<template>
  <span class="inline-flex items-center gap-3 text-[var(--portfolio-text)]">
    <span class="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--portfolio-accent)] bg-[var(--portfolio-bg-soft)] text-sm font-bold text-[var(--portfolio-accent)]">
      JF
    </span>
    <span
      v-if="!compact"
      class="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--portfolio-text-muted)]"
    >
      Júlia Fiorini
    </span>
  </span>
</template>
