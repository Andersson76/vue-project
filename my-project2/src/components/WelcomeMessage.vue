<template>
  <div>
    <p class="text-indigo-600 mt-4">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
