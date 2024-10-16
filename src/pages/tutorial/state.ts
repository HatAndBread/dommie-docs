import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";
import code from "../../parts/code";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "State Management Basics",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(`
              In this section, we’ll explore how to manage state in Dommie by building an interactive counter app.
              You'll learn how to initialize a stateful variable, update it reactively, and—importantly—ensure that changes to the state update the UI using the
              `);
            __.code({ text: "subscribe" });
            __.text(` option.`);
          });
          __.ol(
            { class: "list-decimal list-inside flex flex-col gap-4" },
            () => {
              __.li({ class: "" }, () => {
                __.strong({ text: "State Initialization: " });
                __.text("In Dommie, state is managed using the ");
                __.code({ text: "state()" });
                __.text(
                  " function, which initializes a reactive variable. This variable tracks the value and can be updated when necessary.",
                );
                __.br();
                __.text("In the example, we initialize the ");
                __.code({ text: "count" });
                __.text(" state like this: ");
                __.div({ class: "my-2" }, () => {
                  code(__, "const count = state(0);");
                });
                __.text("The ");
                __.code({ text: "count" });
                __.text(
                  " variable will hold the current value of the counter.",
                );
              });
              __.li(() => {
                __.strong({ text: "Accessing State Values: " });
                __.text(
                  "You can access the value of a state variable using the ",
                );
                __.code({ text: "value" });
                __.text(" property.");
                __.div({ class: "my-2" }, () => {
                  code(__, "console.log(count.value); // 0");
                });
              });
              __.li(() => {
                __.strong({ text: "Updating State: " });
                __.text("To update the state, simply change the ");
                __.code("value");
                __.text(" property of the state variable.");
                __.div({ class: "my-2" }, () =>
                  code(__, "const increment = () => count.value += 1;"),
                );
              });
              __.li(() => {
                __.strong({
                  text: "Displaying State with Subscription (The Key to Reactivity): ",
                });
                __.text("In the following block of code, we use the ");
                __.code({ text: "subscribe" });
                __.text(" option to bind the ");
                __.code({ text: "count" });
                __.text(" state to a ");
                __.code({ text: "div" });
                __.text(" element:");
                __.div({ class: "my-2" }, () => {
                  code(
                    __,
                    `__.div({text: () => \`Count: \${count.value}\`, subscribe: count}, () => {\n  __.div({text: count.value}); })`,
                  );
                });
                __.code({ text: "subscribe" });
                __.strong({
                  text: `is the key to reactivity in Dommie.
                  It allows Dommie to update only the elements that are subscribed to the state, rather than re-rendering the entire component.
                  `,
                });
              });
              __.li(() => {
                __.strong({ text: "Handling User Interaction: " });
                __.text("We’ve provided an ");
                __.code({ text: "increment" });
                __.text(" button that allows users to update the ");
                __.code({ text: "count" });
                __.text(" state when clicked:");
                __.div({ class: "my-2" }, () => {
                  code(__, `__.button({text: "Increment", click: increment});`);
                });
                __.text("Each time the button is clicked, the ");
                __.code({ text: "count" });
                __.text(" state is updated, and—thanks to the ");
                __.code({ text: "subscribe" });
                __.text("—the UI automatically reflects the new value.");
              });
              __.li(() => {
                __.strong({ text: "Challenge: Add a Decrement Button: " });
                __.text(
                  "Now it's your turn! To complete the example, implement a ",
                );
                __.code({ text: "decrement" });
                __.text("function and a button that decreases the counter.");
              });
            },
          );
        });
      },
      codepen: () => {
        codepen(__, {
          title: "State Management Basics",
          hash: "eYqJqmp",
          height: "100%",
        });
      },
    });
  });
};
