<script setup lang="ts">
import { motion } from "motion-v";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();

const date = ref(dayjs().tz("Asia/Ulaanbaatar"));

let id: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  const update = () => {
    date.value = dayjs().tz("Asia/Ulaanbaatar");
  };

  update();
  id = setInterval(update, 60 * 1000);
});

onUnmounted(() => {
  if (id) clearInterval(id);
});
</script>

<template>
  <motion.div
    :class="
      cn(
        'max-xs:p-8 sticky top-0 flex h-min w-full flex-col p-10 max-sm:relative max-sm:min-h-min max-sm:overflow-y-auto max-sm:!pt-10 max-sm:pb-8 sm:h-full sm:max-w-lg sm:min-w-md sm:pt-16',
        attrs.class as string,
      )
    "
  >
    <h1 class="text-primary xs:mt-4 mt-0 mb-1 text-2xl font-medium">
      Tsogtbayar Davaadorj
    </h1>

    <motion.div
      :initial="PAGE_TRANSITION.initial"
      :animate="PAGE_TRANSITION.animate"
      :exit="PAGE_TRANSITION.exit"
      :transition="PAGE_TRANSITION.transition"
    >
      <slot />
    </motion.div>

    <footer
      class="mt-auto flex w-full flex-row justify-between max-sm:hidden"
    >
      <Tooltip
        :content="`This is my time. I'm probably ${date.hour() > 1 && date.hour() < 10 ? 'sleeping' : 'awake'}.`"
        class="whitespace-nowrap"
      >
        <p
          class="text-primary flex cursor-default flex-row items-center gap-1.5 text-sm"
        >
          <span class="font-medium">{{ date.format("h:mm A") }}</span>
          <span class="bg-primary block size-[3px] rounded-full" />
          <span class="text-tertiary">{{ date.format("MMM D, YYYY") }}</span>
        </p>
      </Tooltip>
    </footer>
  </motion.div>
</template>
