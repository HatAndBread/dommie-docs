import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import code from "../../parts/code";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "TypeScript Support",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `Typing your Dommie components is easy. Simply import the `,
            );
            __.code({ text: "Template" });
            __.text(` interface from `);
            __.code({ text: `"dommie"` });
            __.text(` and use it as the type of `);
            __.code({ text: "__" });
            __.text(
              ", which contains the entire Dommie API (with a few small exceptions).",
            );
          });
          code(
            __,
            `import app from "dommie";
import type { Template } from "dommie";

const template = (__: Template) => {
  return __.component(() => {
    __.div({text: "Hello, TypeScript!"});
  });
};
app(template, "#app")
`,
          );
          __.p(() => {
            __.text(`When the type of `);
            __.code({ text: "state" });
            __.text(` variables can't be inferred, you can use the `);
            __.code({ text: "State" });
            __.text(` type.`);
          });
          code(
            __,
            `import app from "dommie";
import type { Template, State } from "dommie";

const template = (__: Template) => {
  return __.component(({state}) => {
    const count = <State<number | null>>state(null);
    const increment = () => {
      if (count.value !== null) count.value++;
    };
    __.div({text: () => count.value, subscribe: count});
    __.button({text: "Increment", click: increment });
  });
};
app(template, "#app")
`,
          );
        });
      },
    });
  });
};
