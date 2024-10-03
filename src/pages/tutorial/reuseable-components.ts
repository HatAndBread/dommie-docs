import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Reusable Components",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(`Creating `);
            __.strong({ text: "reusable components" });
            __.text(
              ` in Dommie is easy. In the example code, we have a simple button component that takes a color, text, and click handler as arguments. This component can be reused whenever and whereever you want.`,
            );
          });
          __.p(() => {
            __.text(` Notice how we pass the `);
            __.code({ text: `__` });
            __.text(
              ` object to the button component. This gets passed down the entire component tree, from the top-level component to its children and grandchildren and so on.`,
            );
          });
        });
      },
      codepen: () => {
        /*
        import app from "https://esm.sh/dommie";

        const main = (__) => {
          return __.component(() => {
            __.div(
              { style: { display: "flex", flexDirection: "column", gap: "8px" } },
              () => {
                myButton(__, "pink", "I am a pink button", () =>
                  console.log("I am a pink button")
                );
                myButton(__, "orange", "I am an orange button", () =>
                  console.log("I am an orange button")
                );
                // Try adding another button here!
              }
            );
          });
        };

        const myButton = (__, color, text, click) => {
          return __.component(() => {
            __.button({
              text,
              click,
              style: { borderRadius: "8px", backgroundColor: color }
            });
          });
        };

        app(main, "#app");
        */
        codepen(__, {
          title: "Reusable Components",
          hash: "poMgLQX",
          height: "100%",
        });
      },
    });
  });
};
