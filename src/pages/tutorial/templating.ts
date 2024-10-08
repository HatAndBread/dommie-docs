import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";
import code from "../../parts/code";

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
            __.text("Don't be confused by the name—it's just a convention. ");
            __.text(
              `You can call it anything you want.
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
            code(__, `__.div() // <div></div>`);
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
        code(
          __,
          `__.div({class: "my-class", id: "my-id"})
// <div class="my-class" id="my-id"></div>`,
        ),
          __.p(() => {
            __.text(
              `The final optional argument of the method is a callback function that can be used to nest other elements inside the div.`,
            );
          });
        code(
          __,
          `__.div({id: "parent"}, () => __.div({id: "child"}))
/*
<div id="parent">
  <div id="child"></div>
</div>
*/`,
        );
        __.p(() => {
          __.text(`You can add a text node to an element either by adding a `);
          __.code({ text: "text" });
          __.text(` option to an attributes object, or by calling the `);
          __.code({ text: "text" });
          __.text(` method of `);
          __.code({ text: "__" });
        });
        code(
          __,
          `__.div({text: "Hello, World!"})
// <div>Hello, World!</div>
// or
__.div(() => __.text("Hello, World!"))
// <div>Hello, World!</div>`,
        );
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
