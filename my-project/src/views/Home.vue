<template>
  <router-link to="/weather">
    <button
      type="button"
      class="rounded-full bg-indigo-600 px-4 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="navigateToWeather"
    >
      Press here to Continue
    </button>
  </router-link>
  <p class="text-indigo-600 mt-4">
    Welcome in and check your local weather and other cool stuff
  </p>
</template>

<script setup>
import { useRouter } from "vue-router";

const navigateToWeather = () => {
  const router = useRouter();

  if (router && router.currentRoute.value.path !== "/weather") {
    //Navigera endast om du inte redan är på Weather sidan
    router.push("/weather");
  }
};
</script>
