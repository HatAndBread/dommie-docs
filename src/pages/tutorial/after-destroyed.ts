import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "afterDestroyed",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `Although less common, it is also sometimes necessary to perform some cleanup after a component has been removed from the DOM.`,
            );
            __.text(
              ` In order to do this, "component params" provides you with the `,
            );
            __.code({ text: "afterDestroyed" });
            __.text(" lifecycle hook. ");
          });
          __.p(() => {
            __.text(
              `In this example, we added an event listener to the document to track when the mouse moves in the `,
            );
            __.code({ text: "afterMounted" });
            __.text(" lifecycle hook. ");
            __.text(`
              In order to make sure that we don't have any memory leaks, we remove the event listener when the component is destroyed using the
              `);
            __.code({ text: "afterDestroyed" });
            __.text(" lifecycle hook. ");
          });
        });
        __;
      },
      codepen: () => {
        codepen(__, {
          title: "afterDestroyed",
          hash: "oNKLXoJ",
          height: "100%",
        });
      },
    });
  });
};
