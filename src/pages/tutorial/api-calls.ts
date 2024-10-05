import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "API Calls",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.code({ text: "afterMounted" });
            __.text(
              ` is also useful for making API calls after the component is mounted in the DOM.
              In the example, we fetch some data about cats from an API and display it in the DOM after the component has been mounted.
              Uncomment the code in the `,
            );
            __.code({ text: "afterMounted" });
            __.text(
              ` callback and see how the data is fetched and displayed after the HTML has been rendered.`,
            );
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "API Calls",
          hash: "YzmWXZB",
          height: "100%",
        });
      },
    });
  });
};
