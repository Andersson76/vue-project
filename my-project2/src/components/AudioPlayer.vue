<template>
  <div class="text-center mt-16">
    <h2 class="text-2xl font-bold">Audio Player</h2>

    <button
      @click="toggleAudio"
      :class="{ 'button-clicked': isAudioClicked }"
      class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
    >
      {{ isAudioPlaying ? "Pause Audio" : "Play Audio" }}
    </button>

    <p class="mb-8 mt-4">{{ audioStatusMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";

const audioElement = ref(new Audio("/chillDub.mp3"));
const isAudioPlaying = ref(false);
const isAudioClicked = ref(false);
const audioStatusMessage = ref("Audio is stopped");

const toggleAudio = () => {
  try {
    if (audioElement.value) {
      if (isAudioPlaying.value) {
        audioElement.value.pause();
      } else {
        audioElement.value.play();
      }
      isAudioPlaying.value = !isAudioPlaying.value;
      isAudioClicked.value = true;
      emit("audio-status-changed", isAudioPlaying.value);
    }
  } catch (error) {
    console.error("Error toggling audio: ", error);
  }
};

onMounted(() => {
  try {
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
  } catch (error) {
    console.error("Error setting up audio event listeners: ", error);
  }
});

const emit = defineEmits(["audio-status-changed"]);

const handleAudioStatusChange = (status) => {
  try {
    isAudioPlaying.value = status;
    localStorage.setItem("audioStatus", status ? "playing" : "paused");
  } catch (error) {
    console.error("Error handling audio status change: ", error);
  }
};
</script>
