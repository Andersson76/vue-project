<template>
  <div class="text-center mt-8">
    <h2 class="text-2xl font-bold">Audio Player</h2>

    <button
      @click="toggleAudio"
      class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
    >
      {{ isAudioPlaying ? "Pause Audio" : "Play Audio" }}
    </button>

    <p class="mt-2">{{ audioStatusMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const audioElement = ref(null);
const isAudioPlaying = ref(false);
const audioStatusMessage = ref("Audio is stopped");

const toggleAudio = () => {
  if (audioElement.value) {
    if (isAudioPlaying.value) {
      audioElement.value.pause();
      audioElement.value.currentTime = 0;
    } else {
      audioElement.value.play();
    }
    isAudioPlaying.value = !isAudioPlaying.value;
  }
};

onMounted(() => {
  // Kontrollera att audioElement har ett värde innan du försöker lägga till händelselyssnare
  if (audioElement.value) {
    audioElement.value.addEventListener("playing", () => {
      audioStatusMessage.value = "Audio is Playing";
    });

    audioElement.value.addEventListener("pause", () => {
      audioStatusMessage.value = "Audio is Paused";
    });

    audioElement.value.addEventListener("ended", () => {
      audioStatusMessage.value = "Audio is Ended";
    });
  }
});
</script>
