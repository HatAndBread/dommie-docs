import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Create A Dommie Application",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              "In this section, we'll learn how to create a simple application using Dommie.",
            );
          });
          __.ol(
            { class: "list-decimal list-inside flex flex-col gap-4" },
            () => {
              __.li(() => {
                __.strong({ text: "Importing Dommie: " });
                __.text("Start by importing ");
                __.code({ text: "app" });
                __.text(
                  " from the Dommie package. This is the entry point for your application.",
                );
              });

              __.li(() => {
                __.strong({ text: "Defining the Root Component: " });
                __.text(
                  "The root component is a function that takes a single argument (represented by ",
                );
                __.code({ text: "__" });
                __.text(") and returns a ");
                __.code({ text: "component" });
                __.text(". Every component in Dommie follows this structure.");
              });

              __.li(() => {
                __.strong({ text: "Mounting the App: " });
                __.text("The ");
                __.code({ text: "app" });
                __.text(" function needs two parameters:");
                __.ul({ class: "list-disc list-inside ml-4" }, () => {
                  __.li(() => {
                    __.text("A function that defines the root component.");
                  });
                  __.li(() => {
                    __.text(
                      "A CSS selector to identify the HTML element where the app will be rendered.",
                    );
                  });
                });
              });

              __.li(() => {
                __.strong({ text: "Multiple Apps: " });
                __.text(`
                You can create multiple Dommie apps on the same page by calling the app function multiple times
                with different root components and selectors. Have a look at the HTML in the example. Notice there is a
                div with the id "app2". Try creating a second app that renders to this div.
              `);
              });
            },
          );
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Create A Dommie Application",
          hash: "qBebpRp",
          height: "100%",
        });
      },
    });
  });
};
