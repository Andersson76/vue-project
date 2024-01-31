<script setup>
import { ref } from "vue";

defineProps({
  button: String,
});
</script>

<template>
  <button
    type="button"
    class="rounded-full bg-indigo-600 px-4 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Press here to continue
  </button>
  <p class="text-indigo-600 mt-4">
    Welcome in to check local weather and other cool stuff
  </p>
</template>
