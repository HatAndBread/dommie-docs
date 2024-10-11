import type { Template } from "dommie";
interface Options {
  title: string;
  content: () => void;
  codepen?: () => void;
}

const tutorialRoutes = {
  "/tutorial": "Welcome To Dommie!",
  "/tutorial/create": "Create A Dommie Application",
  "/tutorial/templating": "Templating",
  "/tutorial/reusable-components": "Reusable Components",
  "/tutorial/loops": "Loops",
  "/tutorial/conditionals": "Conditionals",
  "/tutorial/custom-components": "Custom Components",
  "/tutorial/component-params": "Component Parameters",
  "/tutorial/state": "State Management",
  "/tutorial/multiple-subscriptions": "Multiple Subscriptions",
  "/tutorial/side-effects": "Side Effects",
  "/tutorial/events": "Events",
  "/tutorial/refs": "Refs",
  "/tutorial/after-mounted": "afterMounted",
  "/tutorial/api-calls": "API Calls",
  "/tutorial/after-destroyed": "afterDestroyed",
  "/tutorial/typescript": "TypeScript",
  "/tutorial/single-page-applications": "Single Page Applications",
  "/tutorial/navigation": "Navigating Between Pages",
  "/tutorial/wildcard-routes": "Wildcard Routes",
  "/tutorial/done": "🎈🎈🎈",
};
const sectionBreaks = {
  "/tutorial": "Getting Started",
  "/tutorial/component-params": "State Management",
  "/tutorial/refs": "Refs and Life Cycle",
  "/tutorial/typescript": "Typescript Support",
  "/tutorial/single-page-applications": "Single Page Applications",
  "/tutorial/done": "That's It!",
};
export default (__: Template, options: Options) => {
  return __.component(({ r, subscribe }) => {
    subscribe(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [r.path]);
    __.div(
      { class: "w-screen md:h-[calc(100vh-64px)] flex flex-col md:flex-row" },
      () => {
        __.div({ class: "md:w-1/2 h-full bg-base-100 relative" }, () => {
          __.div({ class: "drawer" }, () => {
            __.input({
              id: "my-drawer",
              type: "checkbox",
              class: "drawer-toggle",
            });
            __.div({ class: "drawer-content" });
            __.div({ class: "drawer-side z-10" }, () => {
              __.label({
                for: "my-drawer",
                ariaLabel: "close sidebar",
                class: "drawer-overlay",
              });
              __.ul(
                {
                  subscribe: r.path,
                  class:
                    "menu bg-base-100 text-base-content min-h-full w-80 p-4 text-secondary",
                },
                () => {
                  Object.entries(tutorialRoutes).forEach(([route, title]) => {
                    if (sectionBreaks[route as keyof typeof sectionBreaks]) {
                      __.h1({
                        class: `text-lg font-bold mt-4 mb-2`,
                        text: sectionBreaks[
                          route as keyof typeof sectionBreaks
                        ],
                      });
                    }
                    __.li(
                      {
                        id: route,
                        class: `${r.path.value === route ? "bg-base-200 rounded-lg" : ""}`,
                      },
                      () => {
                        __.button({
                          text: title,
                          href: route,
                          click: () => r.go(route),
                        });
                      },
                    );
                  });
                },
              );
            });
          });
          __.div(
            {
              class:
                "flex flex-col gap-4 p-8 font-medium md:max-h-[calc(100vh-128px)] overflow-auto",
            },
            () => {
              __.h1({ class: "text-2xl font-bold", text: options.title });
              options.content();
            },
          );
          __.div(
            {
              subscribe: r.path,
              class:
                "md:absolute bottom-0 w-full flex justify-center items-center bg-base-200 h-[64px]",
            },
            () => {
              const routes = Object.keys(tutorialRoutes);
              const currentRoute = routes.indexOf(r.path.value);
              __.button({
                class: "btn btn-link text-secondary text-lg",
                text: "Back",
                disabled: currentRoute === 0,
                click: () => {
                  if (currentRoute > 0) {
                    r.go(routes[currentRoute - 1]);
                  }
                },
              });
              __.div({ text: "・", class: "font-bold" });
              __.label({
                for: "my-drawer",
                class: "btn btn-link text-secondary drawer-button text-lg",
                text: "Contents",
              });
              __.div({ text: "・", class: "font-bold" });
              __.button({
                class: "btn btn-link text-secondary text-lg",
                text: "Next",
                disabled: currentRoute === routes.length - 1,
                click: () => {
                  if (currentRoute < routes.length - 1) {
                    r.go(routes[currentRoute + 1]);
                  }
                },
              });
            },
          );
        });
        __.div(
          { class: "h-screen md:h-full bg-base-200 flex md:w-1/2" },
          () => {
            if (options.codepen) {
              options.codepen();
            } else {
              __.div(
                { class: "w-full flex justify-center items-center" },
                () => {
                  __.img({
                    src: "/dommie.png",
                    width: 300,
                    height: 300,
                    class: "rounded-lg",
                  });
                },
              );
            }
          },
        );
      },
    );
  });
};
