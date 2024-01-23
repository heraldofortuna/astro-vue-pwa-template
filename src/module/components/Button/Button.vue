<template>
  <button
    class="flex items-center justify-center rounded-2xl border border-gray-500 p-6 text-center transition duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500">
    <span class="text-sm font-medium">{{ label }}</span>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      label: String,
    },
  };
</script>
