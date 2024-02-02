<template>
  <AudioPlayer class="mb-12" :audioElement="audioElement" />
  <div>
    <h2 class="text-2xl font-bold">The Weather Channel</h2>
    <p class="text-gray-600">Your daily weather supplier</p>

    <div class="mt-4">
      <form @submit.prevent="getWeather">
        <label for="location" class="block text-sm font-medium text-gray-700"
          >Location:
        </label>
        <input
          v-model="location"
          type="text"
          id="location"
          placeholder="Enter location"
          class="mt-1 p-2 border rounded-md w-full"
        />
        <button
          type="submit"
          class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
        >
          Get Weather
        </button>
      </form>
    </div>

    <div id="placeName" class="mt-4">
      <h3 class="text-xl font-bold">{{ placeName }}</h3>
    </div>

    <ul
      id="forecast-list"
      class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <li
        v-for="day in forecastDays"
        :key="day.date"
        class="bg-white p-4 rounded-md shadow-md"
      >
        <img :src="day.iconUrl" alt="Weather icon" class="mx-auto" />
        <div class="text-center mt-2">
          {{ day.date }}
          Max: {{ day.maxTemp }}˚C Min: {{ day.minTemp }}˚C <br />{{
            day.condition
          }}
        </div>
      </li>
    </ul>

    <ul id="weather" class="mt-4 flex justify-between items-center">
      <li>
        <p class="text-lg">
          <strong>Temperature Now: </strong>
          <span class="font-bold">{{ currentTemperature }}</span>
          &deg;
        </p>
      </li>
      <li>
        <img
          :src="currentWeatherIcon"
          alt="Current weather icon"
          class="w-12 h-12"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import AudioPlayer from "./AudioPlayer.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const apiKey = "4c9b96648amsh2dc6631f46e1410p14cef6jsn330d2b37413c";
const location = ref("");
const placeName = ref("");
const currentTemperature = ref("");
const currentWeatherIcon = ref("");
const forecastDays = ref([]);

const getWeather = async () => {
  try {
    const response = await axios.get(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location.value}&days=7`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );

    const data = response.data;

    placeName.value = data.location.name;
    currentTemperature.value = data.current.temp_c;
    currentWeatherIcon.value = data.current.condition.icon;

    forecastDays.value = data.forecast.forecastday.map((day) => ({
      date: day.date,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      condition: day.day.condition.text,
      iconUrl: day.day.condition.icon,
    }));
  } catch (error) {
    console.error("Error fetching weather data:", error);
    // Display an error message to the user if needed
  }
};
</script>
