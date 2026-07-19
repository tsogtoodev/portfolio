<script setup lang="ts">
import { motion } from "motion-v";

const PAGES = {
  home: "/",
  blog: "/blog",
  more: "/more",
} as const;

const route = useRoute();
const router = useRouter();

const isActive = (href: string) =>
  href === "/" ? route.path === href : route.path.includes(href);

const navigate = (href: string) => {
  document.querySelector("main")?.scrollTo({ top: 0, behavior: "instant" });
  router.push(href);
};
</script>

<template>
  <motion.div
    layout
    class="font-karla text-tertiary border-tertiary/15 fixed bottom-4 left-1/2 z-100 w-min -translate-x-1/2 rounded-full border bg-white p-1.5 text-sm shadow-xl shadow-black/5 sm:hidden"
  >
    <div class="flex w-full flex-row items-center justify-center gap-4">
      <button
        v-for="[name, href] in Object.entries(PAGES)"
        :key="name"
        :class="
          cn(
            'hover:text-secondary pointer-events-auto relative px-3 py-1.5 transition-all duration-100 select-none [-webkit-touch-callout:none] active:scale-90',
            { 'text-primary hover:text-primary font-medium': isActive(href) },
          )
        "
        @touchstart="preloadRouteComponents(href)"
        @touchend="navigate(href)"
        @click="navigate(href)"
      >
        {{ name }}

        <motion.span
          v-if="isActive(href)"
          :layout-id="'highlight'"
          :style="{ position: 'absolute' }"
          :transition="{ duration: 0.35, ease: [0.26, 1, 0.6, 1] }"
          class="bg-tertiary/5 border-secondary/5 top-1/2 left-1/2 h-full w-full -translate-1/2 rounded-full border"
        />
      </button>
    </div>
  </motion.div>
</template>
