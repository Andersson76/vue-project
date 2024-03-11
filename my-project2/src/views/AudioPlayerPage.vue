<template>
  <div>
    <h2 class="text-2xl font-bold">{{ $route.params.player }}</h2>
    <AudioPlayer audioFilePath="/chillDub.mp3" />
  </div>
</template>

<script setup>
import AudioPlayer from "../components/AudioPlayer.vue";
</script>
