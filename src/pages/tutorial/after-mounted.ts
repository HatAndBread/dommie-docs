import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "afterMounted",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(`The `);
            __.code({ text: "afterMounted" });
            __.text(` lifecycle hook provided by `);
            __.code({ text: "componentParams" });
            __.text(
              ` takes a callback function that is called after the component is mounted in the DOM.`,
            );
          });
          __.p(() => {
            __.text(`In the example, notice that the text input is unfocused when the component is mounted.
              We can use the
              `);
            __.code({ text: "afterMounted" });
            __.text(` method to access our `);
            __.code({ text: "ref" });
            __.text(
              ` from the previous example and focus the input after the component is mounted.`,
            );
            __.text(` Uncomment the code in the `);
            __.code({ text: "afterMounted" });
            __.text(
              ` callback and see how the input is now focused once the element is mounted in the DOM.`,
            );
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "afterMounted",
          hash: "PoMzqZr",
          height: "100%",
        });
      },
    });
  });
};
