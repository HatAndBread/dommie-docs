import type { Template } from "dommie";
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
                            click: () => count.value++,
                          });
                          __.text(" ");
                          __.button({
                            class: "btn btn-primary font-bold text-2xl",
                            text: "-",
                            style: { touchAction: "manipulation" },
                            click: () => count.value--,
                          });
                        });
                      },
                    );
                  },
                );
              },
            );
            __.div({ class: "p-2" }, () => {
              __.h1(
                {
                  class: "text-5xl font-bold",
                  text: "Dommie – An Unambitious JavaScript UI Library ",
                },
                () => {
                  __.img({
                    src: "/dommie.png",
                    alt: "Dummy the Dommie Logo",
                    width: 40,
                    height: 40,
                  });
                },
              );
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
            text: "Why?",
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
            __.p({ class: "leading-relaxed" }, () => {
              __.br();
              __.text(`
                Traditional server-side frameworks like Rails, Django, and Laravel are great!--and Dommie fits in with them seamlessly.
                Just sprinkle some Dommie on top when you want to add a little reactivity to complex UI interactions. No need to structure your app around your frontend.
                `);
            });
          });
          __.p({ class: "leading-relaxed" }, () => {
            __.strong({ text: "⚡ Single Page Applications" });
            __.p(() => {
              __.br();
              __.strong({ text: "SPAs" });
              __.text(
                " have their place too, and Dommie has that covered with built-in client-side routing.",
              );
            });
          });
          __.p({ class: "leading-relaxed" }, () => {
            __.strong({ text: "⚡ Fast" });
            __.p(() => {
              __.br();
              __.text(
                `Dommie uses a "subscription" system in which DOM elements subscribe to state changes. This means that only the elements that need to be updated are updated, making it very performant.`,
              );
              __.div({ class: "mt-2" }, () => {
                code(
                  __,
                  `const count = state(0);
__.div({subscribe: count, text: () => count.value});
__.div({text: "Dommie will ignore me when \`count\` changes!"})`,
                );
              });
            });
          });
        },
      );
    });
    __.div({ class: "divider my-16" });
    __.h2({
      class: "text-5xl font-bold mt-8 text-center mb-4",
      text: "What?",
    });
    __.div({ class: "flex  justify-center" }, () => {
      __.div(
        {
          class: "flex flex-col justify-center gap-4 max-w-[900px] w-[90%]",
        },
        () => {
          __.p({ class: "max-w-[900px] leading-relaxed" }, () => {
            __.text(`Dommie is a personal project of `);
            __.a({
              href: "https://github.com/HatAndBread",
              class: "link font-semibold",
              text: "Joshua Hume",
            });
            __.text(
              `. It was created out of curiosity and a desire to have a simple reactive UI library that can be easily dropped into any project. `,
            );
            __.text(
              `React, Vue, etc. are great and have their place, but I found them to be overkill for many projects.
          Dommie was created to provide the experience of a reactive UI library without necessarily dictating the architecture of your app.
          I hope you find it useful!
          `,
            );
            __.br();
          });
          __.p({ class: "max-w-[900px] leading-relaxed" }, () => {
            __.strong({
              text: "Some other interesting projects that are made in a similar spirit:",
            });
            __.ul({ class: "flex flex-col gap-4 mt-4" }, () => {
              __.li({ class: "flex gap-2" }, () => {
                __.text("❤️");
                __.a({
                  href: "https://vanjs.org/",
                  text: " VanJS",
                  class: "link font-semibold",
                  target: "_blank",
                });
                __.text(`- "A 1.0kB Grab 'n Go Reactive UI Framework"`);
              });
              __.li({ class: "flex gap-2" }, () => {
                __.text("❤️");
                __.a({
                  href: "https://alpinejs.dev/",
                  text: "Alpine.js",
                  class: "link font-semibold",
                  target: "_blank",
                });
                __.text(
                  ` - "Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web."`,
                );
              });
              __.li({ class: "flex gap-2" }, () => {
                __.text("❤️");
                __.a({
                  href: "https://htmx.org/",
                  text: "HTMX",
                  class: "link font-semibold",
                  target: "_blank",
                });
                __.text(` - "high power tools for HTML"`);
              });
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
            class: "leading-relaxed",
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
                    target: "_blank",
                  },
                  () => {
                    __.img({
                      src: "/github-mark.svg",
                      style: { maxWidth: "20px" },
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
};
app(template, "#app");
`;

const counterCode = `const count = state(0);
__.h1({
  style: { fontSize: "2rem", fontWeight: "bold" },
  text: () => \`Count: \${count.value}\`,
  subscribe: count,
});
__.button({
  text: "+",
  click: () => count.value++,
});
__.button({
  text: "-",
  click: () => count.value--,
});
`;
