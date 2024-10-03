import type { Template } from "dommie";
interface CodePenOptions {
  title: string;
  hash: string;
  height?: number | string;
}
export default (__: Template, options: CodePenOptions) => {
  __.component(({ afterMounted, state }) => {
    const addScript = state(false);
    afterMounted(() => {
      addScript.update(true);
    });
    __.p({
      class: "codepen",
      "data-theme-id": "light",
      "data-height": options.height || 400,
      "data-default-tab": "js",
      "data-slug-hash": options.hash,
      "data-pen-title": options.title,
      "data-editable": "true",
      "data-user": "HatAndBread",
    });
    __.span({ subscribe: addScript }, () => {
      if (addScript.value) {
        __.script({
          async: true,
          src: "https://cpwebassets.codepen.io/assets/embed/ei.js",
        });
      }
    });
  });
};
