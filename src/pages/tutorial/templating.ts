import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Dommie Templating",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text("In this section, you’ll learn the basics of ");
            __.strong({ text: "templating" });
            __.text(
              " in Dommie. We’ll cover how to define simple components and structure HTML elements dynamically.",
            );
          });

          __.p(() => {
            __.strong(() => {
              __.text("About ");
              __.code({ text: "__" });
            });
          });
          __.p(() => {
            __.text("You will see  ");
            __.code({ text: "__" });
            __.text(
              " a lot in Dommie code. Don't be confused by its name. The name ",
            );
            __.code({ text: "__" });
            __.text(
              ` is just a convention. You can call it anything you want. Its role, however, is vital to Dommie.
              It is an ordinary javascript object that holds methods for generating HTML elements.
              If you call
              `,
            );
            __.code({ text: "__.div()" });
            __.text(
              ", for example, it will inject a div element into the DOM.",
            );
          });

          __.p(() => {
            __.code({ text: "__.div()" });
            __.text(
              `
               can be called with no arguments to create an empty div element.
              `,
            );
          });
          __.p(() => {
            __.code({ text: `__.div()` });
            __.text(
              `
              can also be called with an optional object containing HTML attributes such as
              `,
            );
            __.code({ text: "class" });
            __.text(" or ");
            __.code({ text: "id" });
            __.text(".");
          });
        });
        __.pre(() =>
          __.code({ text: `__.div({class: "my-class", id: "my-id"})` }),
        );
        __.p(() => {
          __.text(
            `The final optional argument of the method is a callback function that can be used to nest other elements inside the div.`,
          );
        });
        __.pre(() => {
          __.code({
            text: `__.div({id: "parent"}, () => __.div({id: "child"}))`,
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Dommie Templating",
          hash: "wvVMwBz",
          height: "100%",
        });
      },
    });
  });
};
