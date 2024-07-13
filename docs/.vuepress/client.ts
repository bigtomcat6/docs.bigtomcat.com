import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ 
      type: "homepage" || "blog-homepage",
      light: "#333", dark: "#bbb"
    });
  },
});