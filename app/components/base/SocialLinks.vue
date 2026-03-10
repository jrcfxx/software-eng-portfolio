<script setup lang="ts">
const { portfolio } = usePortfolioContent()

const props = withDefaults(defineProps<{
  vertical?: boolean
  includePortfolioRepo?: boolean
  iconOnly?: boolean
}>(), {
  vertical: false,
  includePortfolioRepo: true,
  iconOnly: true
})

const socialLinks = computed(() => {
  const items = [
    {
      id: 'github',
      href: portfolio.value.links.github,
      label: 'GitHub',
      icon: 'i-simple-icons-github'
    },
    {
      id: 'linkedin',
      href: portfolio.value.links.linkedin,
      label: 'LinkedIn',
      icon: 'i-simple-icons-linkedin'
    },
    {
      id: 'whatsapp',
      href: portfolio.value.links.whatsapp,
      label: 'WhatsApp',
      icon: 'i-simple-icons-whatsapp'
    }
  ]

  if (props.includePortfolioRepo) {
    items.push({
      id: 'portfolio',
      href: portfolio.value.links.portfolioRepo,
      label: 'Portfolio repository',
      icon: 'i-lucide-folder-git-2'
    })
  }

  return items
})
</script>

<template>
  <div :class="vertical ? 'flex flex-col gap-4' : 'flex items-center gap-3'">
    <a
      v-for="item in socialLinks"
      :key="item.id"
      :href="item.href"
      target="_blank"
      rel="noopener"
      :aria-label="item.label"
      :class="iconOnly
        ? 'w-10 h-10 rounded-full border border-[var(--portfolio-border)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors'
        : 'text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors flex items-center gap-2'"
    >
      <UIcon
        :name="item.icon"
        class="w-5 h-5"
      />
      <span
        v-if="!iconOnly"
        class="text-sm"
      >
        {{ item.label }}
      </span>
    </a>
  </div>
</template>
