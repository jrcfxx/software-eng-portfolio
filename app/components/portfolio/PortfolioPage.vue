<script setup lang="ts">
defineProps<{
  embedded?: boolean
}>()
</script>

<template>
  <div>
    <PortfolioHeroSection :embedded="embedded" />
    <PortfolioProjectsSection />
    <PortfolioSkillsSection />
    <PortfolioAboutSection />
    <PortfolioExperienceSection />
    <PortfolioContactSection />
    <PortfolioHighlightsSection />
  </div>
</template>
