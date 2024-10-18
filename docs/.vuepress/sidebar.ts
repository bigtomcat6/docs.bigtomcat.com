import { sidebar } from "vuepress-theme-hope";

export const zhSide = sidebar({
  "/reading/": [
    "/",
    {
      text: "",
      children: "structure"
    }
  ],
  "/posts/": [
    "/",
    {
      text: "",
      children: "structure"
    }
  ],
  "/category/": false,
  "/tag/": false,
  "/star/": false,
  "/article/": false,
  "/timeline/": false,
});

export const enSide = sidebar({
  "/en/posts/": [
    "/en/",
    {
      text: "",
      children: "structure"
    }
  ],
  "/en/category/": false,
  "/en/tag/": false,
  "/en/star/": false,
  "/en/article/": false,
  "/en/timeline/": false,
});
