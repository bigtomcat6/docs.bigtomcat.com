import { sidebar } from "vuepress-theme-hope";

export const zhSide = sidebar({
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

export const enSide = sidebar({
  "/en/posts": [
    "/en/",
    "",
  ]
});
