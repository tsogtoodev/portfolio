<script setup lang="ts">
import { motion, useDragControls } from "motion-v";

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();
const controls = useDragControls();
const constraintsRef = ref(null);
</script>

<template>
  <motion.div
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :exit="{ opacity: 0 }"
    :transition="{ duration: 0.5, ease: [0.26, 1, 0.6, 1] }"
    :class="
      cn(
        'absolute top-0 left-0 z-100 h-screen w-full overflow-y-auto bg-white sm:px-14',
        attrs.class as string,
      )
    "
  >
    <NuxtLink
      to="/blog"
      class="hover:text-primary text-tertiary relative top-10 cursor-pointer text-sm transition-colors duration-100 max-md:ml-8 md:sticky md:top-10 md:left-0"
    >
      Back
    </NuxtLink>

    <slot />

    <!-- Scroller -->
    <motion.div
      ref="constraintsRef"
      class="fixed top-10 right-10 hidden h-[50vh] w-32 rounded-lg border border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 p-0.5"
    >
      <motion.div
        drag="y"
        :drag-controls="controls"
        :drag-constraints="constraintsRef"
        :drag-elastic="0"
        :drag-transition="{ bounceStiffness: 50, bounceDamping: 100 }"
        class="!cursor-drag h-18 w-full rounded-md border border-gray-300 bg-white"
      />
    </motion.div>
  </motion.div>
</template>
