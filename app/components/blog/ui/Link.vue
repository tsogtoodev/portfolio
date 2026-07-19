<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="hover:text-secondary font-medium underline underline-offset-2"
  >
    <slot />
  </a>
</template>
