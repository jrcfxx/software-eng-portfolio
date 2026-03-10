<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()
</script>

<template>
  <div class="min-h-screen bg-[var(--portfolio-bg)] text-[var(--portfolio-text)] font-sans">
    <ClientOnly>
      <SplineBackground :opacity="0.7" />
    </ClientOnly>

    <aside class="fixed left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 pl-3 md:pl-4">
      <SocialLinks vertical />
      <a
        href="#contacts"
        class="w-10 h-10 rounded-full border border-[var(--portfolio-border)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
        aria-label="Contato"
      >
        <UIcon
          name="i-lucide-mail"
          class="w-5 h-5"
        />
      </a>
    </aside>

    <div class="md:ml-16">
      <header class="border-b border-[var(--portfolio-border)] sticky top-0 z-10 bg-[var(--portfolio-bg)]/95 backdrop-blur">
        <div class="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <NuxtLink
            to="/"
            class="text-lg font-bold text-[var(--portfolio-text)] hover:text-[var(--portfolio-accent)] transition-colors"
          >
            <AppLogo />
          </NuxtLink>
          <div class="flex flex-wrap items-center gap-4 sm:gap-6">
            <PortfolioNav />
            <NuxtLink
              to="/experience"
              class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors"
            >
              {{ ui.portfolio3d }}
            </NuxtLink>
            <LocaleSwitcher />
          </div>
        </div>
      </header>

      <main>
        <slot />
      </main>

      <footer class="border-t border-[var(--portfolio-border)] mt-16">
        <div class="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div class="flex flex-col gap-1">
              <span class="font-semibold">{{ portfolio.name }}</span>
              <a
                :href="`mailto:${portfolio.email}`"
                class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] flex items-center gap-2"
              >
                <UIcon
                  name="i-lucide-mail"
                  class="w-4 h-4"
                />
                {{ portfolio.email }}
              </a>
              <span class="text-sm text-[var(--portfolio-text-muted)]">{{ portfolio.role }}</span>
              <span class="text-sm text-[var(--portfolio-text-muted)]">{{ portfolio.location }}</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-[var(--portfolio-text-muted)] mb-2">
                {{ ui.media }}
              </p>
              <SocialLinks />
            </div>
          </div>
          <p class="text-center text-sm text-[var(--portfolio-text-muted)]">
            © Copyright {{ new Date().getFullYear() }}. Built by {{ portfolio.shortName }}
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
