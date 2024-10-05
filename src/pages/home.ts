import type { Template } from "dommie";
import codepen from "../parts/codepen";
import code from "../parts/code";

export default (__: Template) => {
  return __.component(({ r }) => {
    __.div(
      { class: "hero bg-base-100 h-[calc(100vh-64px)] text-secondary" },
      () => {
        __.div({ class: "hero-content flex-col lg:flex-row gap-8" }, () => {
          __.div(
            {
              class:
                "w-full bg-base-200 rounded-lg overflow-hidden flex items-center justify-center",
            },
            () => {
              __.span({
                class:
                  "loading loading-bars loading-lg absolute text-secondary",
              });
              __.div({ class: "w-full z-10" }, () => {
                codepen(__, {
                  hash: "wvVMwBz",
                  title: "Hello Dommie!",
                });
              });
            },
          );
          __.div(() => {
            __.h1({
              class: "text-5xl font-bold",
              text: "Dommie – A lightweight JavaScript UI library for building fast, dynamic interfaces.",
            });
            __.p({
              class: "py-6",
              text: "Dommie keeps it simple with pure JavaScript templating—no special syntax, just the JavaScript you know. With built-in reactivity and no need for complex build tools, you can start building dynamic interfaces right away, hassle-free.",
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
        });
        __.footer(() => {});
      },
    );
    __.div({ class: "divider" });
    __.div({ class: "flex justify-center" }, () => {
      __.div(
        {
          class: "flex flex-col justify-center gap-4 max-w-[900px] w-[90%]",
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
            __.p({ class: "mt-4" }, () => {
              __.text(`
                Dommie is a lightweight library that provides just enough to build dynamic interfaces without the overhead of a full framework.
                We love traditional server-side frameworks like Rails, Django, and Laravel--and Dommie fits in with them seamlessly.
                Just sprinkle some Dommie on top when you need to handle complex UI interactions.
                `);
            });
          });
          __.p({ class: "" }, () => {
            __.strong({ text: "⚡ Single Page Applications (SPAs)" });
            __.text(
              " have their place too, and Dommie has that covered with built-in client-side routing.",
            );
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
          __.ul(() => {
            const examples = [
              {
                title: "Dommie Docs",
                copy: "THIS website here!",
                appUrl: "https://dommie-docs.vercel.app/",
                codeUrl: "https://github.com/HatAndBread/dommie-docs",
              },
              {
                title: "Breweries Of The World",
                copy: "An example SPA built with the Open Brewery DB API.",
                appUrl: "https://breweries-of-the-world.vercel.app/",
                codeUrl:
                  "https://github.com/HatAndBread/breweries-of-the-world",
              },
              {
                title: "Dommie Weather Example",
                copy: "A simple weather app made with Open Meteo API.",
                appUrl: "https://dommie-weather-example.vercel.app/",
                codeUrl:
                  "https://github.com/HatAndBread/dommie-weather-example",
              },
            ];
            for (const example of examples) {
              __.li({ class: "flex ites-center gap-4 mb-4" }, () => {
                __.strong({ text: "🚀" });
                __.a({
                  class: "link font-semibold",
                  text: example.title,
                  href: example.appUrl,
                  target: "_blank",
                });
                __.span({
                  text: example.copy,
                });
                __.a(
                  {
                    href: example.codeUrl,
                    class: "",
                    target: "_blank",
                  },
                  () => {
                    __.img({
                      src: "/github-mark.svg",
                      height: 20,
                      width: 20,
                      alt: "code",
                    });
                  },
                );
              });
            }
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
