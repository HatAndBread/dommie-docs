import type { Template } from "dommie";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export default (__: Template, text: string) => {
  __.component(({ afterMounted, ref }) => {
    const r = ref();
    afterMounted(() => {
      const el = r();
      if (!el) return;

      hljs.highlightElement(el);
    });
    __.pre(() => {
      __.code({ ref: r }, () => {
        __.text(text);
      });
    });
  });
};
