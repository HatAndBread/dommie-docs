import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Conditionals",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `As with loops, there is no special syntax for conditionals in Dommie. Just use any technique you would use in JavaScript. Check out the example for some ideas.`,
            );
          });
          __.p(() => {
            __.text("Don't mind the use of ");
            __.code({ text: "state" });
            __.text(
              " and other unfamiliar methods. We'll cover that in the next section.",
            );
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Conditionals",
          hash: "NWQrLXo",
          height: "100%",
        });
      },
    });
  });
};
