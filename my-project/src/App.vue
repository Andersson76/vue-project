<template>
  <nav class="bg-indigo-600 p-4 mb-4 mt-2 fixed top-0 left-0 w-full z-10">
    <router-link to="/" class="text-white mr-4">Home</router-link>
    <router-link to="/weather" class="text-white">Weather</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
</script>
