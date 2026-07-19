<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";

const props = defineProps<{
  href: string;
  preview: string;
}>();

const show = ref(false);
const linkRef = ref<HTMLAnchorElement | null>(null);
const marginTop = ref("0px");

const onEnter = () => {
  marginTop.value = `calc(-${
    linkRef.value?.getBoundingClientRect().height ?? 0
  }px)`;
  show.value = true;
};

const onLeave = () => {
  show.value = false;
};

const displayHref = computed(() => props.href.split("://")[1]);
</script>

<template>
  <div>
    <ClientOnly>
      <AnimatePresence>
        <motion.a
          v-if="show"
          :initial="{ scale: 0.98, x: -4, opacity: 0 }"
          :animate="{ scale: 1, x: 0, opacity: 1 }"
          :exit="{
            scale: 0.98,
            x: -4,
            opacity: 0,
            transition: { delay: 0.015 },
          }"
          :href="href"
          target="_blank"
          rel="noreferrer noopener"
          :transition="{ duration: 0.25, ease: [0.26, 1, 0.6, 1] }"
          class="group fixed left-54 z-10 max-w-64 min-w-64 overflow-clip rounded-[8px] border border-black/20 bg-[#E7E5E4] p-0.5 shadow-lg transition-colors duration-100 hover:bg-[#efebe9] max-sm:hidden"
          :style="{ marginTop }"
          @mouseover="show = true"
          @mouseleave="onLeave"
        >
          <NuxtImg
            :src="preview"
            :alt="`Screenshot of ${href}'s landing`"
            :width="512"
            :height="272"
            class="bg-tertiary overflow-clip rounded-[6px]"
          />

          <p
            class="text-tertiary w-full rounded-full px-1.5 pt-1 text-center text-xs font-medium transition-colors duration-100 group-hover:text-blue-700"
          >
            {{ displayHref }}
          </p>
        </motion.a>
      </AnimatePresence>
    </ClientOnly>

    <a
      ref="linkRef"
      :href="href"
      target="_blank"
      rel="noreferrer noopener"
      class="group relative flex w-full max-w-44 flex-col whitespace-nowrap"
      @mouseover="onEnter"
      @mouseleave="onLeave"
    >
      <slot />
    </a>
  </div>
</template>
