<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";

defineOptions({ inheritAttrs: false });

defineProps<{
  content?: string;
}>();

const attrs = useAttrs();
const show = ref(false);
</script>

<template>
  <div>
    <ClientOnly>
      <AnimatePresence>
        <motion.div
          v-if="show"
          :initial="{ scale: 0.99, y: 2, opacity: 0 }"
          :animate="{ scale: 1, y: 0, opacity: 1 }"
          :exit="{ scale: 0.99, y: 2, opacity: 0 }"
          :transition="{ duration: 0.15, ease: [0.26, 1, 0.6, 1] }"
          :class="
            cn(
              'group border-primary/10 fixed left-10 z-10 w-min overflow-clip rounded-md border bg-stone-50 p-0.5 transition-colors duration-100 max-sm:hidden',
              attrs.class as string,
            )
          "
          :style="{ marginTop: '-2rem', marginLeft: '-0.5rem' }"
          @mouseover="show = true"
          @mouseleave="show = false"
        >
          <p
            v-if="content"
            class="text-primary w-full rounded-full px-1.5 pt-1 text-center text-xs transition-colors duration-100"
          >
            {{ content }}
          </p>
          <slot v-else name="content" />
        </motion.div>
      </AnimatePresence>
    </ClientOnly>

    <div @mouseover="show = true" @mouseleave="show = false">
      <slot />
    </div>
  </div>
</template>
