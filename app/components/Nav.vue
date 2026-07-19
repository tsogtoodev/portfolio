<script setup lang="ts">
const PAGES = {
  home: "/",
  blog: "/blog",
  more: "/more",
} as const;

const route = useRoute();

// Hide the nav on individual blog posts (they render a full-screen overlay).
const isBlogPost = computed(
  () => route.path.startsWith("/blog/") && route.path !== "/blog",
);

const isActive = (href: string) =>
  href === "/" ? route.path === href : route.path.includes(href);
</script>

<template>
  <div
    v-if="!isBlogPost"
    key="nav"
    class="font-karla text-tertiary fixed top-10 left-10 z-[100] hidden flex-row gap-6 pb-3 text-sm sm:flex"
  >
    <NuxtLink
      v-for="[name, href] in Object.entries(PAGES)"
      :key="name"
      :to="href"
      :class="
        cn('hover:text-secondary transition-colors duration-100', {
          'text-primary hover:text-primary font-medium': isActive(href),
        })
      "
    >
      {{ name }}
    </NuxtLink>
  </div>
</template>
