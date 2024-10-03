import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Side Effects",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(``);
          });
          __.p(() => {
            __.text("The ");
            __.code({ text: `subscribe` });
            __.text(" function, given as a parameter to ");
            __.code({ text: "component" });
            __.text(
              ", allows you to trigger side effects when state changes. Here's how it's used: ",
            );
            __.pre({ class: "mt-4" }, () => {
              __.code({
                text: `subscribe(() => {
  console.log("This will be logged when 'count' changes");
}, [count]);`,
              });
            });
          });
          __.strong({ text: "What's Happening:" });
          __.ul({ class: "list-disc list-inside ml-4" }, () => {
            __.li(() => {
              __.code({ text: "subscribe" });
              __.text(": Runs the provided function whenever the state (");
              __.code({ text: "count" });
              __.text(" in this case) changes.");
            });
            __.li(() => {
              __.code({ text: "[count]" });
              __.text(" tells subscribe to watch count for changes.");
            });
          });
          __.p(() => {
            __.text(`
              This allows you to react to state updates and conditionally trigger additional actions, like updating another piece of state or modifying the UI.
              `);
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Side Effects",
          hash: "bGXpEXd",
          height: "100%",
        });
      },
    });
  });
};
