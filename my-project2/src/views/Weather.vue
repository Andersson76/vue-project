<template>
  <div>
    <AudioPlayer audioFilePath="/chillDub.mp3" />
    <Forecast />
    <router-view />
  </div>
</template>

<script setup>
import AudioPlayer from "../components/AudioPlayer.vue";
import Forecast from "../components/Forecast.vue";
</script>
