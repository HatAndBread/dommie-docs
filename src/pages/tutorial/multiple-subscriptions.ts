import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Multiple Subscriptions",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(`At times it may be necessary to subscribe an element to multiple states.
                    In this example, we're using two states:
              `);
            __.code({ text: "count" });
            __.text(" and ");
            __.code({ text: "backgroundColor" });
            __.text(", each of which is updated independently.");
            __.text(` To make sure the `);
            __.code({ text: "div" });
            __.text(
              ` element is updated when either state changes, we subscribe it to both states using an array.`,
            );
          });
          __.p(() => {
            __.text(
              `Notice how the options object passed to the div element has changed.
              `,
            );
            __.code({ text: "text" });
            __.text(` is now a function that returns a string, and `);
            __.code({ text: "backgroundColor" });
            __.text(` is now a function that returns a string.`);
            __.text(
              `
              If a state is updated, the function will be called, and the element will be updated with the new value.
              This is not necessary for children of the element, as they will be updated automatically.
              `,
            );
          });
        });
      },
      codepen: () => {
        codepen(__, {
          /*
          import app from "https://esm.sh/dommie";

          const main = (__) => {
            return __.component(({ state }) => {
              const getRan = () => Math.floor(Math.random() * 256);
              const getRandomColor = () => `rgb(${getRan()}, ${getRan()}, ${getRan()})`;

              const count = state(0);
              const backgroundColor = state(getRandomColor());

              setInterval(() => backgroundColor.update(getRandomColor()), 500);
              setInterval(() => count.update(count.value + 1), 1000);

              __.div({
                text: () => `Count: ${count.value}`,
                subscribe: [count, backgroundColor],
                style: { backgroundColor: () => backgroundColor.value }
              });
            });
          };

          app(main, "#app");
          */
          title: "Multiple Subscriptions",
          hash: "gOVrpaY",
          height: "100%",
        });
      },
    });
  });
};
