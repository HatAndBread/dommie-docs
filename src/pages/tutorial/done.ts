import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import code from "../../parts/code";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "That's It! 🎉",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `That's pretty much all you need to know to use Dommie! I hope you found this tutorial useful and are ready to give Dommie a try.`,
            );
          });
          __.p(() => {
            __.text(
              `For further learning try forking some of these example apps:`,
            );
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
        });
      },
    });
  });
};
