<script setup lang="ts">
const el = ref<HTMLSpanElement | null>(null);

let interval: ReturnType<typeof setInterval> | undefined;

const update = () => {
  const age = (
    (new Date().getTime() - new Date("1997-08-21T17:10:00Z").getTime()) /
    (365.25 * 24 * 60 * 60 * 1000)
  ).toFixed(10);

  if (el.value) el.value.innerText = age;
};

onMounted(() => {
  interval = setInterval(update, 1);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<template>
  <span ref="el" />
</template>
