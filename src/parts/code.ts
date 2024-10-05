import type { Template } from "dommie";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

export default (__: Template, text: string) => {
  __.component(({ afterMounted }) => {
    afterMounted(() => {
      hljs.highlightAll();
    });
    __.pre(() => {
      __.code(() => {
        __.text(text);
      });
    });
  });
};
