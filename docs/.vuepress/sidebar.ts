import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      prefix: "reading/",
      text: "",
      children: "structure",
    }
  ],
});
