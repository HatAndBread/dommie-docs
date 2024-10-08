import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Refs",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(`Sometimes it is necessary to access the underlying DOM element directly.
              In Dommie, you can do this by using the
              `);
            __.code({ text: "ref" });
            __.text(
              ` method provided by "component params". As in the example, simply call the `,
            );
            __.code({ text: "ref" });
            __.text(
              ` method, save the result to a variable, and then pass it as the `,
            );
            __.code({ text: "ref" });
            __.text(` option to the element you want to access.`);
          });
          __.p(() => {
            __.text(
              `One caveat, however, is that the reference to the DOM element is only available after the component has been mounted to the DOM.`,
            );
            __.text(
              ` As you can see in the example, when we try to print out the value of the `,
            );
            __.code({ text: "ref" });
            __.text(" it is ");
            __.code({ text: "null" });
            __.text(
              `. In the next section, let's look at how we can hook into the lifecycle of a component and access the `,
            );
            __.code({ text: "ref" });
            __.text(` after the component has been mounted.`);
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Refs",
          hash: "abeZOOE",
          height: "100%",
        });
      },
    });
  });
};
