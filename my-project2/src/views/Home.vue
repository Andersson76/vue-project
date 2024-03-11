<template>
  <router-link to="/weather">
    <button
      type="button"
      class="rounded-full bg-indigo-600 px-4 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="navigateToWeather"
    >
      Press here to Continue
    </button>
    <WelcomeMessage
      message="Welcome in and check your local weather and other cool stuff"
    />
  </router-link>
</template>

<script setup>
import { useRouter } from "vue-router";
import WelcomeMessage from "../components/WelcomeMessage.vue";

const navigateToWeather = () => {
  try {
    const router = useRouter();

    if (router && router.currentRoute.value.path !== "/weather") {
      //Navigera endast om du inte redan är på Weather sidan
      router.push("/weather");
    }
  } catch (error) {
    console.error("Error navigating to weather: ", error);
  }
};
</script>
