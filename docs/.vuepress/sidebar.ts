import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/reading/": [
    "/",
    {
      text: "",
      children: "structure"
    }
  ],
  "/posts": [
    "/",
    "",
  ]
  
});
