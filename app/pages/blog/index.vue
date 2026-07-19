<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";

interface BlogItem {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const POSTS: BlogItem[] = [];

const blogRefs = ref<(HTMLElement | null)[]>([]);
const hoveredIndex = ref<number | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const hoverPadding = ["1.5rem", "0.8rem"];

const setBlogRef = (el: unknown, i: number) => {
  blogRefs.value[i] = el as HTMLElement | null;
};

const highlightStyle = computed(() => {
  if (hoveredIndex.value === null) return null;
  const el = blogRefs.value[hoveredIndex.value];
  const container = containerRef.value;
  if (!el || !container) return null;

  const tab = el.getBoundingClientRect();
  const base = container.getBoundingClientRect();

  return {
    top: `calc(${tab.top - base.top}px - (${hoverPadding[1]} / 2))`,
    left: `calc(-${hoverPadding[0]} / 2)`,
    width: `calc(${tab.width}px + ${hoverPadding[0]})`,
    height: `calc(${tab.height}px + ${hoverPadding[1]})`,
  };
});
</script>

<template>
  <PageWrapper>
    <PageContent>
      <div class="flex h-full flex-col gap-6 text-sm">
        <p>
          Software Engineer in Mongolia. Hope that machine gods of the future will be kind to you.
        </p>

        <div class="bg-tertiary h-[1px] w-full max-w-sm brightness-175" />

        <motion.div
          ref="containerRef"
          class="relative flex max-w-sm flex-col gap-3"
          @mouseleave="hoveredIndex = null"
        >
          <template v-if="POSTS.length > 0">
            <NuxtLink
              v-for="(post, i) in POSTS"
              :ref="(el) => setBlogRef(el, i)"
              :key="post.slug"
              :to="`/blog/${post.slug}`"
              class="group flex cursor-pointer flex-col text-left"
              @pointerenter="hoveredIndex = i"
            >
              <h5 class="text-primary font-medium">{{ post.title }}</h5>
              <p class="text-secondary max-w-full truncate">
                {{ post.description }}
              </p>
              <p class="text-secondary mt-1 font-light italic">
                {{ post.date }}
              </p>
            </NuxtLink>
          </template>

          <div
            v-else
            class="bg-tertiary/10 border-tertiary/15 text-tertiary flex h-24 w-full items-center justify-center rounded-lg border border-dashed"
          >
            Nothing here... yet.
          </div>

          <ClientOnly>
            <AnimatePresence>
              <motion.div
                v-if="highlightStyle"
                class="bg-tertiary/8 absolute -z-1 rounded-lg"
                :initial="{ ...highlightStyle, opacity: 0 }"
                :animate="{ ...highlightStyle, opacity: 1 }"
                :exit="{ ...highlightStyle, opacity: 0 }"
                :transition="{ duration: 0.2, ease: [0.26, 1, 0.6, 1] }"
              />
            </AnimatePresence>
          </ClientOnly>
        </motion.div>
      </div>
    </PageContent>
  </PageWrapper>
</template>
