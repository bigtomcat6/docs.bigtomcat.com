import { isString } from "@vuepress/helper/client";
import { useMutationObserver } from "@vueuse/core";
import type { VNode } from "vue";
import { defineComponent, h, ref, shallowRef } from "vue";
import { useRoute } from "vuepress/client";

import { usePure } from "@theme-hope/composables/index";
import { EyeIcon, FireIcon } from "@theme-hope/modules/info/components/icons";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index";

const replaceURL = (url: string): string => {
  if (url.endsWith("/"))  return url;
  else  return url.includes(".html") ? url : url + ".html";
};

export default defineComponent({
  name: "PageViewInfo",

  inheritAttrs: false,

  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false,
    },
  },

  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const isPure = usePure();

    const pageviewElement = shallowRef<HTMLElement>();
    const pageViews = ref(0);

    useMutationObserver(
      pageviewElement,
      () => {
        const count = pageviewElement.value!.textContent;

        if (count && !isNaN(Number(count))) pageViews.value = Number(count);
      },
      { childList: true },
    );

    return (): VNode | null =>
      props.pageview
        ? h(
            "span",
            {
              class: "page-pageview-info",
              "aria-label": `${metaLocale.value.views}${
                isPure.value ? "" : "🔢"
              }`,
              ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            },
            [
              h(pageViews.value < 1000 ? EyeIcon : FireIcon),
              h(
                "span",
                {
                  ref: pageviewElement,
                  id: "ArtalkPV",
                  class: "vp-pageview waline-pageview-count",
                  "data-path": isString(props.pageview)
                    ? props.pageview
                    : replaceURL(route.path),
                  "data-page-key": isString(props.pageview)
                    ? props.pageview
                    : replaceURL(route.path),
                },
                "...",
              ),
            ],
          )
        : null;
  },
});