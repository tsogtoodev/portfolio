<script setup lang="ts">
// NOTE: <main> is a plain element (not motion). motion-v's enter animation does
// not fire on an element that wraps Nuxt's Suspense boundary (NuxtPage), which
// left it stuck at the initial opacity:0 and hid the entire page. The app-shell
// entrance uses a reliable CSS animation (.animate-app-enter) instead; per-page
// content still animates via motion-v inside each page (PageContent…).
import { motion } from "motion-v";

const route = useRoute();

// Play the "pop" sound on every route change (client only).
if (import.meta.client) {
  watch(
    () => route.path,
    () => {
      const click = new Audio("/pop.mp3");
      click.volume = 0.5;
      void click.play().catch(() => null);
    },
  );
}
</script>

<template>
  <div class="@container/screen h-full w-full font-sans antialiased">
    <!-- Sun rays -->
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 0.2 }"
      :transition="{ duration: 2, ease: [0.26, 1, 0.6, 1] }"
      class="fixed top-0 left-0 z-[-3] flex h-screen w-screen flex-col items-center justify-center gap-32 bg-gradient-to-l from-[#121212] to-white to-75%"
      :style="{
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)',
      }"
    >
      <div
        class="bg-background z-[-2] mt-80 ml-[50vw] min-h-34 w-[200vw] blur-md"
        :style="{ animation: 'sway 7s infinite' }"
      />
      <div
        class="bg-background z-[-2] mt-48 ml-[50vw] min-h-30 w-[200vw] blur-md"
        :style="{ animation: 'sway 6s infinite' }"
      />
      <div
        class="bg-background z-[-2] mt-18 ml-[50vw] min-h-64 w-[200vw] blur-md"
        :style="{ animation: 'sway 8s infinite' }"
      />
    </motion.div>

    <Nav />
    <MobileNav />

    <!-- Plain main with a CSS entrance; see note in script setup. -->
    <main
      class="animate-app-enter relative max-sm:h-[100svh] max-sm:overflow-y-auto"
    >
      <NuxtPage />
    </main>
  </div>
</template>
