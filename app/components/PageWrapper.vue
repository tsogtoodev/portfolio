<script setup lang="ts">
import { motion } from "motion-v";

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();
</script>

<template>
  <motion.div
    :class="
      cn(
        'absolute top-0 left-0 flex h-auto w-full flex-col items-start overflow-y-auto sm:h-screen sm:flex-row',
        attrs.class as string,
      )
    "
  >
    <slot />
  </motion.div>
</template>
