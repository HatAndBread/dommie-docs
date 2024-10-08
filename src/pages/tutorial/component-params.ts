import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  const cp = (__: Template) => __.code({ text: "componentParams" });
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Component Parameters",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(`
              Dommie provides each component with an object (which we will refer to from here on out as
              `);
            cp(__);
            __.text(
              ") that contains all the essential tools to manage the component's internal logic and behavior.",
            );
            __.text(`
              Take a look at the result of the example code and take note of the methods
              `);
            cp(__);
            __.text("provides you. ");
            __.text("Of relevance to state management are the ");
            __.code({ text: "state" });
            __.text(" and ");
            __.code({ text: "subscribe" });
            __.text(" methods.");
          });
          __.p(() => {
            __.text("The ");
            __.code({ text: "state" });
            __.text(` method enables you to create reactive state variables within your component.
              These variables trigger updates to the UI when they change, ensuring your app stays in sync with its data.
              The
              `);
            __.code({ text: "subscribe" });
            __.text(` method complements this by allowing you to register side effects—functions that run whenever the state changes.
              `);
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Component Parameters",
          hash: "QWeNQmv",
          height: "100%",
        });
      },
    });
  });
};
