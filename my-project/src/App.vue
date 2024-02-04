<template>
  <div class="bg-gray-100 p-4">
    <nav class="bg-indigo-600 p-4 mb-4 fixed top-0 left-0 w-full z-10">
      <router-link to="/" class="text-white mr-4">Home</router-link>
      <router-link to="/weather" class="text-white">Weather</router-link>
    </nav>
  </div>
  <router-view class="mt-16" />
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
