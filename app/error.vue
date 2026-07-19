<script setup lang="ts">
import { motion } from "motion-v";
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
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

    <main
      class="animate-app-enter relative max-sm:h-[100svh] max-sm:overflow-y-auto"
    >
      <PageWrapper>
        <PageContent>
          <p class="text-sm">
            {{ error.statusCode }} - have a moment to yourself.
          </p>
        </PageContent>

        <motion.div
          class="fixed right-18 bottom-0 flex h-full w-min flex-col items-end justify-end"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, ease: [0.26, 1, 0.6, 1] }"
        >
          <h1
            class="text-tertiary/15 text-[24rem] leading-[24rem] font-black"
            :style="{
              filter: 'drop-shadow(0 4px 2px var(--color-background))',
            }"
          >
            {{ error.statusCode }}
          </h1>
        </motion.div>
      </PageWrapper>
    </main>
  </div>
</template>
