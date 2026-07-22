<script setup lang="ts">
import { motion } from "motion-v";
import type { LanyardData } from "~/types/lanyard";

interface GitHubRepo {
  stargazers_count: number;
  name: string;
  html_url: string;
}

const PROJECTS: Record<string, string> = {
  "lanyard-profile-readme": "embed discord presence in your github profile",
  "tsogtoo.dev": "my personal website",
};

// Replaces getStaticProps — cached/revalidated via the /api/projects route rule.
const { data: repos } = await useFetch<GitHubRepo[]>("/api/projects");

const projectList = computed(() =>
  Object.entries(PROJECTS)
    .map(([name, description]) => ({
      name,
      description,
      repo: repos.value?.find((e) => e.name === name),
    }))
    .filter((p) => p.repo),
);

const activity = ref<LanyardData | null>(null);

let task: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  const update = () =>
    fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) activity.value = data.data;
      });

  task = setInterval(update, 30 * 1000); // every 30 seconds
  update(); // initial
});

onUnmounted(() => {
  if (task) clearInterval(task);
});
</script>

<template>
  <PageWrapper>
    <PageContent>
      <div class="text-primary flex h-full flex-col gap-6 text-sm max-md:pb-14">
        <div class="flex flex-col">
          <p class="mb-2">
            Software Engineer in Mongolia. Hope that machine gods of the future will be kind to you.
          </p>
          <div class="flex flex-row flex-wrap gap-6 gap-y-1">
            <a
              class="text-tertiary hover:text-primary cursor-pointer whitespace-nowrap transition-colors duration-100"
              href="https://github.com/tsogtoodev"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              class="text-tertiary hover:text-primary cursor-pointer whitespace-nowrap transition-colors duration-100"
              href="https://www.linkedin.com/in/tsogtbayar-davaadorj-79b975354/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>

            <a
              href="mailto:tsogtoo.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-tertiary hover:text-primary cursor-pointer whitespace-nowrap transition-colors duration-100"
            >
              message
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="leading-none font-bold">philosophy</h3>
          <div class="ml-3">
            <p>- ship fast, with intention</p>
            <p>- pour my heart out into the product</p>
            <p>- always try to achieve excellence</p>
          </div>
        </div>

        <div v-if="false" class="flex flex-col gap-2">
          <h3 class="leading-none font-bold">experience</h3>

          <div class="text-primary relative ml-3 flex flex-col gap-1.5">
            <LinkPreview preview="/main/cside.webp" href="https://cside.dev">
              <p>
                <span
                  class="font-medium transition-colors duration-150 group-hover:text-[#2500DC]"
                >
                  c/side
                </span>
                <span class="font-normal italic">(2024 - present)</span>
              </p>
              <p class="text-tertiary">frontend engineer</p>
            </LinkPreview>

            <LinkPreview preview="/main/incard.webp" href="https://incard.co">
              <p>
                <span
                  class="font-medium transition-colors duration-150 group-hover:text-[#8bd442]"
                >
                  incard
                </span>
                <span class="font-normal italic">(2024, 2025)</span>
              </p>
              <p class="text-tertiary">frontend engineer (contract)</p>
            </LinkPreview>

            <LinkPreview
              preview="/main/dimension.webp"
              href="https://dimension.dev"
            >
              <p>
                <span
                  class="text-primary font-medium transition-colors duration-150 group-hover:text-transparent"
                  :style="{
                    background:
                      'linear-gradient(135deg, color(display-p3 .6196078431 .4784313725 1/1) 0%,color(display-p3 .9960784314 .5450980392 .7333333333/1) 33.33%,color(display-p3 1 .7411764706 .4784313725/1) 100%)',
                    backgroundClip: 'text',
                  }"
                >
                  dimension
                </span>
                <span class="font-normal italic">(2023 - 2024)</span>
              </p>
              <p class="text-tertiary">full-stack engineer</p>
            </LinkPreview>
          </div>
        </div>

        <div v-if="false" class="flex flex-col gap-2">
          <h3 class="leading-none font-bold">projects</h3>

          <div class="ml-3 flex flex-col gap-1.5">
            <a
              v-for="project in projectList"
              :key="project.name"
              :href="project.repo!.html_url"
              class="group flex cursor-pointer flex-col"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p
                class="flex flex-row gap-1 font-medium transition-colors duration-100 group-hover:text-blue-700"
              >
                <span>{{ project.name }}</span>

                <span
                  class="text-tertiary group-hover:text-secondary ml-0.5 items-center font-light italic transition-colors duration-100"
                >
                  [{{ project.repo!.stargazers_count }} stars]
                </span>
              </p>
              <p class="opacity-50">{{ project.description }}</p>
            </a>
          </div>
        </div>
      </div>
    </PageContent>

    <motion.div
      v-if="activity?.listening_to_spotify"
      :initial="ACTIVITY_TRANSITION.initial"
      :animate="ACTIVITY_TRANSITION.animate"
      :exit="ACTIVITY_TRANSITION.exit"
      :transition="{ duration: 1.5, ease: [0.26, 1, 0.6, 1] }"
      class="absolute right-10 bottom-10 mt-auto w-auto flex-col items-end justify-end max-sm:hidden"
    >
      <div class="flex flex-row items-center gap-2">
        <div class="relative size-1.5 overflow-visible">
          <span class="absolute size-[5px] rounded-full bg-green-600" />
          <span
            class="absolute size-[5px] animate-ping rounded-full bg-[color(display-p3_0.385_0.8_0.414_/_1)] [animation-duration:2s]"
          />
        </div>

        <div class="text-secondary mt-0.5 flex flex-row gap-1 text-end text-sm">
          Listening to
          <span class="relative w-min whitespace-nowrap">
            <Tooltip
              class="absolute -top-18 left-1/2 !ml-0 -translate-x-1/2 overflow-visible border-none p-0"
            >
              <template #content>
                <div class="relative h-24 w-24 overflow-visible">
                  <img
                    :src="activity.spotify.album_art_url"
                    :width="96"
                    :height="96"
                    :alt="activity.spotify.album"
                    fetchpriority="high"
                    class="absolute rounded-md shadow-md select-none"
                    :draggable="false"
                  />
                </div>
              </template>

              <a
                :href="`https://open.spotify.com/track/${activity.spotify.track_id}`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary cursor-alias rounded-[5px] font-medium"
              >
                {{ activity.spotify.song }}
              </a>
            </Tooltip>
          </span>
          by
          <span class="text-primary font-medium">{{
            activity.spotify.artist
          }}</span>
        </div>
      </div>
    </motion.div>
  </PageWrapper>
</template>
