import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Events",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `In previous examples we have looked at how to handle clicks on buttons, but of course we need to handle more than just clicks in web applications.`,
            );
          });
          __.p(() => {
            __.text(`In this example, we are listening for input in the text `);
            __.code({ text: "input" });
            __.text(
              ` element. You can listen for any valid DOM event by adding the name of the event along with a handler function as an option to the element.
              As you can see in the example, Dommie passes the event object as the first argument to the handler function.
              `,
            );
          });

          __.p(() => {
            __.text(`An exhaustive list of events is available `);
            __.a({
              class: "link",
              href: "https://developer.mozilla.org/en-US/docs/Web/Events",
              text: "here",
              target: "_blank",
            });
            __.text(`.`);
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Events",
          hash: "GRVqgVz",
          height: "100%",
        });
      },
    });
  });
};
