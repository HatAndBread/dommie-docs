import type { Template } from "dommie";
import codepen from "../parts/codepen";
import code from "../parts/code";

export default (__: Template) => {
  return __.component(({ r, state }) => {
    const count = state(0);
    const showCount = state(false);
    __.div(
      {
        class: "hero bg-base-100 h-fit min-h-[calc(100vh-64px)] text-secondary",
      },
      () => {
        __.div(
          { class: "hero-content flex-col-reverse lg:flex-row gap-8" },
          () => {
            __.div(
              {
                class:
                  "w-full bg-base-200 rounded-lg overflow-hidden flex items-center justify-center max-w-[90vw]",
              },
              () => {
                __.div(
                  {
                    class: "w-full z-10 relative min-h-[350px]",
                    subscribe: showCount,
                  },
                  () => {
                    __.button(
                      {
                        text: showCount.value ? "" : "👀 RESULT",
                        class:
                          "absolute top-0 right-0 z-10 btn btn-outline btn-primary",
                        click: () => showCount.update(!showCount.value),
                      },
                      () => {
                        if (!showCount.value) return;
                        __.img({
                          src: "/code.svg",
                          alt: "Code",
                          width: 20,
                          height: 20,
                        });
                      },
                    );
                    if (!showCount.value) {
                      code(__, counterCode);
                      return;
                    }
                    __.div(
                      {
                        class:
                          "p-4 flex flex-col items-center justify-center min-h-[350px] bg-accent",
                      },
                      () => {
                        __.h1({
                          style: { fontSize: "2rem", fontWeight: "bold" },
                          text: () => `Count: ${count.value}`,
                          subscribe: count,
                        });
                        __.div(() => {
                          __.button({
                            class: "btn btn-primary font-bold text-2xl",
                            text: "+",
                            style: { touchAction: "manipulation" },
                            click: () => count.update(count.value + 1),
                          });
                          __.text(" ");
                          __.button({
                            class: "btn btn-primary font-bold text-2xl",
                            text: "-",
                            style: { touchAction: "manipulation" },
                            click: () => count.update(count.value - 1),
                          });
                        });
                      },
                    );
                    // codepen(__, {
                    //   hash: "wvVMwBz",
                    //   title: "Hello Dommie!",
                    // });
                  },
                );
              },
            );
            __.div({ class: "p-2" }, () => {
              __.h1({
                class: "text-5xl font-bold",
                text: "Dommie – An Unambitious JavaScript UI Library 🌈",
              });
              __.p({
                class: "py-6",
                text: "Dommie is a tiny JavaScript UI library that doesn't care about the rest of your tech stack. Just drop it into any application and start building.",
              });
              __.div({ class: "flex gap-4" }, () => {
                __.button(
                  {
                    class: "btn btn-primary",
                    text: "Tutorial",
                    click: () => r.go("/tutorial"),
                  },
                  () => {
                    __.img({ src: "/code.svg", alt: "Code", width: 20 });
                  },
                );
                __.a(
                  {
                    class: "btn btn-primary",
                    text: "GitHub",
                    href: "https://github.com/HatAndBread/Dommie",
                    target: "_blank",
                  },
                  () => {
                    __.img({
                      src: "/github-mark.svg",
                      alt: "Github",
                      width: 20,
                    });
                  },
                );
              });
            });
          },
        );
        __.footer(() => {});
      },
    );
    __.div({ class: "divider" });
    __.div({ class: "flex justify-center" }, () => {
      __.div(
        {
          class: "flex flex-col justify-center gap-8 max-w-[900px] w-[90%]",
        },
        () => {
          __.h2({
            class: "text-5xl font-bold mt-8 text-center mb-4",
            text: "Why Dommie?",
          });
          __.strong(() => {
            __.text(
              "⚡ Intuitive templating in pure JavaScript. No JSX or alternative templating languages.",
            );
          });
          code(__, example1);
          __.strong({
            class: "mt-4",
            text: "⚡ No need for complex build tools. Just drop it into any app with a CDN: ",
          });
          code(__, `import app from "https://esm.sh/dommie"`);
          __.em({
            text: " ー Or as an NPM module ー",
            class: "text-center",
          });
          code(__, "> npm install dommie");
          __.p({ class: "mt-4" }, () => {
            __.strong({
              text: `
            ⚡ Not every app needs a UI framework.
            `,
            });
            __.p(() => {
              __.br();
              __.text(`
                Traditional server-side frameworks like Rails, Django, and Laravel are great!--and Dommie fits in with them seamlessly.
                Just sprinkle some Dommie on top when you want to add a little reactivity to complex UI interactions. No need to structure your app around your frontend.
                `);
            });
          });
          __.p(() => {
            __.strong({ text: "⚡ Single Page Applications" });
            __.p(() => {
              __.br();
              __.strong({ text: "SPAs" });
              __.text(
                " have their place too, and Dommie has that covered with built-in client-side routing.",
              );
            });
          });
        },
      );
    });
    __.div({ class: "divider my-16" });
    __.div({ class: "flex justify-center" }, () => {
      __.div(
        {
          class: "flex flex-col justify-center gap-4 max-w-[900px] w-[90%]",
        },
        () => {
          __.h2({
            class: "text-5xl font-bold text-center mb-4",
            text: "Examples",
          });
          __.p({
            text: "The easiest way to get started is to fork an example app and start breaking things. Feel free to fork and modify any of the examples below.",
          });
        },
      );
    });
    __.footer(
      {
        class:
          "mt-[128px] w-screen min-h-[180px] bg-primary flex flex-col justify-center items-center gap-8",
      },
      () => {
        __.p({
          text: "Created By Joshua Hume",
          class: "text-center text-secondary",
        });
        __.a({ href: "https://github.com/HatAndBread/Dommie" }, () => {
          __.img({
            src: "/github-mark.svg",
            width: 32,
            height: 32,
            alt: "GitHub",
          });
        });
        __.p(() => {
          __.text(`Copyright © ${new Date().getFullYear()}`);
        });
      },
    );
  });
};

const example1 = `import app from "dommie";
const template = (__) => {
  __.component(() => {
    __.div(() => {
      __.text("Hello, world!");
    });
  });
}
app(template, "#app");
`;

const counterCode = `const count = state(0)
__.h1({
  style: { fontSize: "2rem", fontWeight: "bold" },
  text: () => \`Count: \${count.value}\`,
  subscribe: count,
})
__.button({
  text: "+",
  click: () => count.update(count.value + 1),
})
__.button({
  text: "-",
  click: () => count.update(count.value - 1),
})
`;
