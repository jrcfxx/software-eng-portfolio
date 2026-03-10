<script setup lang="ts">
const { portfolio, ui } = usePortfolioContent()
const {
  form,
  errors,
  formStatus,
  formSuccess,
  formSubmitting,
  onSubmit
} = useContactForm()
</script>

<template>
  <section
    id="contacts"
    class="max-w-6xl mx-auto px-4 md:px-6 py-16"
  >
    <h2 class="section-title">
      <span class="hash">#</span>{{ ui.contacts }}
    </h2>
    <div class="section-title-underline" />

    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-6">
        <p class="text-[var(--portfolio-text-muted)]">
          {{ portfolio.contactsIntro }}
        </p>
        <div class="portfolio-box">
          <h3 class="font-semibold text-[var(--portfolio-text)] mb-4">
            {{ ui.messageMeHere }}
          </h3>
          <div class="space-y-3 text-sm">
            <a
              :href="portfolio.links.whatsapp"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
            >
              <UIcon
                name="i-simple-icons-whatsapp"
                class="w-4 h-4 shrink-0"
              />
              {{ portfolio.phone }}
            </a>
            <a
              :href="`mailto:${portfolio.email}`"
              class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
            >
              <UIcon
                name="i-lucide-mail"
                class="w-4 h-4 shrink-0"
              />
              {{ portfolio.email }}
            </a>
            <div class="flex items-center gap-2 text-[var(--portfolio-text-muted)]">
              <UIcon
                name="i-lucide-phone"
                class="w-4 h-4 shrink-0"
              />
              {{ ui.phone }}: {{ portfolio.phone }}
            </div>
            <a
              :href="portfolio.links.linkedin"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
            >
              <UIcon
                name="i-simple-icons-linkedin"
                class="w-4 h-4 shrink-0"
              />
              LinkedIn
            </a>
            <a
              :href="portfolio.links.github"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
            >
              <UIcon
                name="i-simple-icons-github"
                class="w-4 h-4 shrink-0"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="portfolio-box">
        <h3 class="font-semibold text-[var(--portfolio-text)] mb-4">
          {{ ui.sendMessage }}
        </h3>
        <form
          class="space-y-4"
          @submit.prevent="onSubmit"
        >
          <div>
            <label
              for="contact-name"
              class="block text-sm font-medium text-[var(--portfolio-text-muted)] mb-1"
            >
              {{ ui.yourName }}
            </label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              name="name"
              required
              :placeholder="ui.yourName"
              class="w-full px-3 py-2 bg-[var(--portfolio-bg)] border border-[var(--portfolio-border)] text-[var(--portfolio-text)] placeholder-[var(--portfolio-text-muted)] focus:border-[var(--portfolio-accent)] focus:outline-none"
              :class="{ 'border-red-500': errors.name }"
            >
            <p
              v-if="errors.name"
              class="mt-1 text-xs text-red-400"
            >
              {{ errors.name }}
            </p>
          </div>

          <div>
            <label
              for="contact-email"
              class="block text-sm font-medium text-[var(--portfolio-text-muted)] mb-1"
            >
              {{ ui.yourEmail }}
            </label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              name="email"
              required
              :placeholder="ui.yourEmail"
              class="w-full px-3 py-2 bg-[var(--portfolio-bg)] border border-[var(--portfolio-border)] text-[var(--portfolio-text)] placeholder-[var(--portfolio-text-muted)] focus:border-[var(--portfolio-accent)] focus:outline-none"
              :class="{ 'border-red-500': errors.email }"
            >
            <p
              v-if="errors.email"
              class="mt-1 text-xs text-red-400"
            >
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label
              for="contact-message"
              class="block text-sm font-medium text-[var(--portfolio-text-muted)] mb-1"
            >
              {{ ui.message }}
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              required
              rows="4"
              :placeholder="ui.message"
              class="w-full px-3 py-2 bg-[var(--portfolio-bg)] border border-[var(--portfolio-border)] text-[var(--portfolio-text)] placeholder-[var(--portfolio-text-muted)] focus:border-[var(--portfolio-accent)] focus:outline-none resize-y"
              :class="{ 'border-red-500': errors.message }"
            />
            <p
              v-if="errors.message"
              class="mt-1 text-xs text-red-400"
            >
              {{ errors.message }}
            </p>
          </div>

          <p
            v-if="formStatus"
            class="text-sm"
            :class="formSuccess ? 'text-green-400' : 'text-red-400'"
          >
            {{ formStatus }}
          </p>

          <button
            type="submit"
            class="w-full py-3 border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-bg)] transition-colors"
            :disabled="formSubmitting"
          >
            {{ formSubmitting ? '...' : ui.sendMessage }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
