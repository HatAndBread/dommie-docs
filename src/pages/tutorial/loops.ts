import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Loops",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `Since Dommie is just plain JavaScript, you can use any native JavaScript iteration method to generate lists of elements.`,
            );
          });
          __.p(() => {
            __.text("In this example, we're using a simple ");
            __.code({ text: `forEach` });
            __.text(" loop to create a list of animals.");
          });
          __.p(() => {
            __.text("Each ");
            __.code({ text: "li" });
            __.text(
              ` element is assigned a unique ID.
              While the ID doesn't serve a specific purpose in this stateless example, it's a good habit to get into.
              As you'll see later, Dommie relies on these unique IDs to keep track of DOM elements when a component's state changes.
              If you are familiar with React or Vue, this serves the same purpose as a key prop.`,
            );
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Loops",
          hash: "XWvXzRr",
          height: "100%",
        });
      },
    });
  });
};
