<template>
  <button
    class="w-full flex items-center justify-center rounded-2xl border border-gray-500 p-6 text-center transition duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500">
    <span class="text-sm md:text-base font-medium">{{ text }}</span>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
}>();
</script>
