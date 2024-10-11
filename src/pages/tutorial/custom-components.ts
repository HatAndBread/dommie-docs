import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";
import code from "../../parts/code";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Custom Components",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `If you need to create a custom HTML element, you can use the `,
            );
            __.code("custom");
            __.text(" method of ");
            __.code("__");
            __.text(".");
          });
          __.p(() => {
            __.text(
              "For example, let's say you want to create the following html node: ",
            );
            code(__, "<hello>Hi!👋</hello>");
          });
          __.p(() => {
            __.text("All you need to do to create this is call ");
            __.code("__.custom()");
            __.text(" with a ");
            __.code("nodeName");
            __.text(" given as an option to the options object.");
          });
          code(
            __,
            "__.custom({nodeName: 'hello'}, () => { __.text('Hi!👋') })",
          );
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Custom Components",
          hash: "LYwxWZw",
          height: "100%",
        });
      },
    });
  });
};
