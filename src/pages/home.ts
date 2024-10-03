import type { Template } from "dommie";
import codepen from "../parts/codepen";

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
      },
    );
    __.div({ class: "flex flex-col justify-center gap-4" }, () => {
      __.div({ class: "divider" });
      __.h2({ class: "text-4xl font-bold mt-8", text: "Why Dommie?" });
      __.ul({ class: "list-disc list-inside" }, () => {
        __.li({ text: "Lightweight – Just 2.5KB minified and gzipped." });
        __.li({ text: "Reactive – Automatic DOM updates when data changes." });
        __.li({
          text: "Simple – No special syntax, just JavaScript templating.",
        });
        __.li({ text: "Fast – Built-in optimizations for fast rendering." });
        __.li({ text: "Flexible – Use with any framework or library." });
      });
    });
  });
};

/*
<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js" data-slug-hash="wvVMwBz" data-pen-title="Hello Dommie!" data-editable="true" data-user="HatAndBread" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/HatAndBread/pen/wvVMwBz">
  Hello Dommie!</a> by Joshua Hume (<a href="https://codepen.io/HatAndBread">@HatAndBread</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
*/
