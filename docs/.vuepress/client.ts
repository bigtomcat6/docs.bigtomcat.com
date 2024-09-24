import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

import HSentence from "./components/HSentence.vue";
// import HaoReadingLayout from "./layouts/HaoReadingLayout.vue";

export default defineClientConfig({
  enhance({app}) {
    app.component("HSentence", HSentence);
  },
  setup: () => {
    setupTransparentNavbar({ 
      type: "homepage" || "blog-homepage",
      light: "#333", dark: "#bbb",
      threshold: 20
    });
  },
  // layouts: { HaoReadingLayout },
});