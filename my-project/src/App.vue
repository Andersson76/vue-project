<template>
  <div class="bg-gray-100 p-4">
    <nav class="bg-indigo-600 p-4 mb-4">
      <router-link to="/" class="text-white mr-4">Home</router-link>
      <router-link to="/weather" class="text-white">Weather</router-link>
    </nav>
  </div>
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
