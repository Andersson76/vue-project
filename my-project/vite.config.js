import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    middleware: [
      // Custom middleware to set correct Content-Type header for audio files
      (req, res, next) => {
        if (req.url.endsWith(".mp3")) {
          res.setHeader("Content-Type", "audio/mpeg");
        }
        next();
      },
    ],
  },
});
