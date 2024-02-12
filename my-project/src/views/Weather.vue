<template>
  <div>
    <AudioPlayer />
    <Forecast />
    <router-view />
  </div>
</template>

<script setup>
import AudioPlayer from "../components/AudioPlayer.vue";
import Forecast from "../components/Forecast.vue";
</script>
